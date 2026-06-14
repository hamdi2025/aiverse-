# 🚀 Plan trafic & backlinks — 4 semaines (AIverse)

Objectif : passer de ~0 visite à un premier flux régulier + des backlinks réels. Tout est **gratuit** (du temps, pas de budget). Règle d'or : **apporter de la valeur, jamais spammer.**

⏱️ Prévois ~30–60 min/jour. Coche au fur et à mesure.

---

## 📌 SEMAINE 1 — Fondations & indexation (le plus important)

But : que Google trouve et indexe ton site, + premiers backlinks faciles.

- [ ] **Google Search Console** : vérifie que `getaiverse.online` est bien ajouté (sans www). Soumets le **sitemap** : `https://getaiverse.online/sitemap.xml`. Puis « Inspection d'URL » → demande l'indexation de la home + 5 fiches phares.
- [ ] **Bing Webmaster Tools** : ajoute le site + sitemap (Bing alimente ChatGPT).
- [ ] **IndexNow** (déjà configuré) — relance après chaque gros changement :
  ```powershell
  Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow?url=https://getaiverse.online/sitemap.xml&key=27089330e3197d47ad88a2e06d3f8205" -Method GET
  ```
- [ ] **Soumets AIverse à 10–15 annuaires d'outils IA** (backlink + trafic référent). Cherche « [nom] submit tool » :
  - There's An AI For That, Futurepedia, Future Tools, Toolify, AI Scout, TopAI.tools, AITopTools, Insidr AI, SaaS AI Tools, AI Tool Hunt, Aitoolnet, There's an AI, Easy With AI, AI Tools Directory, Foundr AI.
  - Pour chacun : nom du site, URL, description courte (réutilise celle de la home), catégorie « AI tools directory ».
- [ ] **Annuaires généralistes** : SaaSHub, AlternativeTo, BetaList, Product Hunt (créer la page produit, lancement en semaine 4).

🎯 Résultat attendu : 10–20 backlinks, site indexé, premières visites référentes.

---

## 📌 SEMAINE 2 — Présence sociale (trafic immédiat)

But : amener tes premiers vrais visiteurs + signaux sociaux. Utilise tes brouillons déjà prêts dans `SOCIAL_MEDIA_DRAFTS.md`.

- [ ] **LinkedIn** : publie 1 post « J'ai lancé AIverse, un annuaire multilingue de 580+ outils IA » + lien. Poste dans 2–3 groupes IA pertinents.
- [ ] **X/Twitter** : crée/active le compte @aiverse, poste 3–4 fois (un outil utile par jour + lien vers la fiche). Utilise des hashtags (#AItools #AI).
- [ ] **Reddit** (⚠️ anti-pub : donne de la valeur, ne spamme pas) : réponds à des questions « what's the best AI tool for X » dans r/artificial, r/ArtificialInteligence, r/SaaS, r/EntrepreneurRideAlong — et glisse un lien vers une fiche/comparatif **utile** seulement quand ça aide vraiment.
- [ ] **Quora** : réponds à 3–5 questions « best AI tool for… » avec une vraie réponse + lien vers ton comparatif.
- [ ] **Groupes Facebook / Discord IA** : partage 1–2 comparatifs utiles.

🎯 Résultat attendu : premiers pics de visites, signaux sociaux, 2–5 backlinks (profils + posts).

---

## 📌 SEMAINE 3 — Contenu longue traîne (le moteur SEO durable)

But : créer des pages qui rankent sur des recherches faciles, en 4 langues (ton avantage).

- [ ] **Recherche de mots-clés faciles** (KD faible, intention claire) : « best free AI [X] 2026 », « [outil A] vs [outil B] », « alternatives to [outil] ». Outils gratuits : Google « recherches associées », AnswerThePublic, Keyword Surfer (extension gratuite).
- [ ] **Publie 2–3 nouveaux articles** ciblant ces requêtes (ton blog gère déjà 4 langues + FAQ + JSON-LD). Idées : « Best AI tools for students 2026 », « Best AI voice generators 2026 », « ChatGPT vs [X] ».
- [ ] **Maillage** : depuis chaque article, lie vers 3–5 fiches outils + 1 comparatif.
- [ ] Demande l'indexation des nouveaux articles dans Search Console.

🎯 Résultat attendu : 3 pages de plus qui se positionnent sur le moyen/long terme.

---

## 📌 SEMAINE 4 — Lancement Product Hunt + relances

But : un pic de trafic concentré + relancer l'outreach gratuit.

- [ ] **Product Hunt** : finalise la page (logo, screenshots, tagline, 1ère description). Lance un **mardi ou mercredi** (00:01 PST). Préviens ton réseau (LinkedIn/X) de venir upvoter le jour J. → pic de centaines de visiteurs + un backlink de qualité.
- [ ] **Relance les 5 pitchs guest-post sans réponse** (`BACKLINKS_GUEST_POSTS.md`) — message court de relance.
- [ ] **Cherche 5 blogs IA acceptant des articles invités gratuits** (« write for us AI tools », « AI blog guest post ») → propose un article unique avec 1 lien vers AIverse.
- [ ] **Bilan** : ouvre Search Console + Analytics. Note : visites, pages qui rankent, sources de trafic. Double ce qui marche.

🎯 Résultat attendu : pic Product Hunt (200–1 000 visites sur 1–2 jours) + 2–5 backlinks éditoriaux.

---

## 🔁 À répéter chaque semaine ensuite (le secret = la régularité)
- 1–2 articles longue traîne / semaine
- 3–5 réponses utiles (Reddit/Quora) / semaine
- 5 soumissions annuaires / nouveaux backlinks / semaine
- 1 vérif Search Console / semaine (quelles pages montent ?)

---

## ⚠️ Règles d'or
1. **Valeur d'abord.** Sur Reddit/Quora, aide vraiment — le lien vient en bonus, sinon tu te fais bannir.
2. **Constance > intensité.** 30 min/jour pendant 3 mois battent 1 grosse journée puis rien.
3. **Mesure.** Ce qui amène des visites, tu en fais plus. Le reste, tu laisses.
4. **Patience.** Le SEO met 3–6 mois à démarrer. Les semaines 1–4 plantent les graines ; la récolte vient après.

---

## 📈 Lien avec les revenus (rappel)
- Plus de trafic → plus d'AdSense **et** plus de ventes d'affiliation (HeyGen, Synthesia, HeadshotPro déjà branchés).
- À ~5 000 visites/mois : ~65–180 $/mois. À ~30 000 : ~500–1 400 $/mois.
- Ce plan vise à franchir les **premiers paliers** (500 → 2 000 → 5 000 visites/mois) sur 2–4 mois.

---

### Fichiers liés (déjà dans ton dossier)
- `SOCIAL_MEDIA_DRAFTS.md` — posts Reddit/LinkedIn/Product Hunt prêts
- `BACKLINKS_GUEST_POSTS.md` — suivi des pitchs guest-post
- `AFFILIATION_RWANDA_GUIDE.md` — programmes à activer pour encaisser
