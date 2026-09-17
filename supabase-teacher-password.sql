-- Table pour stocker le mot de passe enseignant de manière sécurisée
CREATE TABLE IF NOT EXISTS teacher_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insérer le hash du mot de passe enseignant (ne jamais committer le mot de passe en clair).
-- Hash « legacy » calculé par lib/teacherAuth.ts (legacyHash). Mécanisme conservé pour
-- compatibilité : préférez TEACHER_PASSWORD + TEACHER_SECRET côté serveur (voir MODE_ENSEIGNANT.md).
INSERT INTO teacher_config (password_hash)
VALUES ('<HASH_ICI>')
ON CONFLICT DO NOTHING;

-- Activer Row Level Security
ALTER TABLE teacher_config ENABLE ROW LEVEL SECURITY;

-- Politique : lecture publique du hash (héritage). Avec TEACHER_PASSWORD défini côté serveur,
-- cette table n'est plus consultée et cette policy peut être supprimée.
CREATE POLICY "Enable read for password verification" ON teacher_config
  FOR SELECT USING (true);

