# 🤖 Rapport — Détectabilité d'AIverse par les IA (ChatGPT, Claude, DeepSeek, Qwen, MiniMax, GLM)

Date : 13 juin 2026. Suite logique du `RAPPORT_SEO_ROADMAP_2026_MONETISATION.md` (Layer 3 — GEO), inspiré de la même approche : recherche + recommandations + actions appliquées.

---

## 1️⃣ Constat : qui crawle quoi en 2026

- **ChatGPT** : pas de crawler dédié massif — s'appuie surtout sur l'**API Bing** (être bien indexé par Bing aide) + `OAI-SearchBot`/`ChatGPT-User` pour le "browsing" en temps réel.
- **Claude (Anthropic)** : `ClaudeBot` / `anthropic-ai` — crawle le web pour l'entraînement et la recherche.
- **Perplexity** : `PerplexityBot` — crawle **en temps réel** au moment de la requête (la fraîcheur du contenu compte beaucoup).
- **Google AI Overviews / Gemini** : `Google-Extended` (en plus de Googlebot classique).
- **DeepSeek (Chine)** : ne publie **aucun user-agent documenté** — crawle "anonymement", impossible à cibler spécifiquement via `robots.txt`. La seule façon d'être visible reste un contenu public, bien structuré et largement référencé.
- **Qwen (Alibaba), MiniMax, GLM (Zhipu/Z.ai)** : pas de user-agent de crawler propre documenté à ce jour — ces modèles s'appuient principalement sur leurs **données d'entraînement** (web crawlé via Common Crawl/CCBot et autres) plutôt que sur un crawler dédié pour la recherche en temps réel. Conclusion : être présent dans les **gros crawls génériques** (CCBot, Common Crawl) et avoir un contenu repris/cité par d'autres sites reste le principal levier pour ces modèles.

→ **Implication pour AIverse** : il n'y a pas de "case à cocher" magique pour DeepSeek/Qwen/MiniMax/GLM — le levier commun à **tous** les modèles (y compris ceux-là) est : (1) ne bloquer aucun crawler IA, (2) un contenu clair/structuré/citable, (3) être référencé par d'autres sources (guest posts, backlinks — déjà en cours).

---

## 2️⃣ Audit technique AIverse — état actuel

