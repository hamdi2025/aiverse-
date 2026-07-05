# 🔄 CONTINUITÉ DE SESSION — AIverse
> **Si la session actuelle se termine :** ouvre une nouvelle conversation Cowork et dis à l'assistant : *« Lis le fichier CONTINUITE_SESSION_AIVERSE.md et PLAN_STRATEGIQUE_AIVERSE.md dans le dossier averse, puis on continue. »*
> **Dernière mise à jour : 5 juillet 2026.**

---

## 1. LE PROJET
- **Produit :** AIverse — annuaire multilingue d'outils & agents IA. Site : **https://getaiverse.online**
- **Stack :** Next.js 14 (App Router), next-intl, déployé sur **Vercel** (auto-deploy depuis GitHub à chaque `git push`).
- **Dossier code :** `C:\Users\HAMDI\Desktop\averse` (mount Linux : `/sessions/.../mnt/averse`)
- **Langues :** en / fr / es / ar (préfixes /en /fr /es /ar). ~2 800 pages, ~600 outils + 60 agents, 28 catégories.
- **Fondateur :** Hamdi (Abdelwahed Hamdi), hamdi.abdwd@gmail.com. Basé Rwanda/Dakar. Arabophone + francophone natif. Parle français dans le chat.

## 2. LA STRATÉGIE ACTUELLE (le cap)
**Repositionnement décidé le 5 juillet 2026 :** faire d'AIverse **LA référence des outils IA pour le monde ARABOPHONE (+ francophone)** — créneau sous-exploité où il a un avantage natif. Détails complets dans **PLAN_STRATEGIQUE_AIVERSE.md**.
**En cours :** appliquer ce repositionnement dans le code (home /ar & /fr, meta, H1, pitch).

## 3. RÈGLES NON NÉGOCIABLES (à respecter absolument)
- ❌ **Ne JAMAIS exécuter git** — Hamdi fait git lui-même. On lui DONNE les commandes.
  - En **cmd** : `cd /d "%USERPROFILE%\Desktop\averse"` puis `if exist ".git\index.lock" del /f ".git\index.lock"` puis `git add -A` / `git commit -m "..."` / `git push`.
  - (En PowerShell : `$env:USERPROFILE`, `Remove-Item`.)
- ❌ **Ne JAMAIS envoyer d'email / publier de post** — on prépare des **brouillons** (draft Gmail OK), Hamdi clique « Envoyer ».
- ❌ **Ne JAMAIS payer** — aucun annuaire/guest post/service payant. (Guest posts contactés = TOUS payants → abandonnés.)
- ❌ Pas de services d'upvote Product Hunt.
- ✅ Toujours **honnête et sévère** quand demandé. Hamdi apprécie la vérité, pas les compliments creux.

## 4. ÉTAT DES COMPTES / ACCÈS
- **Vercel :** 🔒 bloqué (2FA perdue). Demande de récupération 2FA **envoyée** à Vercel Support (attend réponse email). ⚠️ **Le déploiement marche quand même via `git push`** (pas besoin du dashboard).
- **AdSense :** examen **« En préparation »** (demandé). ads.txt = Autorisé. Pas encore validé (normal, peut prendre semaines + plusieurs essais).
- **Google Search Console :** actif. Indexation **34 / 2 800** (a baissé de 70 → fluctuation normale site jeune). Position ~42, 0 clic, ~105 impressions.
- **Crunchbase :** page entreprise créée (lien Website = **nofollow**, citation de marque).
- **LinkedIn :** profil perso (post publié) + **Page Entreprise AIverse créée** (0 abonné). Réseau perso = ingénieurs eau (mauvais public IA).
- **X/Twitter :** ⏳ **PAS encore créé** — à faire (handle @aiverse ; footer pointe déjà vers twitter.com/aiverse).
- **Affiliation :** **Lemon Squeezy = APPROUVÉ** ✅. HeadshotPro + Pictory (FirstPromoter) en cours. Rwanda = pas de PayPal (contrainte paiements).
- **Vercel quota :** ~75% du tier gratuit (CPU) — à surveiller, pas urgent.

