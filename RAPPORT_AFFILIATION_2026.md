# 💰 Rapport — Programmes d'affiliation pour AIverse (13 juin 2026)

Réponse à : "On est affilié à Google Ads/Meta Ads ?" + "donnez le maximum de sites qui peuvent payer et où on peut faire l'affiliation".

---

## 1️⃣ Audit des 13 entrées actuelles (`src/lib/affiliate.ts`)

### ❌ Placeholders — PAS encore inscrit (IDs factices)

| Outil | Réseau | Problème |
|---|---|---|
| **Jasper** | Impact.com | `affiliateId: 'YOUR_IMPACT_ID'` — compte Impact.com pas créé |
| **Surfer SEO** | ShareASale | `affiliateId: 'YOUR_SHAREASALE_ID'` — compte ShareASale pas créé |
| **Semrush AI** | Impact.com | `affiliateId: 'YOUR_IMPACT_ID'` — même compte Impact.com que Jasper |

→ Ces 3 liens ne génèrent **aucune commission** actuellement (ce sont des URLs génériques sans tracking).

### ⚠️ "aiverse" — statut à confirmer (lien construit mais inscription réelle inconnue)

| Outil | Type de lien | Commission typique |
|---|---|---|
| Writesonic | `?via=aiverse` | 30% récurrent à vie |
| Copy.ai | `?via=aiverse` | 45% 1ère année |
| ElevenLabs | `?from=aiverse` | 22% (1ère année, cookie 90j) |
| Murf AI | `?via=aiverse` | 15% sur 24 mois |
| HeyGen | `?sid=aiverse` | ~20% |
| Descript | `get.descript.com/aiverse` | ~15% |
| AdCreative.ai | `?via=aiverse` | ~30% |
| Instantly AI | `?via=aiverse` | ~30% |
| Suno | `?via=aiverse` | non précisé |
| Cursor | aucun lien tracké | aucun programme officiel documenté |

→ ⚠️ **Vérification Gmail (13 juin 2026)** : recherche de mails de confirmation/bienvenue pour Writesonic, Copy.ai, ElevenLabs, Murf AI, HeyGen, Descript, AdCreative.ai, Instantly AI, Cursor, Suno → **aucun résultat**. Aucune trace d'inscription confirmée sur ces 10 programmes.

En revanche, trouvé :
- **PartnerStack** : "Welcome to PartnerStack" (8 juin 2026) — un compte a été créé.
- Mais 2 emails "The status of your PartnerStack Network Application" (4 et 12 juin 2026) indiquent que l'accès **réseau** (qui donnerait accès prioritaire aux 300+ programmes, dont Surfer SEO, ElevenLabs etc.) a été **limité/refusé** : *"We are working on expanding our Network. Your profile is not a great fit, but may be in the future."* — probablement car getaiverse.online n'a pas encore assez de trafic.
- "Vos partenariats existants sur PartnerStack ne seront pas affectés" — donc si un programme individuel (ex. ElevenLabs via PartnerStack) a été accepté séparément, il continue, mais l'accès à *nouveaux* programmes du réseau est bloqué pour l'instant.

**Conclusion** : les 10 entrées "aiverse" dans `affiliate.ts` sont très probablement des **liens préparés mais pas activés** (pas de compte affilié confirmé derrière). Elles ne génèrent donc pas de commissions actuellement. À refaire un par un une fois que le site aura plus de trafic (PartnerStack ré-évalue le profil sur demande via le dashboard).

### Google Ads / Meta Ads
Pas de programme d'affiliation — ce sont des plateformes pour **acheter** du trafic, pas pour en gagner. AdSense (`adsense.ts`) est actif et c'est un mécanisme différent (revenu publicitaire display).

---

## 2️⃣ Réseaux d'affiliation "umbrella" — un seul compte = accès à des centaines de marques

