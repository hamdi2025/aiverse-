# 📈 Plan d'amélioration AIverse — de 38/100 vers un site compétitif

Basé sur l'évaluation benchmark vs There's An AI For That / Futurepedia / FutureTools / Toolify.
Statut : `à faire` / `en cours` / `fait`

---

## 1. Contenu & originalité — 8/20

| Priorité | Action | Statut |
|---|---|---|
| Haute | Remplacer les descriptions génériques/templées par du contenu rédigé à la main pour les 30-50 outils les plus visités (uniqueness = ranking) | à faire |
| Haute | Ajouter des "vrais" avis/retours d'usage (testés par toi) sur quelques outils phares — crédibilité + différenciation | à faire |
| Moyenne | Ajouter une date "Dernière mise à jour" visible par fiche + la tenir à jour réellement | à faire |
| Moyenne | Étoffer les articles de blog existants (25) avec captures d'écran, exemples concrets | à faire |
| Basse | Ajouter une section "Notre avis" / score maison distinct du `rating` générique | à faire |

## 2. SEO technique on-page — 10/15

| Priorité | Action | Statut |
|---|---|---|
| Fait | Doublons tools.ts supprimés, aggregateRating non conforme retiré | fait |
| Haute | Vérifier Core Web Vitals (PageSpeed Insights mobile) sur 3-4 pages types | à faire |
| Haute | Ajouter `breadcrumb` JSON-LD sur les pages tools/compare/alternatives | à faire |
| Moyenne | Vérifier que chaque page a un `<h1>` unique et des meta descriptions non dupliquées | à faire |
| Moyenne | Compresser/optimiser les images (si logos d'outils hébergés en local) | à faire |
| Basse | Ajouter pagination propre (`rel=next/prev` ou liens) si listes très longues | à faire |

## 3. Monétisation / affiliation — 5/15

| Priorité | Action | Statut |
|---|---|---|
| En cours | Programme d'affiliation (HeadshotPro, Synthesia, HeyGen faits — voir AFFILIATION_CHECKLIST.md) | en cours |
| Haute | Remplacer tous les placeholders `aiverse`/`YOUR_IMPACT_ID`/`YOUR_SHAREASALE_ID` par de vrais liens trackés | à faire |
| Haute | Mettre en avant les outils affiliés (badge "Recommandé" / tri par défaut) pour maximiser les clics | à faire |
| Moyenne | Activer Google AdSense correctement (vérifier que ads.txt + emplacements sont actifs) | à faire |
| Basse | Étudier les listings sponsorisés payants (modèle Toolify/TAAFT) une fois trafic suffisant | à faire |

## 4. Autorité & backlinks — 2/15

| Priorité | Action | Statut |
|---|---|---|
| Haute | Continuer la prospection guest-posts (voir BACKLINKS_GUEST_POSTS.md) | en cours |
| Haute | Soumettre AIverse aux annuaires d'AI tools eux-mêmes (Futurepedia submit, TAAFT submit, etc. — backlinks + trafic référent) | à faire |
| Moyenne | Créer profils sociaux actifs (X/Twitter, LinkedIn) et poster régulièrement (signal + trafic) | à faire |
| Moyenne | Lancer une newsletter simple (capture email → fidélisation + signal d'audience) | à faire |
| Basse | Chercher des mentions Reddit/communautés AI pertinentes (sans spam) | à faire |

## 5. UX / Design / branding — 6/10

| Priorité | Action | Statut |
|---|---|---|
| Moyenne | Tester la navigation mobile complète (menu, filtres, recherche) | à faire |
| Moyenne | Ajouter une fonction de recherche/filtre par catégorie bien visible sur la home | à faire |
| Basse | Vérifier cohérence visuelle (logo, favicon, couleurs) sur toutes les pages/langues | à faire |
| Basse | Page 404 personnalisée si pas déjà fait | à faire |

## 6. Trafic & marketing — 1/10

| Priorité | Action | Statut |
|---|---|---|
| Haute | Configurer/vérifier Google Analytics + Search Console (déjà partiellement fait) et suivre les métriques chaque semaine | en cours |
| Haute | Publier régulièrement (1-2 articles/semaine) pour la fraîcheur + indexation | à faire |
| Moyenne | Identifier 5-10 mots-clés "low competition" (longue traîne 2026) et créer du contenu dédié | à faire |
| Basse | Tester une petite campagne sociale (X/Reddit/LinkedIn) pour amorcer du trafic référent | à faire |

## 7. Trust & crédibilité — 3/10

| Priorité | Action | Statut |
|---|---|---|
| Haute | Ajouter une page "About/À propos" crédible (qui es-tu, pourquoi AIverse, méthodologie de notation) | à faire |
| Haute | Ajouter Mentions légales / Politique de confidentialité / CGU (obligatoire pour AdSense + affiliation EU) | à faire |
| Moyenne | Ajouter une page Contact fonctionnelle | à faire |
| Basse | Afficher clairement la politique de divulgation affiliée ("certains liens sont des liens d'affiliation") | à faire |

## 8. GEO / visibilité IA (ChatGPT, Claude, Perplexity...) — 3/5

| Priorité | Action | Statut |
|---|---|---|
| Fait | llms.txt créé, robots.txt ouvert aux bots IA, FAQ structurée AEO | fait |
| Moyenne | Vérifier que le contenu FAQ est bien repris dans les réponses IA (tester sur Perplexity/ChatGPT) | à faire |
| Basse | Ajouter des données structurées `Organization` (site-wide) avec logo, réseaux sociaux | à faire |

---

## Priorités immédiates (cette semaine)
1. Page "About" + Mentions légales/Confidentialité (bloquant pour crédibilité + AdSense)
2. Remplacer les placeholders d'affiliation restants
3. Réécrire les descriptions des 20-30 outils les plus consultés
4. Vérifier Core Web Vitals + recherche/filtre mobile
