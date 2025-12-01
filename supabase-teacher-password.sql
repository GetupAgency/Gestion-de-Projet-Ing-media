-- Table pour stocker le mot de passe enseignant de manière sécurisée
CREATE TABLE IF NOT EXISTS teacher_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insérer le hash du mot de passe "Grosac4Ever!"
-- Hash calculé : 1935027444
INSERT INTO teacher_config (password_hash) 
VALUES ('1935027444')
ON CONFLICT DO NOTHING;

-- Activer Row Level Security
ALTER TABLE teacher_config ENABLE ROW LEVEL SECURITY;

-- Politique : Tout le monde peut lire (pour vérifier le mot de passe)
CREATE POLICY "Enable read for password verification" ON teacher_config
  FOR SELECT USING (true);