| Réseau | Marques IA pertinentes présentes | Lien d'inscription |
|---|---|---|
| **Impact.com** | Jasper, Semrush, Canva, Grammarly, Adobe, Notion (parfois) | impact.com/become-a-partner |
| **ShareASale** | Surfer SEO, Wondershare (Filmora AI), divers outils SaaS | shareasale.com/info/affiliates |
| **CJ Affiliate (Commission Junction)** | Adobe Creative Cloud (Firefly), Grammarly Business, Webflow | cj.com → "Publishers" |
| **PartnerStack** | Beaucoup de startups B2B SaaS IA (souvent early-stage) | partnerstack.com |
| **Rewardful** | Programmes indie SaaS sur Stripe (Synthesia, beaucoup d'outils no-code/IA) | inscription via le site de chaque outil (propulsé par Rewardful) |
| **FirstPromoter** | Idem Rewardful — petits SaaS IA | via site de l'outil |
| **Awin** | Réseau généraliste, quelques marques tech globales | awin.com |
| **UpPromote / Tapfiliate** | ElevenLabs, Synthesia utilisent parfois ce type d'infra | via le lien "Affiliates" du site |

→ **Priorité** : créer un compte **Impact.com** (débloquerait Jasper + Semrush qui sont déjà dans le fichier mais en placeholder) et un compte **ShareASale** (débloque Surfer SEO).

---

## 3️⃣ Liste élargie — programmes directs par catégorie (catalogue ~649 outils)

### ✍️ Rédaction / Contenu IA
- **Jasper** — 25% récurrent (12 mois), jusqu'à 30% si 100+ clients/an (déjà dans le fichier, à activer via Impact.com)
- **Writesonic** — 30% récurrent à vie (déjà dans le fichier)
- **Copy.ai** — 45% 1ère année (déjà dans le fichier)
- **Rytr** — 30% récurrent
- **Notion AI** — programme affilié via Impact.com (souvent ~50% 1er mois)

### 🔍 SEO / Marketing
- **Surfer SEO** — 25% récurrent (déjà dans le fichier, via ShareASale)
- **Semrush** — ~200$ par vente (déjà dans le fichier, via Impact.com)
- **AdCreative.ai** — ~30% (déjà dans le fichier)
- **Instantly AI** — ~30% (déjà dans le fichier)

### 🎙️ Voix / Audio IA
- **ElevenLabs** — 22% (1ère année, cookie 90j) (déjà dans le fichier)
- **Murf AI** — 15% sur 24 mois (déjà dans le fichier)

### 🎬 Vidéo IA
- **Synthesia** — 25% (cookie 60j) — **non présent dans le catalogue affilié**, à ajouter (programme via synthesia.io/partners/affiliates)
- **Pictory** — 20-50% récurrent à vie (cookie ~9999 jours, le plus généreux) — **à ajouter**
- **HeyGen** — ~20% (déjà dans le fichier)
- **Descript** — ~15% (déjà dans le fichier)
- **Runway** — ❌ aucun programme d'affiliation public en 2026 (vérifié) — ne pas perdre de temps

### 🖼️ Image / Design IA
- **Canva** — jusqu'à 20% (cookie 30j) — gros volume de recherche, **à ajouter**
- **PhotoAI** — 20% sur tous les referrals — **à ajouter**
- **HeadshotPro** — 100% le 1er mois puis 30% — **à ajouter**

### 📺 Outils créateurs YouTube (déjà couverts par l'article blog Manus/vidIQ/TubeBuddy)
- **TubeBuddy** — jusqu'à 50% récurrent (le plus généreux trouvé) — **à ajouter en priorité**, cohérent avec l'article déjà publié

### 📊 Présentations IA (déjà couvert par l'article "best-ai-presentation-makers-2026")
- **Gamma**, **Beautiful.ai**, **Pitch** — vérifier individuellement s'ils ont un programme (souvent via Impact/PartnerStack), pas confirmé dans cette recherche

---

## 4️⃣ Plan d'action recommandé (par ordre de rentabilité/effort)

1. **Vérifier si tu as déjà des comptes actifs** sur les 10 "aiverse" — si oui, donne-moi les vrais IDs/liens pour corriger `affiliate.ts`. Si non, ce sont à créer un par un (gratuit, 5-10 min chacun).
2. **S'inscrire sur Impact.com** → débloque Jasper + Semrush (déjà préparés dans le code, juste besoin du vrai ID).
3. **S'inscrire sur ShareASale** → débloque Surfer SEO (déjà préparé).
4. **Ajouter TubeBuddy (50%), Pictory (20-50%), Synthesia (25%), Canva (20%)** au fichier `affiliate.ts` une fois inscrit — gros potentiel, cohérent avec le catalogue et les articles déjà publiés.
5. **Ne pas perdre de temps sur Runway** (pas de programme).

Tout ceci reste **gratuit à mettre en place** (inscriptions affiliés = pas de coût), contrairement aux guest-posts payants déjà discutés (AI Tool Mind/AI Guide Blog) qui restent reportés jusqu'à revenus.

---

---

## 5️⃣ Liens directs d'inscription — du plus important au moins important

| # | Outil | Pourquoi prioritaire | Lien d'inscription |
|---|---|---|---|
| 1 | **Pictory** | 20-50% récurrent **à vie** (cookie ~9999 jours) — le programme le plus généreux | https://partners.pictory.ai/signup |
| 2 | **Copy.ai** | 45% la 1ère année, déjà dans `affiliate.ts` (juste à confirmer le compte) | Section "Affiliates/Partners" sur copy.ai (pas d'URL directe trouvée) |
| 3 | **Writesonic** | 30% récurrent à vie, déjà dans `affiliate.ts` | https://writesonic.com/affiliates |
| 4 | **HeadshotPro** | 30% récurrent (cookie 60j), inscription instantanée | https://headshotpro-1.getrewardful.com/signup |
| 5 | **Synthesia** | 25% récurrent (cookie 60j), gros volume vidéo IA | https://synthesia.getrewardful.com/signup |
| 6 | **Jasper** | 25-30% récurrent, déjà préparé dans `affiliate.ts` (juste le placeholder à remplacer) | jasper.ai/partners → redirige vers Impact.com |
| 7 | **Semrush** | $200 par vente + $10/essai, déjà préparé dans `affiliate.ts` | https://app.impact.com/advertiser-advertiser-info/Semrush.brand |
| 8 | **HeyGen** | 25% récurrent (cookie 30j), approbation instantanée, déjà dans `affiliate.ts` | https://heygen.getrewardful.com/signup?campaign=influencer-program-b |
| 9 | **ElevenLabs** | 22% (cookie 90j), déjà dans `affiliate.ts` | https://elevenlabs.io/affiliates (via PartnerStack) |
| 10 | **Murf AI** | 20% sur 24 mois, inscription libre, déjà dans `affiliate.ts` | https://murf.ai/partner-with-us/affiliate |
| 11 | **Surfer SEO** | 25% récurrent — ⚠️ en réalité géré par **PartnerStack**, pas ShareASale (corriger `affiliate.ts`) | https://market.partnerstack.com/page/surferseo |
| 12 | **PhotoAI** | ~20-33% selon la version | https://photoai.com/faq/photo-ai-affiliate-program |
| 13 | **Canva** | Jusqu'à 20% — ⚠️ programme "Canvassador" **actuellement fermé** aux nouvelles candidatures | https://public.canva.site/canvassadors (vérifier réouverture) |
| 14 | **TubeBuddy** | 50% récurrent — ⚠️ programme **fermé aux nouveaux affiliés depuis mai 2026** | tubebuddy.com (vérifier si réouvert) |

### Pour Descript, AdCreative.ai, Instantly AI, Suno, Cursor (déjà dans `affiliate.ts` avec `aiverse`)
Pas de lien direct trouvé dans cette recherche — vérifier sur chaque site la page "Affiliates/Partners" (souvent en bas de page) pour confirmer si un compte existe déjà sous ton nom.

---

## Sources
- [17 Best AI Affiliate Programs with High Commissions (2026) — Rewardful](https://www.rewardful.com/articles/the-best-affiliate-programs-for-ai-tools)
- [21 Best AI Affiliate Programs - 2026 Commission Rates — Lasso](https://getlasso.co/niche/ai/)
- [Best AI Tools Affiliate Programs 2026: Top 50+ Ranked — OutlierKit](https://outlierkit.com/resources/best-ai-tools-affiliate-programs/)
- [ElevenLabs Affiliate Program — Affiliate.Watch](https://affiliate.watch/affiliate/elevenlabs)
- [Synthesia Affiliate Program — Affiliate.Watch](https://affiliate.watch/affiliate/synthesia)
- [Pictory Affiliate Program — Lasso](https://getlasso.co/affiliate/pictory/)
- [Runway Affiliate Program: Does It Exist? (2026) — zPlatform.ai](https://zplatform.ai/ai-affiliate-programs/runway-ml/)
- [TubeBuddy Affiliate Program — OutlierKit](https://outlierkit.com/resources/tubebuddy-affiliate-program/)
- [Pictory Sign Up — partners.pictory.ai](https://partners.pictory.ai/signup)
- [Canva Affiliate Program — Canva Help Center](https://www.canva.com/help/canva-affiliate-marketing-program/)
- [Synthesia Affiliate Sign Up — Rewardful](https://synthesia.getrewardful.com/signup)
- [Semrush Affiliate Program — Impact.com](https://app.impact.com/advertiser-advertiser-info/Semrush.brand)
- [Surfer SEO Affiliate Program — PartnerStack](https://market.partnerstack.com/page/surferseo)
- [ElevenLabs Affiliates](https://elevenlabs.io/affiliates)
- [Writesonic Affiliates](https://writesonic.com/affiliates)
- [HeyGen Affiliate Sign Up — Rewardful](https://heygen.getrewardful.com/signup?campaign=influencer-program-b)
- [Murf AI Affiliate Program](https://murf.ai/partner-with-us/affiliate)
- [HeadshotPro Affiliate Sign Up — Rewardful](https://headshotpro-1.getrewardful.com/signup)
- [Photo AI Affiliate Program](https://photoai.com/faq/photo-ai-affiliate-program)
