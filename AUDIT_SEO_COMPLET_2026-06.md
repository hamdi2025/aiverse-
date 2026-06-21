# 🔍 Audit SEO complet — getaiverse.online
**Date :** Juin 2026 · **Auditeur :** Claude (SEO senior)
**Méthode :** inspection directe du code source (source la plus fiable) + données Search Console (captures fournies) + Vercel Analytics. PageSpeed API non exploitable (réponse tronquée) et Gmail temporairement inaccessible (erreur connecteur) → ces 2 points sont marqués « à compléter ».

---

## 🎯 Score global : **58 / 100**

| Domaine | Score | État |
|---|---|---|
| Performance technique | 8/10 | ✅ Très bon (site léger) |
| Balises meta & structure | 7/10 | 🟡 Bon, à affiner |
| Données structurées (Schema) | 6/10 | 🟡 Bonnes bases, manque les étoiles |
| Indexation & visibilité | 3/10 | 🔴 Point faible n°1 |
| Contenu & duplicate | 6/10 | 🟡 Correct |
| Stratégie mots-clés | 5/10 | 🟡 À structurer |
| Email & affiliation | — | ⏳ À compléter (Gmail inaccessible) |
| Backlinks | 2/10 | 🔴 Point faible n°2 |
| Engagement & conversion | 5/10 | 🟡 Trafic insuffisant pour juger |

**Verdict :** le site est **techniquement sain et rapide**. Le problème n'est PAS la technique — c'est **l'autorité (backlinks) et l'indexation**. Tu n'as pas un problème de site, tu as un problème de **notoriété** (normal pour un domaine de quelques semaines).

---

## 📌 Mise au point sur les chiffres
Ton prompt indique « ~3 300 visites/mois ». **Ce n'est pas le trafic organique réel.** Les données réelles mesurées :
- **Vercel Analytics** : ~0 visiteur réel (1 lors de notre test).
- **Search Console** : 96-98 impressions, **0 clic**, position **~46**, **1 page** visible en `site:`.
Le vrai trafic organique est donc **proche de 0** aujourd'hui. C'est le point de départ, et c'est normal.

---

## 1. ⚡ PERFORMANCE TECHNIQUE — 8/10 ✅

**Preuves (code) :**
- **Aucune image raster** : `0` balise `<img>`, `0` `next/image` dans tout le `src/`. Les cartes d'outils sont en **texte + emoji** → le LCP est quasi instantané (pas d'image lourde à charger). C'est excellent.
- **Next.js SSR sur Vercel** : HTML pré-rendu (SSG via `generateStaticParams`), CDN global Vercel avec **gzip/brotli + cache automatiques**, code-splitting natif.
- **Polices** : `Inter` via `next/font` (auto-hébergée, `display: swap`) → pas de FOIT, pas de requête externe Google Fonts.
- **Risques JS** : `framer-motion` (animations du hero) ajoute du JavaScript ; le script **AdSense** (`afterInteractive`) est un tiers qui peut peser sur l'INP/LCP sur les pages avec pub.

**À faire :**
- Lancer **PageSpeed Insights** manuellement (mobile + desktop) sur la home + 3 fiches outils pour avoir les vrais chiffres LCP/INP/CLS (je n'ai pas pu via l'API).
- Objectif réaliste : LCP < 2,0 s, INP < 200 ms, CLS < 0,1 — probablement déjà atteint vu la légèreté.

---

## 2. 🏷️ BALISES META & STRUCTURE — 7/10 🟡

**Preuves (code, fiche outil) :**
- **Title** : `${tool.name} — Review, Pricing & Alternatives 2026 | Aiverse` → ✅ contient l'intention (review, pricing, alternatives), l'année, la marque. Bonne longueur pour la plupart des outils.
- **Meta description** : utilise directement `tool.description` → 🟡 risque : descriptions parfois courtes, **sans call-to-action**, et identiques à ce qui est affiché sur la page. Pas optimisées pour le CTR.
- **Canonical** : ✅ présent (`/${locale}/tools/${id}`).
- **hreflang** : ✅ en/fr/es/ar présents… ❌ mais **pas de `x-default`** (recommandé par Google pour le fallback).
- **Open Graph + Twitter Cards** : ✅ présents (type `article`, `summary`).
- **H1 unique** : ✅ par page.

**À faire (P1) :**
- Réécrire les **meta descriptions** : 150-160 caractères, avec un bénéfice + CTA (« Compare features, pricing & alternatives. Free to browse. »).
- Ajouter **`x-default`** dans les hreflang.

---

## 3. 🧱 DONNÉES STRUCTURÉES (SCHEMA) — 6/10 🟡

