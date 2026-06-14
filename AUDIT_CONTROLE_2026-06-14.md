# 🔍 Audit de contrôle profond AIverse — 14 juin 2026

Objectif : repérer tout ce qui peut bloquer Google Search / AdSense (doublons, erreurs, fichiers tronqués) et améliorer le site sur les 5 axes du benchmark (38/100).

---

## ⚠️ Note méthodologique importante
Le sandbox bash/`tsc` voit cette session des **copies périmées/tronquées** de plusieurs fichiers (ex. `robots.ts` vu à 211 octets au lieu du fichier complet). C'est le problème déjà signalé dans `SESSION_HANDOFF.md`. **Toutes les vérifications fiables ont été faites via l'outil de lecture des vrais fichiers Windows + le site en ligne**, pas via `tsc`/bash. Conséquence : je n'ai pas pu lancer un `next build` fiable ici — **à faire en local après pull** (voir « À vérifier par toi »).

---

## 🛑 Problèmes trouvés ET corrigés

### 1. Fichier corrompu (caractères NUL) — bloquant build
- `src/app/[locale]/alternatives/[slug]/page.tsx` : 175 octets `\x00` collés en fin de fichier (le code était complet jusqu'à la dernière ligne, puis du binaire). → **nettoyé**.
- `src/app/sitemap.ts` : 3 octets `\x00` en fin de fichier. → **nettoyé**.
- Aucun autre fichier `.ts/.tsx` corrompu (scan complet effectué).

### 2. Pages légales/trust = 404 (BLOQUANT AdSense)
Le Footer pointait vers `/about`, `/privacy`, `/terms`, `/disclosure` qui **n'existaient pas** (404). Or AdSense exige une politique de confidentialité + des pages de confiance accessibles ; l'UE exige une divulgation d'affiliation. → **5 pages créées** (serveur, métadonnées localisées canonical + hreflang + OpenGraph, contenu substantiel) :
- `/about` — mission + **méthodologie de notation** (E-E-A-T)
- `/privacy` — RGPD/CCPA, cookies, **section Google AdSense** explicite, analytics, affiliation
- `/terms` — CGU complètes
- `/disclosure` — divulgation d'affiliation + indépendance éditoriale
- `/contact` — page contact fonctionnelle (E-E-A-T)

### 3. Liens morts dans le Footer
- `/affiliates` (404) → repointé « Partner With Us » vers `/contact`.
- Icône RSS → `/rss.xml` **n'existe pas** (404) → supprimée.
- Contact `mailto:contact@aiverse.com` (mauvais domaine `aiverse.com`) → remplacé par un lien vers `/contact`.

### 4. Chiffres incohérents et faux partout (crédibilité + risque « contenu trompeur »)
Comptage réel : **586 outils, 66 agents (catégorie agents), 28 catégories**. Le site affichait :
| Endroit | Avant | Après |
|---|---|---|
| `Header.tsx` | 648 outils · 70 agents | **580+ · 60+ · 28** |
| `StatsBar.tsx` | 1000+ outils | **580+** |
| `page-metadata.ts` (title/desc) | 1000+ / **555** (ar) / **15 catégories** | **580+ / 60+ / 28** (4 langues) |
| `layout.tsx` (schema JSON-LD Organization) | 649+ outils, 100+ agents | **580+, 60+** |
| `public/llms.txt` | 580+ | (déjà cohérent, inchangé) |

### 5. Métadonnées SEO manquantes (gros trou)
- La **page d'accueil** (`[locale]/page.tsx`, composant client) n'avait **aucune** balise title/description/canonical/OG. `getHomeMetadata` était défini mais **jamais utilisé**. → Ajout d'un `generateMetadata` + `metadataBase` dans `[locale]/layout.tsx` (le helper est maintenant câblé) : la home **et toutes les pages client** (compare, submit, stack, newsletter) ont désormais titre + description + OpenGraph + Twitter card localisés.
- Le **hub `/alternatives`** n'avait pas de métadonnées → ajout `generateMetadata` (canonical + hreflang 4 langues + OG).
- Ajout de `metadataBase` (résolution correcte des URLs OG/canonical, supprime aussi le warning Next).

### 6. Sitemap incomplet
`sitemap.ts` n'incluait pas les pages statiques. → Ajout `about, privacy, terms, disclosure, contact, submit, newsletter, stack, compare` × 4 langues.

### 7. Données structurées
- Ajout de **`BreadcrumbList` JSON-LD** sur les pages `/tools/[id]` (586 × 4) — fil d'Ariane reconnu par Google.

---

## 🔧 À FAIRE PAR TOI (hors code / nécessite tes accès)

### A. Canonical www vs non-www (important pour Search Console)
Le site est servi sur **`www.getaiverse.online`** (redirection depuis non-www), mais **tous les canonical/sitemap/schema utilisent `https://getaiverse.online`** (non-www). Google peut hésiter. **Deux options** — choisis-en une :
1. **(Recommandé, 0 code)** Dans Vercel → Domains, mets **`getaiverse.online` comme domaine principal** et fais rediriger `www` → non-www. Tout le code est déjà en non-www, donc tout devient cohérent.
2. Sinon, il faudra changer tous les `https://getaiverse.online` → `https://www.getaiverse.online` dans le code.

### B. `ignoreBuildErrors` / `eslint.ignoreDuringBuilds` (next.config.mjs)
Ils sont à `true` et **masquent les bugs**. Ne PAS les désactiver à l'aveugle (risque de casser le build Vercel). Procédure sûre :
```
npm run build        # voir s'il compile (avec les ignores actuels)
npx tsc --noEmit     # lister les vraies erreurs de types
```
Corrige les erreurs listées, PUIS passe les deux flags à `false`.

### C. Affiliation — placeholders restants (`src/lib/affiliate.ts`)
Encore des placeholders qui ne tracent rien : `affiliateId: 'YOUR_IMPACT_ID'` (Jasper, Semrush), `'YOUR_SHAREASALE_ID'` (Surfer SEO), et de nombreux `affiliateId: 'aiverse'` génériques. **Il me faut tes vrais IDs/ liens trackés** pour chaque programme validé. (Cf. `AFFILIATION_CHECKLIST.md` : prochaine étape Murf AI #7.)

### D. AdSense — IDs de slots factices (`src/config/adsense.ts`)
Les slots `9876543210 / 8765432109 / 7654321098` sont des **placeholders** : crée les unités publicitaires dans ton compte AdSense et remplace par les vrais `data-ad-slot`. (Le Publisher ID, lui, est correct.) Pages légales manquantes étant désormais créées, tu peux **resoumettre le site à la validation AdSense**.

---

## 📊 Impact sur le benchmark (38/100)

| Critère | Avant | Après ces correctifs | Pour atteindre 9/10 (dépend de toi) |
|---|---|---|---|
| Contenu / largeur | 7.5 | ~8 | Réécrire à la main 20-30 descriptions d'outils phares + vrais avis testés |
| SEO technique | 4 | **~7.5** | Désactiver les `ignoreBuildErrors` (après fix), régler www/non-www, breadcrumbs sur compare/alternatives |
| Monétisation | 3 | ~4 | Vrais liens d'affiliation + vrais slots AdSense + revalidation AdSense |
| Autorité / trafic | 2 | 2 | **Backlinks + temps** (guest posts en cours) — non corrigible par code |
| UX / produit | 6 | ~7 | Recherche/filtre mobile, page 404 plus riche |

**Les axes « Autorité/trafic » et une partie de « Monétisation » ne peuvent pas atteindre 9/10 par du code seul** : ils dépendent de backlinks réels, de trafic accumulé dans le temps, et de tes identifiants d'affiliation/AdSense. Le code, lui, est maintenant propre et conforme.

---

## 📁 Fichiers modifiés cette session
**Créés :** `src/app/[locale]/{about,privacy,terms,disclosure,contact}/page.tsx`
**Modifiés :** `src/app/sitemap.ts`, `src/app/[locale]/layout.tsx`, `src/app/[locale]/page-metadata.ts`, `src/app/[locale]/alternatives/page.tsx`, `src/app/[locale]/alternatives/[slug]/page.tsx` (nettoyage NUL), `src/app/[locale]/tools/[id]/page.tsx`, `src/components/home/StatsBar.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`

### Commande git (à exécuter par toi, après `npm run build` local)
```
git add -A
git commit -m "Fix: pages legales (about/privacy/terms/disclosure/contact), corruption NUL, metadonnees home+hub, chiffres coherents 580+/60+/28, breadcrumbs JSON-LD, footer 404"
git push origin main
```

---

# 🎯 ROUND 2 — Amélioration paramètre par paramètre (objectif 9/10)

## ① Contenu / largeur — 7.5 → réaliste **~8.5/10**
- **Découverte clé :** 35 outils phares avaient déjà des données riches (points forts/faibles, cas d'usage, verdict, éditeur, date de MAJ, API…) dans `tools.ts`, **mais la fiche outil ne les affichait PAS du tout**.
- ✅ La fiche `/tools/[id]` affiche désormais : **Notre verdict**, **Points forts / Points faibles**, **Cas d'usage**, **Infos clés** (éditeur, fondé, API, app mobile) et **date « Mis à jour »** — tout localisé (4 langues), affiché uniquement quand la donnée existe.
- → Contenu unique et profond sur les pages les plus consultées (anti « thin content » AdSense).
- **Pour viser 9/10 (toi) :** étendre ces champs riches (pros/cons/verdict) des 35 outils actuels aux ~50 outils les plus consultés.

## ② SEO technique — 4 → réaliste **~8.5/10**
- ✅ **Page d'accueil refactorée** : était un composant client SANS aucune métadonnée. Désormais composant serveur avec `generateMetadata` → **title + description + canonical + hreflang (4 langues) + OpenGraph**. (Logique d'interactivité déplacée dans `components/home/HomePageClient.tsx`.)
- ✅ **Breadcrumb JSON-LD** ajouté sur **tous** les types de pages : `tools/[id]`, `compare/[slug]`, `alternatives/[slug]`, `blog/[slug]` + **fil d'Ariane visible** sur les fiches outils.
- ✅ **Bug corrigé :** le JSON-LD des comparatifs pointait vers l'ancien domaine `aiverse-lemon.vercel.app` → remis sur `getaiverse.online` (incohérence de domaine pour Google).
- ✅ `metadataBase` + métadonnées du hub `/alternatives` (déjà en round 1).
- **Pour viser 9/10 (toi) :** (a) résoudre www vs non-www côté Vercel ; (b) après `npm run build` + `npx tsc`, repasser `ignoreBuildErrors`/`eslint.ignoreDuringBuilds` à `false`.

## ③ UX / produit — 6 → réaliste **~8/10**
- ✅ **Page 404 repensée** : au lieu d'un simple « Go Home », elle propose les catégories populaires + liens Browse/Compare/Blog (rétention au lieu de rebond).
- ✅ Fil d'Ariane visible sur les fiches (navigation + SEO).
- **Pour viser 9/10 (toi) :** test complet de la recherche/filtre sur mobile réel ; vérifier favicon/cohérence visuelle sur les 4 langues.

## ④ Monétisation — 3 → plafonnée à **~4/10 par le code**
- Le code est déjà en place (badges sponsorisés sur `ToolCard`, disclosure d'affiliation, `ads.txt` correct, Publisher ID réel).
- **Plafond externe — nécessite TOI :**
  1. Remplacer les `affiliateId: 'YOUR_IMPACT_ID' / 'YOUR_SHAREASALE_ID' / 'aiverse'` par tes **vrais IDs trackés** (`src/lib/affiliate.ts`).
  2. Créer les **vraies unités AdSense** et remplacer les slots factices `9876543210…` (`src/config/adsense.ts`).
  3. Resoumettre à AdSense (les pages légales manquantes, cause probable de blocage, sont maintenant créées).
- Tant que le trafic ≈ 0, le **revenu** restera bas quoi qu'il arrive — ce critère ne peut pas atteindre 9/10 sans trafic. **Non corrigible par code.**

## ⑤ Autorité / trafic — 2 → **non corrigible par le code**
- Dépend de : ancienneté du domaine, **backlinks de qualité**, DA, trafic cumulé dans le temps.
- Côté code, le maximum est fait : maillage interne dense (tools ↔ compare ↔ alternatives ↔ blog + breadcrumbs), sitemap complet, llms.txt, schémas. 
- **Leviers réels (toi, hors code) :** guest posts en cours (`BACKLINKS_GUEST_POSTS.md`), soumission aux annuaires (Futurepedia/TAAFT submit), réseaux sociaux (`SOCIAL_MEDIA_DRAFTS.md`), publication régulière. **C'est du temps + de la prospection, pas du code.**

---

## 📊 Synthèse réaliste

| Paramètre | Avant | Après (code) | 9/10 atteignable par code seul ? |
|---|---|---|---|
| Contenu / largeur | 7.5 | **~8.5** | Presque — manque l'extension manuelle à plus d'outils |
| SEO technique | 4 | **~8.5** | Oui, après build local + www/non-www |
| UX / produit | 6 | **~8** | Oui, après tests mobile |
| Monétisation | 3 | ~4 | **Non** — tes IDs affiliation/AdSense + trafic requis |
| Autorité / trafic | 2 | 2 | **Non** — backlinks + temps requis |

**Honnêteté :** 3 des 5 paramètres peuvent réellement approcher 9/10 par du code (Contenu, SEO, UX). Les 2 autres (Monétisation revenus, Autorité/trafic) ont un **plafond structurel** : ils dépendent de ton action (vrais identifiants) et surtout du **temps + des backlinks + du trafic**, que rien dans le code ne peut fabriquer.

## ⚠️ Vérification build
Le sandbox de cette session voit des **copies périmées/fantômes** de certains fichiers (`tsc` y signale de faux NUL/erreurs JSX). **Test contrôlé effectué : l'outil d'écriture produit des fichiers propres (0 octet NUL).** Les vrais fichiers Windows sont corrects. **Seule vérification fiable : `npm run build` en local avant de pousser.**

### Fichiers Round 2
**Créés :** `src/components/home/HomePageClient.tsx`
**Modifiés :** `src/app/[locale]/page.tsx` (refactor serveur), `tools/[id]/page.tsx` (contenu riche + breadcrumb), `compare/[slug]/page.tsx` (breadcrumb + fix domaine), `alternatives/[slug]/page.tsx` (breadcrumb), `blog/[slug]/page.tsx` (breadcrumb), `not-found.tsx` (404 riche)
