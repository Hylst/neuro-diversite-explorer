-- Script SQL pour Supabase SQL Editor

-- 1. Ajout de la colonne avatar_base64 à la table profiles si elle n'existe pas déjà
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_schema = 'public' 
                   AND table_name = 'profiles' 
                   AND column_name = 'avatar_base64') THEN
        ALTER TABLE profiles ADD COLUMN avatar_base64 TEXT;
        RAISE NOTICE 'Colonne avatar_base64 ajoutée à la table profiles';
    ELSE
        RAISE NOTICE 'La colonne avatar_base64 existe déjà dans la table profiles';
    END IF;
END $$;

-- 2. Vérification et création de la table assessment_results si elle n'existe pas
CREATE TABLE IF NOT EXISTS assessment_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    assessment_type VARCHAR(50) NOT NULL,
    score INTEGER,
    level VARCHAR(50) NOT NULL,
    description TEXT,
    color VARCHAR(50),
    suggestions TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Vérification et création de la table user_notes si elle n'existe pas
CREATE TABLE IF NOT EXISTS user_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    tags TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Ajout des politiques RLS (Row Level Security) pour les nouvelles tables
-- Politique pour assessment_results
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'assessment_results' AND policyname = 'Users can view their own assessment results') THEN
        CREATE POLICY "Users can view their own assessment results" ON assessment_results
            FOR SELECT USING (auth.uid() = user_id);
        RAISE NOTICE 'Politique de sélection créée pour assessment_results';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'assessment_results' AND policyname = 'Users can insert their own assessment results') THEN
        CREATE POLICY "Users can insert their own assessment results" ON assessment_results
            FOR INSERT WITH CHECK (auth.uid() = user_id);
        RAISE NOTICE 'Politique d''insertion créée pour assessment_results';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'assessment_results' AND policyname = 'Users can update their own assessment results') THEN
        CREATE POLICY "Users can update their own assessment results" ON assessment_results
            FOR UPDATE USING (auth.uid() = user_id);
        RAISE NOTICE 'Politique de mise à jour créée pour assessment_results';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'assessment_results' AND policyname = 'Users can delete their own assessment results') THEN
        CREATE POLICY "Users can delete their own assessment results" ON assessment_results
            FOR DELETE USING (auth.uid() = user_id);
        RAISE NOTICE 'Politique de suppression créée pour assessment_results';
    END IF;
END $$;

-- Politique pour user_notes
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_notes' AND policyname = 'Users can view their own notes') THEN
        CREATE POLICY "Users can view their own notes" ON user_notes
            FOR SELECT USING (auth.uid() = user_id);
        RAISE NOTICE 'Politique de sélection créée pour user_notes';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_notes' AND policyname = 'Users can insert their own notes') THEN
        CREATE POLICY "Users can insert their own notes" ON user_notes
            FOR INSERT WITH CHECK (auth.uid() = user_id);
        RAISE NOTICE 'Politique d''insertion créée pour user_notes';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_notes' AND policyname = 'Users can update their own notes') THEN
        CREATE POLICY "Users can update their own notes" ON user_notes
            FOR UPDATE USING (auth.uid() = user_id);
        RAISE NOTICE 'Politique de mise à jour créée pour user_notes';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_notes' AND policyname = 'Users can delete their own notes') THEN
        CREATE POLICY "Users can delete their own notes" ON user_notes
            FOR DELETE USING (auth.uid() = user_id);
        RAISE NOTICE 'Politique de suppression créée pour user_notes';
    END IF;
END $$;

-- 5. Activer RLS sur les nouvelles tables si ce n'est pas déjà fait
ALTER TABLE assessment_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_notes ENABLE ROW LEVEL SECURITY;

-- 6. Création d'index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_assessment_results_user_id ON assessment_results(user_id);
CREATE INDEX IF NOT EXISTS idx_assessment_results_type ON assessment_results(assessment_type);
CREATE INDEX IF NOT EXISTS idx_user_notes_user_id ON user_notes(user_id);

-- 7. Mise à jour de la fonction de mise à jour automatique du timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 8. Ajout des triggers pour la mise à jour automatique du timestamp
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_assessment_results_updated_at') THEN
        CREATE TRIGGER set_assessment_results_updated_at
        BEFORE UPDATE ON assessment_results
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
        RAISE NOTICE 'Trigger de mise à jour créé pour assessment_results';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_user_notes_updated_at') THEN
        CREATE TRIGGER set_user_notes_updated_at
        BEFORE UPDATE ON user_notes
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
        RAISE NOTICE 'Trigger de mise à jour créé pour user_notes';
    END IF;
END $$;