**Preuves (code) :**
- ✅ `Organization` + `WebSite` (avec `SearchAction`) dans le layout racine.
- ✅ `FAQPage` sur les fiches outils (avec FAQ réelles).
- ✅ `BreadcrumbList`.
- ✅ `SoftwareApplication` avec `offers` (price/currency/availability).
- ❌ **`aggregateRating` ABSENT** alors que tu as les notes (`rating: 4.9`, `4.6`…). **C'est le plus gros manque** : sans ça, pas d'**étoiles** dans les résultats Google → CTR plus faible.
- ❌ `offers.price` est `undefined` pour les outils payants (rempli seulement pour « Free »).
- ❌ Pas de schema `Article` sur les articles de blog.
- ❌ Pas d'`ItemList` sur les pages catégories/listes.

**À faire (P0 — gros ROI, facile) :**
- Ajouter **`aggregateRating`** au `SoftwareApplication` (note + nombre d'avis) → **étoiles dans Google**.
- Ajouter `Article` (author, datePublished) sur le blog.
- Valider via le **Rich Results Test** de Google après déploiement.

---

## 4. 🔎 INDEXATION & VISIBILITÉ — 3/10 🔴 (PRIORITÉ N°1)

**Preuves :**
- **~30 / 2 700 pages indexées (≈ 1 %)**. `site:getaiverse.online` ne remonte quasiment qu'1 page.
- `robots.ts` : ✅ tout autorisé + bots IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…) explicitement permis → **bon pour le référencement dans les LLM (GEO)**.
- `sitemap.ts` : ✅ complet et propre (home, outils, compare, alternatives, blog, best, statiques × 4 langues).

**Causes du faible taux d'indexation :**
1. **Domaine jeune + ~0 backlink** → Google alloue très peu de budget de crawl à un site sans autorité. **C'est LA cause principale.**
2. **Volume × 4 langues** : 2 700 URLs pour un site neuf, c'est beaucoup. Google indexe d'abord ce qu'il juge prioritaire.
3. **Contenu perçu comme proche** entre certaines pages/langues (voir point 5).

**À faire (P0) :**
- **Backlinks** (voir point 8) — c'est ce qui débloque l'indexation.
- Dans Search Console : **soumettre le sitemap** (si pas déjà fait) + demander l'indexation des **20 pages les plus stratégiques** (home × 4 langues, top comparatifs, top fiches).
- **IndexNow** (ping Bing/Yandex) pour accélérer.
- Vérifier qu'aucune page stratégique n'est en `noindex`.

---

## 5. 📝 CONTENU & DUPLICATE — 6/10 🟡

**Preuves :**
- Les données outils (pros/cons/use-cases/verdicts) ont été **traduites** en fr/es/ar (système `dataI18n`) → les langues ne sont pas de simples copies.
- 🟡 Mais le **JSON-LD utilise toujours `tool.description.en`** pour toutes les langues (petit signal de cohérence à corriger).
- 🟡 Les descriptions d'outils peuvent être **génériques** ; risque de similarité avec les sites officiels et entre fiches.

