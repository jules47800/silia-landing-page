# 🚀 Silia Landing Page

Landing page moderne et optimisée pour la plateforme de communication interne **Silia**.

![Silia](https://img.shields.io/badge/Version-2.0-blue)
![Status](https://img.shields.io/badge/Status-Production-success)

## 📋 Description

Page de destination complète présentant Silia, la solution tout-en-un pour centraliser la communication interne des petites structures (CSE, restaurants, collectivités, associations).

## ✨ Fonctionnalités

- 🎨 **Design moderne** : Interface responsive avec Tailwind CSS
- 🔄 **Visite guidée interactive** : Tour guidé en 2 minutes
- 📱 **100% Responsive** : Optimisé mobile, tablette et desktop
- ⚡ **Performance optimisée** : Chargement rapide et cache optimisé
- 🎯 **SEO Ready** : Schema.org markup, meta tags optimisés
- ♿ **Accessible** : Contrôles de taille de texte, WCAG AA/AAA
- 🔐 **Auth Ready** : Boutons Connexion et Inscription intégrés

## 📁 Structure du projet

```
silia-landing-page/
├── index.html                    # Page principale (refonte)
├── landing-base.html             # Ancienne version de référence
├── blog.html                     # Page blog
├── contact.html                  # Page contact
├── dashboard-maquette.html       # Maquette du dashboard
├── article-cse.html              # Article CSE
├── article-restaurant.html       # Article Restaurant
├── styles.css                    # Styles personnalisés
├── tour.js                       # Visite guidée interactive
├── js/
│   └── client-tooltips.js        # Tooltips clients
├── images/                       # Assets images
│   ├── clients/                  # Logos clients
│   ├── logo.png
│   ├── france-num.jpg
│   └── ...
└── vercel.json                   # Configuration Vercel

```

## 🚀 Déploiement

### Sur Vercel (Recommandé)

1. **Import automatique :**
   - Connectez-vous sur [Vercel](https://vercel.com)
   - Importez ce repository GitHub
   - Déployez automatiquement

2. **Via CLI :**
   ```bash
   npm i -g vercel
   vercel
   ```

### Localement

Ouvrez simplement `index.html` dans votre navigateur ou utilisez un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve
```

## 🎨 Design System

### Couleurs principales
- **Violet principal** : `#6c63ff`
- **Orange accent** : `#fbbf24`
- **Beige chaud** : `#fdf8f3`

### Gradients
- Stats : `indigo → purple → pink → rose`
- Section sombre : `gray-900 → indigo-900 → purple-900`

## 📊 Sections principales

1. **Hero** : Proposition de valeur + CTAs + Visite guidée
2. **Problème/Solution** : SVG icons avec design moderne
3. **Stats** : Chiffres clés avec effets hover
4. **Clients** : Carousel de logos
5. **Fonctionnalités** : 2 grandes cards + 3 mini cards
6. **Communication** : Section avec gradient sombre
7. **Témoignages** : Rating 4.8/5 (124 avis)
8. **FAQ** : Schema.org markup pour SEO
9. **Parrainage** : Offre de recommandation
10. **Blog** : Aperçu des derniers articles
11. **Footer** : CTA final + liens

## 🛠️ Technologies

- **HTML5** : Structure sémantique
- **Tailwind CSS** : Framework CSS (via CDN)
- **Lucide Icons** : Bibliothèque d'icônes (via CDN)
- **Vanilla JavaScript** : Interactions et tour guidé
- **Schema.org** : Markup pour SEO

## 📈 Optimisations

- ✅ Cache optimisé (Vercel)
- ✅ Images optimisées
- ✅ Lazy loading
- ✅ Clean URLs
- ✅ Meta tags SEO
- ✅ Open Graph tags
- ✅ Performance score 90+

## 📝 Modifications récentes

- ✨ Ajout de la visite guidée interactive améliorée
- 🔐 Boutons d'authentification dans le header
- 🎨 Redesign des sections Problème/Solution avec SVG
- ⭐ Rating visuel dans les témoignages
- 📊 Stats avec gradients et animations hover
- 🎯 Optimisations SEO (Schema.org)

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est propriétaire - © 2025 Silia SAS

## 📞 Contact

**Silia** - [Site web](https://silia.fr)

Lien du projet : [https://github.com/jules47800/silia-landing-page](https://github.com/jules47800/silia-landing-page)

---

Fait avec ❤️ pour révolutionner la communication interne
