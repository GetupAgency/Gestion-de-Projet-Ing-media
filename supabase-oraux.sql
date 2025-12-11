-- Table pour les oraux individuels
CREATE TABLE IF NOT EXISTS oraux (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  passage_order INTEGER NOT NULL,
  project_chosen TEXT,
  comments TEXT,
  note_comprehension INTEGER CHECK (note_comprehension >= 0 AND note_comprehension <= 20),
  note_technique INTEGER CHECK (note_technique >= 0 AND note_technique <= 20),
  note_justification INTEGER CHECK (note_justification >= 0 AND note_justification <= 20),
  note_presentation INTEGER CHECK (note_presentation >= 0 AND note_presentation <= 20),
  oral_started_at TIMESTAMP WITH TIME ZONE,
  oral_ended_at TIMESTAMP WITH TIME ZONE,
  duration_minutes INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour recherche rapide
CREATE INDEX idx_oraux_order ON oraux(passage_order);
CREATE INDEX idx_oraux_student ON oraux(student_name);

-- Trigger pour updated_at
CREATE TRIGGER oraux_updated_at
  BEFORE UPDATE ON oraux
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Row Level Security
ALTER TABLE oraux ENABLE ROW LEVEL SECURITY;

-- Politique : Lecture pour tous (pour que les étudiants voient l'ordre de passage)
CREATE POLICY "Enable read for all" ON oraux
  FOR SELECT USING (true);

-- Politique : Enseignant peut tout faire
CREATE POLICY "Enable all for teacher" ON oraux
  FOR ALL USING (true);

-- Insérer les étudiants (tous sur Eventeo)
INSERT INTO oraux (student_name, passage_order, project_chosen) VALUES
  ('Tess', 1, 'eventeo'),
  ('Alioune', 2, 'eventeo'),
  ('Bahia', 3, 'eventeo'),
  ('Marie-Julie', 4, 'eventeo'),
  ('Gaetan', 5, 'eventeo'),
  ('Maxime Coche', 6, 'eventeo'),
  ('Laurent', 7, 'eventeo'),
  ('Aurélien', 8, 'eventeo'),
  ('Marc', 9, 'eventeo'),
  ('Chaima', 10, 'eventeo'),
  ('Aurélie', 11, 'eventeo'),
  ('Tiffany', 12, 'eventeo'),
  ('Hortense', 13, 'eventeo'),
  ('Maxime M', 14, 'eventeo'),
  ('Lobna', 15, 'eventeo'),
  ('Yann', 16, 'eventeo')
ON CONFLICT DO NOTHING;