| Élément | État | Détail |
|---|---|---|
| `robots.txt` (`src/app/robots.ts`) | ✅ Déjà optimal | `userAgent: '*', allow: '/'` — **aucun crawler IA n'est bloqué** (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bytespider, etc. sont tous autorisés implicitement). Rien à changer. |
| `sitemap.xml` | ✅ Déjà complet | Toutes les pages (outils, comparatifs, alternatives, blog) × 4 langues sont listées avec `lastModified`. |
| FAQ + `FAQPage` JSON-LD | ✅ Déjà fait | Sur `/tools/[id]`, `/compare/[slug]`, `/alternatives/[slug]`, `/blog/[slug]` — format réponse directe ~40-60 mots, exactement le format que les IA aiment extraire/citer. |
| `llms.txt` (fichier de découverte IA) | ❌ Manquant → ✅ **créé** | Seulement ~7% des sites top en ont un en 2026. Nouveau fichier `public/llms.txt` : présente AIverse, ses sections clés (outils, comparatifs, alternatives, blog), format de contenu, et lien vers le sitemap — pour qu'un LLM comprenne la structure du site en une lecture. |
| Schema `Organization`/`WebSite` (entité du site) | ❌ Manquant → ✅ **ajouté** | Nouveau JSON-LD `@graph` (Organization + WebSite + SearchAction) injecté dans `src/app/[locale]/layout.tsx` — aide les IA à reconnaître "AIverse" comme une entité/marque cohérente sur tout le site (utile pour qu'un modèle dise "selon AIverse..." plutôt que de citer une URL anonyme). |

---

## 3️⃣ Ce qui a été fait aujourd'hui

1. **`public/llms.txt`** créé — description du site, sections clés avec liens, notes de format (FAQ, 4 langues), lien sitemap.
2. **Schema `Organization` + `WebSite` + `SearchAction`** ajouté dans `src/app/[locale]/layout.tsx` (JSON-LD `@graph`, présent sur toutes les pages du site, 4 langues).
3. **Audit `robots.ts`** : confirmé déjà optimal, aucun changement nécessaire.

---

## 4️⃣ Recommandations restantes (non appliquées, à discuter)

| Priorité | Action | Pourquoi |
|---|---|---|
| 1 | Mettre à jour la métadonnée homepage (`page-metadata.ts`) qui dit encore **"555+ AI tools"** alors que le catalogue est à **649** | Incohérence chiffrée = mauvais signal "fraîcheur"/E-E-A-T pour les IA qui comparent les chiffres cités vs réalité du site. Petit correctif, fort impact crédibilité. |
| 2 | Créer une page **"About / À propos"** (qui est AIverse, depuis quand, méthodologie de notation/sélection des outils) | Les IA (ChatGPT notamment) valorisent les pages "About" avec auteur/date pour juger la fiabilité (E-E-A-T) avant de citer. |
| 3 | Continuer la stratégie guest-post (déjà en cours) en visant des sites bien crawlés par Common Crawl/CCBot | C'est le canal le plus direct pour DeepSeek/Qwen/MiniMax/GLM, qui n'ont pas de crawler dédié contrôlable. |
| 4 | Ajouter des **données chiffrées propres à AIverse** dans les articles de blog (ex. "sur nos 649 outils, X% sont gratuits dans la catégorie Y") | Contenu original difficile à trouver ailleurs = plus susceptible d'être "la" source citée (Layer 3 GEO du rapport précédent). |

---

## 5️⃣ Nouveau (13 juin 2026, suite) — IndexNow + robots.txt explicite pour les bots IA

Suite au constat **"ChatGPT s'appuie sur Bing, Claude/Perplexity ont leurs propres crawlers"**, deux actions supplémentaires :

1. **`robots.ts` rendu explicite** : en plus de la règle générale (`*` → tout autorisé, déjà présente), j'ai ajouté des règles **nommées** pour `GPTBot`/`ChatGPT-User`/`OAI-SearchBot` (OpenAI), `ClaudeBot`/`anthropic-ai`/`Claude-Web` (Anthropic), `PerplexityBot`, `Google-Extended` (Gemini), et `CCBot`/`Bytespider` (Common Crawl — source de données pour DeepSeek/Qwen/GLM/MiniMax). Effet immédiat : nul (le `*` autorisait déjà tout), mais ça **documente explicitement** l'autorisation et protège si la règle générale change un jour.

2. **Fichier IndexNow créé** (`public/27089330e3197d47ad88a2e06d3f8205.txt`, contient juste la clé) — protocole **IndexNow** : permet de notifier **Bing instantanément** quand une page est ajoutée/modifiée (au lieu d'attendre le prochain crawl). Comme **ChatGPT s'appuie sur l'index Bing**, ça accélère directement l'apparition d'AIverse dans les réponses ChatGPT. IndexNow est aussi utilisé par Yandex/Seznam (pas Google/Perplexity directement, mais sans effet négatif).

   **⚠️ Étape suivante (après déploiement du fichier clé)** : une fois `https://getaiverse.online/27089330e3197d47ad88a2e06d3f8205.txt` accessible en ligne (donc après le `git push`), exécute cette commande **toi-même** (PowerShell) pour notifier Bing/IndexNow de ton sitemap :
   ```powershell
   Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow?url=https://getaiverse.online/sitemap.xml&key=27089330e3197d47ad88a2e06d3f8205" -Method GET
   ```
   Je n'ai pas pu exécuter cet appel moi-même (le bac à sable n'a pas accès à `api.indexnow.org`). Une réponse `200 OK` confirme la prise en compte.

3. **Pour Claude/Perplexity** : leurs crawlers (`ClaudeBot`, `PerplexityBot`) sont déjà autorisés (point 1) et découvriront le contenu via le `sitemap.xml` (déjà à jour) + les nouveaux backlinks issus des guest-posts. Il n'existe pas d'équivalent IndexNow pour ces deux-là — la fraîcheur du contenu + le maillage interne + les backlinks externes restent les seuls leviers.

## 6️⃣ À pousser (par l'utilisateur)

```
cd "chemin/vers/averse"
git add public/llms.txt "src/app/[locale]/layout.tsx"
git commit -m "GEO: add llms.txt and Organization/WebSite JSON-LD schema for AI discoverability"
git push origin main
```