## 5. CE QUI A ÉTÉ FAIT (récent, ~22 juin → 5 juil.)
- **18 nouveaux outils/agents tendance** ajoutés (Codex, Devin, OpenCode, Cline, Aider, Trae, Goose, Gemini CLI, OpenAI Operator, Claude Cowork, Manus, OpenClaw, MiniMax M2.7, Kimi K2.6, Qwen 3.6, GLM 5.2, Hermes 4, Llama 4) + **OneChat AI** (soumission communautaire).
- **Page /ai-agents** : comparaison riche (tableau coloré, pros vert/cons rouge, verdict). Route : `src/app/[locale]/ai-agents/page.tsx`.
- **Template fiche outil enrichi** : article éditorial auto (`src/lib/toolArticle.ts`) + astuces d'expert (`src/lib/toolTips.ts`, 28 outils) — rendu dans `src/app/[locale]/tools/[id]/page.tsx`.
- **3 nouveaux guides blog** (open LLMs, agent vs LLM, how to choose) dans `src/lib/blog.ts`.
- **Accueil** : bande « Tendances » (`src/components/home/Trends2026.tsx`) + lien Header « 🚀 Agents ».
- **llms.txt** mis à jour (`public/llms.txt`) pour le GEO.
- **LinkedIn** lancé (profil + page). **Crunchbase** fait. **OneChat AI** ajouté + email de remerciement envoyé.
- **Rappel hebdo** : tâche planifiée `aiverse-weekly-branding` (chaque **lundi ~8h**) → prépare posts + questions Reddit + idée contenu.

## 6. FICHIERS CLÉS
- Données outils : `src/lib/tools.ts` (interface AITool en haut, tableau TOOLS_DATA). Ajouter un outil = objet avant le `];` final.
- Template fiche : `src/app/[locale]/tools/[id]/page.tsx` (generateStaticParams lit TOOLS_DATA → toute nouvelle fiche se génère seule).
- Home : `src/app/[locale]/page.tsx` + `page-metadata.ts` (métadonnées home) + `src/components/home/HeroSection.tsx` + `HomePageClient.tsx`.
- Sitemap : `src/app/sitemap.ts`. Robots : `src/app/robots.ts`. Middleware : `src/middleware.ts` (localeDetection:false, localePrefix:'always').
- Blog : `src/lib/blog.ts`. Best : `src/lib/bestFor.ts`. Alternatives : `src/lib/alternatives.ts`.
- Docs stratégie : **PLAN_STRATEGIQUE_AIVERSE.md**, **PLAN_SEO_BRANDING_AIVERSE.md**, ce fichier.

## 7. NOTES TECHNIQUES (pièges connus)
- **tsc via bash n'est PAS fiable** : le mount mange l'UTF-8 multibyte (accents, arabe, tirets longs —) → faux « Unterminated string / JSX no closing tag ». **Ignorer ces erreurs** ; vérifier le vrai fichier via l'outil Read. Vercel compile correctement.
- **web_fetch rame parfois** sur getaiverse.online (quota CPU). Réessayer ou faire vérifier par Hamdi dans son navigateur.
- **Gmail MCP fonctionne** (search_threads, get_thread, list_drafts, create_draft). `create_draft` OK pour préparer des brouillons.
- Déploiement : `git push` → Vercel auto-build. Vérifier succès en ouvrant l'URL live (pas besoin du dashboard).

## 8. COMMENT HAMDI TRAVAILLE
- Guidage **pas à pas, très concret** (souvent « explique comme à un enfant »).
- Il fait les clics/git/envois lui-même ; on prépare tout prêt-à-coller.
- **S'inquiète beaucoup de l'indexation/AdSense** → le rassurer avec des faits (site jeune = lent, normal), mais rester honnête.

## 9. PROCHAINES ÉTAPES (TODO)
1. **[FAIT] Repositionnement métadonnées** : titre/description/keywords home **/ar** et **/fr** reformulés angle « annuaire IA arabophone/francophone » dans `src/app/[locale]/page-metadata.ts`. → **À PUSHER.**
1b. **[À FAIRE] Repositionnement du HERO** : textes du hero viennent des JSON `src/messages/ar.json` et `fr.json` (namespace `Hero` : badge, titleAgents, titleTools, titleSub, subtitle, badge2items). Reformuler ar/fr pour affirmer l'angle arabe/français.
2. Ouvrir compte **X/Twitter @aiverse** (bio + logo) → démarrer le Pilier 2 (audience).
3. **Élaguer** les pages mortes (deepseek, salesforce-einstein, compares inexistants).
4. Créer **guides piliers profonds en arabe/français** (faible concurrence).
5. Suivre le **Sprint 90 jours** du PLAN_STRATEGIQUE.
6. En attente : réponse Vercel (2FA), verdict AdSense, merge PR GitHub #339, réponse OneChat AI.
