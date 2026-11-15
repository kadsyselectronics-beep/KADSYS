# Site KADSYS Electronics

Site vitrine statique (HTML / CSS / JavaScript, sans dépendance ni serveur).

## Contenu
- index.html — accueil : accroche, chiffres clés, savoir-faire, prestations, secteurs
- expertises.html — 6 blocs de compétences détaillés + méthode cycle en V + management
- parcours.html — chronologie 2000 → aujourd'hui, formation et habilitations
- references.html — projets par secteur + tableau de cartographie des compétences
- contact.html — coordonnées KADSYS Electronics + formulaire
- assets/style.css — feuille de style unique (couleurs en haut du fichier, variables CSS)
- assets/script.js — menu mobile, année automatique, contrôle du formulaire

## Mise en ligne
1. Option simple : déposer tous les fichiers à la racine de l'hébergement par FTP
   (dossier www / public_html / htdocs selon l'hébergeur).
2. Option sans hébergeur : créer un dépôt sur GitHub, y placer les fichiers,
   puis activer GitHub Pages (Settings > Pages > Branch: main).
   Alternatives équivalentes : Netlify ou Vercel (glisser-déposer du dossier).

## Personnalisation
- Couleurs : ouvrir assets/style.css et modifier les variables du bloc :root
  (--navy, --steel, --accent).
- Textes : chaque contenu est directement dans les fichiers .html.
- Formulaire : il contrôle la saisie côté navigateur et renvoie vers l'adresse e-mail.
  Pour un envoi automatique, brancher sur un service type Formspree / FormSubmit
  (attribut action du <form>) ou sur un script PHP fourni par l'hébergeur.

## À remplacer avant publication
- Remplacer les coordonnées de contact si elles évoluent.
- Ajouter le nom de domaine réel dans sitemap.xml et robots.txt.
- Ajouter si souhaité une page mentions légales et une politique de confidentialité.
