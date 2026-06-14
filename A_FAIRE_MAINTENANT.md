# ✅ À faire maintenant — guide ultra-simple (copier-coller)

> Fais les étapes **dans l'ordre**, de haut en bas. Chaque bloc gris = à copier-coller dans **PowerShell**.

---

## ÉTAPE 1 — Ouvrir le bon dossier
Ouvre **PowerShell** (menu Démarrer → tape « PowerShell » → Entrée), puis colle :

```powershell
cd "C:\Users\HAMDI\Desktop\averse"
```
👉 Ça veut dire : « va dans le dossier du site ». (Rien ne s'affiche = c'est bon.)

---

## ÉTAPE 2 — Vérifier que le site marche AVANT d'envoyer (important)
Colle ces deux lignes, une par une (attends que la première finisse) :

```powershell
npm install
```
```powershell
npm run build
```
👉 `npm install` prépare les outils (2-3 min). `npm run build` construit le site (1-3 min).

**Comment savoir si c'est bon ?**
- ✅ Si à la fin tu vois quelque chose comme **« ✓ Compiled successfully »** ou **« Generating static pages »** → **PARFAIT**, passe à l'étape 3.
- ❌ Si tu vois du texte **rouge avec « Error »** → **NE PUSH PAS**. Copie tout le texte rouge et colle-le moi ici. Je corrige.

---

## ÉTAPE 3 — Envoyer les améliorations en ligne (push)
Colle ces 3 lignes, une par une :

```powershell
git add -A
```
```powershell
git commit -m "Ameliorations site: pages legales, SEO, contenu fiches, breadcrumbs, 404, chiffres coherents"
```
```powershell
git push origin main
```
👉 Ça envoie tout sur GitHub. **Vercel** reconstruit le site automatiquement et le met en ligne en ~1-2 min. 🎉

> S'il te demande un identifiant GitHub : nom d'utilisateur = `hamdi2025`, mot de passe = ton **token GitHub** (pas ton vrai mot de passe).

---

## ÉTAPE 4 — Régler « www » vs « sans www » (sur Vercel, 0 code, 2 min)
**Le problème en bébé :** ton site répond à deux adresses (`getaiverse.online` ET `www.getaiverse.online`). Google n'aime pas l'hésitation. On en choisit UNE.

1. Va sur **vercel.com** → connecte-toi → clique ton projet **aiverse**.
2. En haut : onglet **Settings** → menu de gauche **Domains**.
3. Choisis **`getaiverse.online`** (SANS www) comme principal.
4. Pour **`www.getaiverse.online`** : mets l'option **Redirect to getaiverse.online**.
5. Sauvegarde. C'est fini. ✅

(Tout mon code utilise déjà la version SANS www, donc tout sera cohérent.)

---

## ÉTAPE 5 — AdSense : créer les vraies « cases pub » (pour gagner de l'argent)
**En bébé :** aujourd'hui les emplacements pub ont de faux numéros, donc aucune pub ne s'affiche.

1. Va sur **adsense.google.com** → connecte-toi.
2. À gauche : **Annonces** → **Par unité publicitaire** → **Annonces display**.
3. Crée **3 unités** (donne-leur ces noms pour s'y retrouver) :
   - `aiverse-leaderboard`
   - `aiverse-ingrid`
   - `aiverse-footer`
4. Pour chaque unité créée, Google te donne un **numéro de slot** (10 chiffres, ex : `1234567890`).
5. **Copie-moi les 3 numéros ici.** Je les mets dans le code à la bonne place, tu re-fais l'étape 3 (push), et les vraies pubs s'affichent.

👉 Bonus : maintenant que les pages **À propos / Confidentialité / Conditions** existent, tu peux **redemander la validation AdSense** (Aperçu → si « action requise », clique pour resoumettre).

---

## ÉTAPE 6 — Affiliation : mettre tes vrais liens (pour toucher des commissions)
**En bébé :** certains liens « pour gagner une commission » sont encore des liens-test (`YOUR_IMPACT_ID`, etc.). Ils ne te rapportent rien tant qu'ils ne sont pas remplacés.

Pour **chaque programme où tu es accepté** (ex : HeadshotPro, Synthesia, HeyGen, et bientôt Murf #7), donne-moi :
- le **nom de l'outil**,
- ton **lien d'affiliation tracké complet** (celui que le programme te donne, du genre `https://...?ref=tonID` ou `https://impact.../...`).

Colle-moi la liste ici, et je les branche dans le code (`src/lib/affiliate.ts`). Ensuite tu refais l'étape 3 (push).

---

## ÉTAPE 7 (optionnel) — Prévenir Bing/ChatGPT que le site a changé
Après le push (étape 3), colle ça pour accélérer l'indexation :

```powershell
Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow?url=https://getaiverse.online/sitemap.xml&key=27089330e3197d47ad88a2e06d3f8205" -Method GET
```

---

## 🧭 Récap de l'ordre
1. Ouvrir le dossier (étape 1)
2. Construire et vérifier (étape 2) ← si rouge, tu m'envoies l'erreur
3. Pousser en ligne (étape 3)
4. Régler www sur Vercel (étape 4)
5. M'envoyer les 3 numéros AdSense (étape 5)
6. M'envoyer tes liens d'affiliation (étape 6)
7. Ping IndexNow (étape 7, optionnel)

**Ce dont J'AI besoin de toi pour continuer :** les **3 numéros de slots AdSense** + tes **liens d'affiliation** réels. Dès que tu me les donnes, je fais les modifs et tu n'as plus qu'à refaire l'étape 3.
