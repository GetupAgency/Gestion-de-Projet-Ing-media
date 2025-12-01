import { supabase, isSupabaseConfigured } from './supabase'
import { getTeamData, type TeamData } from './gameSystem'

// Synchroniser les données locales vers Supabase
export async function syncToSupabase(): Promise<{ success: boolean, message: string }> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message: 'Supabase non configuré. Contactez votre enseignant.'
    }
  }

  const teamData = getTeamData()
  if (!teamData) {
    return {
      success: false,
      message: 'Aucune donnée d\'équipe à synchroniser.'
    }
  }

  try {
    // Récupérer le projet sélectionné
    const projectId = localStorage.getItem('selectedMissionProject') || 'unknown'

    // Vérifier si l'équipe existe déjà
    const { data: existing } = await supabase!
      .from('teams')
      .select('id')
      .eq('team_name', teamData.teamName)
      .single()

    if (existing) {
      // Mettre à jour
      const { error } = await supabase!
        .from('teams')
        .update({
          points: teamData.points,
          badges: teamData.badges,
          easter_eggs: teamData.easterEggs,
          tokens: teamData.tokens,
          project_id: projectId,
          last_activity: new Date().toISOString()
        })
        .eq('team_name', teamData.teamName)

      if (error) throw error

      return {
        success: true,
        message: `Score mis à jour : ${teamData.points} points !`
      }
    } else {
      // Créer
      const { error } = await supabase!
        .from('teams')
        .insert({
          team_name: teamData.teamName,
          points: teamData.points,
          badges: teamData.badges,
          easter_eggs: teamData.easterEggs,
          tokens: teamData.tokens,
          project_id: projectId,
          last_activity: new Date().toISOString()
        })

      if (error) throw error

      return {
        success: true,
        message: `Équipe enregistrée : ${teamData.points} points !`
      }
    }
  } catch (error: any) {
    console.error('Erreur sync Supabase:', error)
    return {
      success: false,
      message: `Erreur : ${error.message || 'Problème de connexion'}`
    }
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
        // Recharger les données
        getAllScoresFromSupabase().then(callback)
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}

