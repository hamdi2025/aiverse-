# 📋 RÉSUMÉ AIVERSE — À LIRE EN DÉBUT DE SESSION

## 🌐 Projet
- **URL** : https://aiverse-lemon.vercel.app
- **Repo** : https://github.com/hamdi2025/aiverse-.git
- **Dossier local** : C:\Users\HAMDI\Desktop\averse
- **Email** : hamdi.abdwd@gmail.com
- **AdSense Publisher ID** : ca-pub-5384145624117299

---

## ✅ DÉJÀ FAIT

### Contenu
- 200 outils IA uniques, 8 catégories
- Liens affiliés sur ~35 outils
- Badge 🔥 Trending automatique (views ≥ 20k)
- StatsBar : 200+, 12K+, 8 catégories, 4 langues

### Hero & SEO
- H1 : "+50 AI Agents (violet) & +2 400 AI Tools (orange)"
- Badge 4 couleurs (violet/cyan/amber/vert)
- Mots colorés dans le subtitle
- JSON-LD sur toutes les pages /tools/[id]
- Sitemap dynamique (200 outils + 15 comparaisons)
- 4 langues : EN, FR, ES, AR

### Pages /compare
- Système dynamique /compare/[tool1]-vs-[tool2]
- 15 comparaisons pré-générées
- CompareWidget interactif sur homepage
- Boutons "Comparer avec" sur chaque page /tools/[id]

### Inscription
- Pages /sign-in et /sign-up (UI prête, Clerk pas encore connecté)
- Navbar : Sign In | Sign Up | Submit a Tool
- Page /submit : 4 langues + onglet AI Tool / AI Agent
- Formulaire → Formspree (besoin ID)
- Newsletter → Beehiiv (besoin Publication ID)
- Liens Stripe → mailto temporaire

### Analytics
- @vercel/analytics + @vercel/speed-insights installés et activés

---

## 🔴 PRIORITÉ HAUTE — À FAIRE

1. **Clerk** — vrais comptes Google/Email
   - Aller sur clerk.com → créer app → copier les 2 clés
   - Ajouter dans Vercel > Settings > Environment Variables :
     - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
     - CLERK_SECRET_KEY

2. **Formspree** — vraies soumissions d'outils
   - Aller sur formspree.io → New Form → copier l'ID
   - Ajouter dans Vercel > Env Variables :
     - NEXT_PUBLIC_FORMSPREE_ID = xxxxxid

3. **Beehiiv** — newsletter fonctionnelle
   - Aller sur beehiiv.com → Settings → Publication ID
   - Ajouter dans Vercel > Env Variables :
     - NEXT_PUBLIC_BEEHIIV_PUB_ID = pub_xxxxx

4. **Stripe** — paiements réels ($49 Standard / $99 Sponsor)
   - Créer compte Stripe → Payment Links
   - Remplacer les mailto: dans /submit/page.tsx

---

## 🟡 PRIORITÉ MOYENNE

- **Domaine custom** : acheter aiverse.ai ou aiverse.io (~$10-15/an)
- **Blog SEO** : articles "Best AI Tools 2026", "Top AI Agents"
- **Product Hunt** : préparer le launch
- **Compteur visiteurs** : ajouter dans StatsBar via Vercel Analytics API
- **Pages /compare** supplémentaires (on peut en faire 50+)

---

## 🟢 PRIORITÉ BASSE

- Section "Build your AI Stack"
- Newsletter hebdo automatique Beehiiv
- npm audit fix (5 vulnérabilités non critiques)

---

## 💰 AFFILIATION ACTIVE
Surfer SEO, AdCreative, Jasper, HeyGen, Descript, Suno, Murf, Copy.ai,
Instantly, GetResponse, Systeme.io, Taskade, Pictory, vidIQ,
Recraft, Blackbox, Gumloop, Grammarly, Fireflies, Loom, Tome,
Remove.bg, Flair, Fliki, Vapi, Durable, Framer, Wegic, Typeframes,
Locofy, Bland AI

## 💰 AFFILIATION À REJOINDRE
PartnerStack (300+ outils), Writesonic, Synthesia, Beehiiv, ElevenLabs

---

## 📌 COMMANDES UTILES
```bash
# Vérifier l'état du projet
cd C:\Users\HAMDI\Desktop\averse && git log --oneline -5 && git status

# Push classique
git add . && git commit -m "feat: ..." && git push origin main
```

---

## ⚠️ NOTES IMPORTANTES
- Le build Vercel échoue souvent à cause des variables TypeScript non utilisées
  → Toujours vérifier les imports après chaque fichier créé
- Le sandbox git est corrompu → les commits se font uniquement depuis le terminal Windows
- Les vulnérabilités npm (5) sont dans les devDependencies, pas critiques
