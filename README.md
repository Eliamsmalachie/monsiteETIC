# Formation Développeur Web - Excellence Training ETIC

Site web complet pour la formation intensive de développeur web avec système d'inscription et tableau de bord administrateur.

## 🚀 Fonctionnalités

### Frontend
- ✅ Page d'accueil attractive avec design vert
- ✅ Formulaire d'inscription multi-étapes
- ✅ Page de confirmation
- ✅ Design responsive et moderne
- ✅ Optimisé pour les conversions

### Backend & Administration
- ✅ Système d'authentification admin
- ✅ Tableau de bord avec statistiques
- ✅ Gestion complète des inscriptions
- ✅ Export CSV des données
- ✅ Base de données Supabase
- ✅ API REST sécurisée

## 🛠️ Technologies utilisées

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase
- **UI**: shadcn/ui, Lucide React
- **Base de données**: Supabase (PostgreSQL)
- **Déploiement**: Vercel

## 📦 Installation

1. **Cloner le projet**
\`\`\`bash
git clone [votre-repo]
cd formation-dev-web
\`\`\`

2. **Installer les dépendances**
\`\`\`bash
npm install
\`\`\`

3. **Configuration des variables d'environnement**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Remplissez les variables dans \`.env.local\`:
- \`NEXT_PUBLIC_SUPABASE_URL\`
- \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`

4. **Configurer Supabase**
- Créez un compte sur [supabase.com](https://supabase.com)
- Créez un nouveau projet
- Exécutez le script SQL dans \`scripts/create-tables.sql\`

5. **Lancer le projet**
\`\`\`bash
npm run dev
\`\`\`

## 🔐 Accès administrateur

- **URL**: \`/admin/login\`
- **Email**: \`admin@excellencetraining.com\`
- **Mot de passe**: \`admin123\`

## 📁 Structure du projet

\`\`\`
├── app/
│   ├── page.tsx                 # Page d'accueil
│   ├── inscription/page.tsx     # Formulaire d'inscription
│   ├── confirmation/page.tsx    # Page de confirmation
│   ├── admin/
│   │   ├── login/page.tsx       # Connexion admin
│   │   ├── dashboard/page.tsx   # Tableau de bord
│   │   └── inscriptions/page.tsx # Gestion inscriptions
│   └── api/
│       ├── auth/               # API authentification
│       └── inscriptions/       # API inscriptions
├── components/ui/              # Composants UI
├── lib/
│   └── supabase.ts            # Configuration Supabase
├── scripts/
│   └── create-tables.sql      # Script de création BDD
└── middleware.ts              # Protection routes admin
\`\`\`

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repo GitHub à Vercel
2. Ajoutez les variables d'environnement
3. Déployez automatiquement

### Variables d'environnement Vercel
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
\`\`\`

## 📧 Contact

- **Email**: tizieeliemalachie@gmail.com
- **Téléphone**: +225 07 78 62 67 77
- **WhatsApp**: +225 07 78 62 67 77

## 📄 Licence

© 2024 Excellence Training ETIC