**À faire (P1-P2) :**
- Enrichir progressivement les fiches des **outils populaires** avec du contenu original (tests, captures, cas d'usage concrets).
- Localiser le `description` du schema par langue.

---

## 6. 🎯 STRATÉGIE SEO & MOTS-CLÉS — 5/10 🟡

**Preuves (GSC) :** tu apparais déjà sur des requêtes pertinentes : *beautiful ai, deepl translate, coze, darktrace review, miro ai, adobe acrobat online ai*… → le ciblage « nom d'outil + review/alternative » fonctionne, mais en **position 46** (page 4-5).

**Manques :**
- Pas de pages d'atterrissage fortes optimisées pour les **têtes de requête** : « best AI tools 2026 », « AI tools directory », « meilleur outil IA » (les pages `/best` et `/compare` existent mais ne sont pas encore taillées pour ces requêtes).
- CTR 0 % = conséquence directe de la position 46 (personne ne va page 4).

**À faire (P1) :**
- Créer/renforcer des **pages piliers** : « Best AI Tools 2026 », « Best Free AI Tools », par catégorie.
- Viser la **longue traîne** (« best AI tool for X ») où la concurrence est plus faible — tes pages `/best/*` sont parfaites pour ça.

---

## 7. 📧 EMAIL & AFFILIATION — ✅ COMPLÉTÉ (via brouillons Gmail)
> Note : la lecture de l'inbox (`search_threads`) était indisponible, mais l'analyse des **brouillons Gmail** (digest automatique + outreach envoyés) a permis de reconstituer l'état complet.

**Programmes d'affiliation :**
- ✅ **Actifs/réels** : HeyGen, Synthesia, HeadshotPro (via=abdelwahed), **Pictory** (via FirstPromoter — email d'onboarding de l'affiliate manager « Ash » reçu).
- ⏳ **En attente** :
  - **Lemon Squeezy Affiliate Hub** — profil affilié soumis le 14/06, **pas encore approuvé**. Dès approbation → postuler à : CheatGPT, AssignmentGPT, BypassAI, FileMinutes, MagickImg, Screen Studio.
  - **HeadshotPro** — relance envoyée le 14/06 pour une **méthode de paiement alternative** (Wise/Payoneer/virement, car PayPal indisponible au Rwanda) → pas de réponse.
- 🔲 **Placeholders non actifs** : Jasper/Semrush (Impact), Surfer (ShareASale).

**Outreach backlinks (campagne « guest posts ») — EN COURS, bon signal :**
- **2 propositions de guest post envoyées le 17/06** (lien dofollow dans la bio auteur) :
  1. **BusinessFirms** (businessfirms.co) — « Build vs. Buy AI in 2026 ».
  2. **Aitude** (hello@aitude.com) — « From Point Tools to Agents ».
- Suivi via le label Gmail **« Guest Posts »**. **Aucune réponse encore** → relance recommandée à J+7 (~24/06).

**Surveillance :** un digest email automatique tourne déjà (bonne pratique).

**Actions prioritaires email :**
1. **Relancer** les 2 guest posts (BusinessFirms, Aitude) le ~24/06 si pas de réponse — ce sont des **backlinks dofollow éditoriaux à forte valeur**.
2. Dès **Lemon Squeezy** approuvé → postuler aux 6 sous-programmes.
3. **Relancer HeadshotPro** sur le paiement (Wise/Payoneer).

---

## 8. 🔗 BACKLINKS — 2/10 🔴 (PRIORITÉ N°2)

**État :** quasi 0 backlink en ligne. **Aujourd'hui soumis : AI Toolz Dir, Submit AI Tools, Best-AI.org** (en attente de validation) + section « Featured on » ajoutée au footer.

**À faire (P0 — le levier n°1 de tout le reste) :**
- Continuer les **soumissions aux annuaires gratuits** (objectif 15-20 sur 4-6 semaines).
- **Guest posts** sur blogs IA/tech.
- **Broken link building** + **HARO** (réponses d'expert → liens de médias).
- Prioriser les liens vers la **home** et les **pages catégories populaires**.

---

## 9. 💰 ENGAGEMENT & CONVERSION — 5/10 🟡

**Preuves (code) :**
- ✅ Newsletter présente (`/newsletter`, composant `NewsletterCTA`).
- ✅ Liens d'affiliation en place (`buildAffiliateUrl`).
- ✅ Comparateurs + guides « best for » présents.
- 🔴 Conversion 0 % = **conséquence du trafic ≈ 0**, pas d'un problème de tunnel. On ne peut pas convertir des visiteurs qu'on n'a pas encore.

**À faire :** d'abord amener du trafic (points 4 & 8). Ensuite optimiser CTA/comparateurs.

---

# 🗓️ PLAN D'ACTION M1 → M12

> Règle d'or : **0 régression de contenu**, tout versionné (git), priorité au ROI (indexation + autorité d'abord).

### MOIS 1 — Fondations & déblocage (P0)
- **Schema `aggregateRating`** sur toutes les fiches (étoiles Google). *[je peux le coder]*
- **Meta descriptions** optimisées + `x-default` hreflang. *[je peux le coder]*
- **Search Console** : sitemap soumis + demande d'indexation des 20 pages clés + IndexNow.
- **Backlinks** : finir les 15-20 annuaires gratuits.
- **KPI cibles M1** : 150+ pages indexées, 5-10 backlinks vifs, premières impressions en hausse.

### MOIS 2-3 — Contenu & maillage
- Enrichir les 30 fiches d'outils les plus recherchées (contenu original).
- `Article` schema + dates sur le blog ; localiser le schema par langue.
- **Maillage interne** : lier fiches ↔ comparatifs ↔ guides « best for ».
- 2-3 **guest posts** + 1ʳᵉ campagne d'**email outreach** (templates + relances J+7/J+14).
- **KPI** : 400+ pages indexées, 15-25 backlinks, premiers clics Google.

### MOIS 4-6 — Contenu pilier & longue traîne
- 1-2 **articles piliers/mois** (« Best AI Tools for X »).
- **Newsletter** active (capture + envoi régulier).
- Pages catégories optimisées pour les têtes de requête.
- **KPI** : 800+ indexées, 40+ backlinks, position moyenne < 30, premiers revenus affiliation.

### MOIS 7-12 — Scale, GEO & partenariats
- **GEO** : se faire citer par les LLM (ChatGPT/Perplexity) via contenu structuré + présence sur annuaires sources.
- Partenariats durables, échanges de liens éditoriaux.
- Industrialiser le contenu (longue traîne à grande échelle).
- **KPI M12** : majorité des pages indexées, position moyenne < 15, trafic organique en milliers/mois, affiliation rentable.

---

# ✅ Prochaine étape (validation requise)
Comme demandé dans ton prompt, **j'attends ta validation** avant d'exécuter. Dès que tu valides, je commence par les **3 quick wins P0 codables tout de suite** (gros ROI, faible effort) :
1. **`aggregateRating`** dans le schema → étoiles dans Google ⭐
2. **Meta descriptions** optimisées + `x-default`
3. **Article schema** sur le blog

Le reste (Search Console, backlinks, outreach) se fait avec toi, étape par étape.
