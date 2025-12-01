import { supabase, isSupabaseConfigured } from './supabase'
import { getTeamData, type TeamData } from './gameSystem'

// Synchroniser les données locales vers Supabase
export async function syncToSupabase(): Promise<{ success: boolean, message: string }> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message: 'Base de données non configurée. Utilisez l\'export manuel.'
    }
  }

  const teamData = getTeamData()
  if (!teamData) {
    return {
      success: false,
      message: 'Créez d\'abord votre équipe.'
    }
  }

  try {
    const projectId = localStorage.getItem('selectedMissionProject') || 'unknown'

    // Vérifier la connexion Supabase
    const { error: testError } = await supabase!.from('teams').select('id').limit(1)
    if (testError) {
      console.error('Test connexion:', testError)
      return {
        success: false,
        message: 'Impossible de se connecter à la base de données.'
      }
    }

    // Vérifier si l'équipe existe déjà
    const { data: existing, error: checkError } = await supabase!
      .from('teams')
      .select('id')
      .eq('team_name', teamData.teamName)
      .maybeSingle()

    if (checkError) {
      throw checkError
    }

    const dataToSync = {
      team_name: teamData.teamName,
      points: teamData.points,
      badges: teamData.badges,
      easter_eggs: teamData.easterEggs,
      tokens: teamData.tokens,
      project_id: projectId,
      last_activity: new Date().toISOString()
    }

    if (existing) {
      // Mettre à jour
      const { error } = await supabase!
        .from('teams')
        .update(dataToSync)
        .eq('team_name', teamData.teamName)

      if (error) throw error

      return {
        success: true,
        message: `Score synchronisé : ${teamData.points} points`
      }
    } else {
      // Créer
      const { error } = await supabase!
        .from('teams')
        .insert(dataToSync)

      if (error) throw error

      return {
        success: true,
        message: `Équipe créée dans la base : ${teamData.points} points`
      }
    }
  } catch (error: any) {
    console.error('Erreur sync:', error)
    
    let errorMessage = 'Erreur de synchronisation.'
    if (error.message?.includes('violates')) {
      errorMessage = 'Nom d\'équipe déjà pris. Choisissez un autre nom.'
    } else if (error.message?.includes('network')) {
      errorMessage = 'Problème de connexion internet.'
    }
    
    return {
      success: false,
      message: errorMessage
    }
  }
}

// Tester la connexion Supabase
export async function testSupabaseConnection(): Promise<boolean> {
  if (!isSupabaseConfigured() || !supabase) {
    return false
  }

  try {
    const { error } = await supabase.from('teams').select('id').limit(1)
    return !error
  } catch {
    return false
  }
}

// Récupérer tous les scores depuis Supabase
export async function getAllScoresFromSupabase(): Promise<TeamData[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .order('points', { ascending: false })

    if (error) throw error

    // Convertir au format TeamData
    return (data || []).map(row => ({
      teamName: row.team_name,
      points: row.points || 0,
      badges: row.badges || [],
      tokens: row.tokens || { expertQuestions: 3, revelations: 2, joker: 1 },
      easterEggs: row.easter_eggs || [],
      lastActivity: row.last_activity || row.updated_at
    }))
  } catch (error) {
    console.error('Erreur récupération scores:', error)
    return []
  }
}

// Écouter les changements en temps réel
export function subscribeToScores(callback: (teams: TeamData[]) => void) {
  if (!isSupabaseConfigured() || !supabase) {
    return () => {}
  }

  const channel = supabase
    .channel('teams-changes')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'teams' },
      () => {
        getAllScoresFromSupabase().then(callback)
      }
    )
    .subscribe()

  return () => {
    if (supabase) {
      supabase.removeChannel(channel)
    }
  }
}

