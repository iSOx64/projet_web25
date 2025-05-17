// Pagination dynamique et boutons de défilement pour news.html

document.addEventListener('DOMContentLoaded', function() {
  // Attend que le DOM soit complètement chargé avant d'exécuter le code
  
  // Pagination dynamique
  
  const articles = Array.from(document.querySelectorAll('.all-news-article'));
  // Sélectionne tous les éléments avec la classe 'all-news-article' et les convertit en tableau manipulable
  
  const articlesPerPage = 3;
  // Définit le nombre d'articles à afficher par page
  
  const pagination = document.querySelector('.pagination');
  // Sélectionne l'élément HTML qui contiendra les boutons de pagination
  
  let currentPage = 1;
  // Initialise la variable qui garde trace de la page actuellement affichée, commence à la page 1
  
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  // Calcule le nombre total de pages nécessaires en divisant le nombre total d'articles par le nombre d'articles par page
  // Math.ceil arrondit à l'entier supérieur pour s'assurer que tous les articles sont affichés

  function showPage(page) {
    // Définit une fonction pour afficher une page spécifique d'articles
    
    articles.forEach((article, idx) => {
      // Parcourt chaque article avec son index
      
      article.style.display = (idx >= (page-1)*articlesPerPage && idx < page*articlesPerPage) ? '' : 'none';
      // Affiche l'article uniquement s'il appartient à la page actuelle, sinon le cache
      // Si l'index est entre (page-1)*articlesPerPage (inclus) et page*articlesPerPage (exclus), affiche l'article
      // Sinon, cache l'article en mettant sa propriété display à 'none'
    });
    
    // Mettre à jour l'état actif de la pagination
    pagination.querySelectorAll('.page-item').forEach((li, i) => {
      // Parcourt chaque élément de pagination
      
      if (li.classList.contains('page-item') && !li.classList.contains('next')) {
        // Vérifie si l'élément est un bouton de page normale (pas un bouton "suivant")
        
        li.classList.toggle('active', (i+1) === page);
        // Active la classe 'active' sur le bouton correspondant à la page actuelle
        // Si i+1 (l'index du bouton + 1) correspond à la page actuelle, ajoute la classe 'active', sinon la retire
      }
    });
  }

  // Générer la pagination dynamiquement si besoin
  if (articles.length > 0 && pagination) {
    // Vérifie s'il y a des articles à afficher et si l'élément de pagination existe
    
    pagination.innerHTML = '';
    // Vide le contenu existant de l'élément de pagination
    
    for (let i = 1; i <= totalPages; i++) {
      // Crée un bouton pour chaque page, de 1 au nombre total de pages
      
      const li = document.createElement('li');
      // Crée un élément de liste pour contenir le bouton de pagination
      
      li.className = 'page-item' + (i === 1 ? ' active' : '');
      // Définit les classes CSS du bouton, ajoute 'active' si c'est la première page
      
      const a = document.createElement('a');
      // Crée un lien qui servira de bouton cliquable
      
      a.className = 'page-link';
      // Attribue la classe CSS 'page-link' au lien
      
      a.href = '#';
      // Définit l'attribut href à '#' pour éviter le comportement par défaut
      
      a.textContent = i;
      // Définit le texte du bouton au numéro de la page
      
      a.addEventListener('click', function(e) {
        // Ajoute un écouteur d'événement au clic sur le bouton
        
        e.preventDefault();
        // Empêche le comportement par défaut du lien (rafraîchissement de la page)
        
        currentPage = i;
        // Met à jour la variable currentPage avec le numéro de la page cliquée
        
        showPage(currentPage);
        // Appelle la fonction showPage pour afficher la page sélectionnée
      });
      
      li.appendChild(a);
      // Ajoute le lien à l'élément de liste
      
      pagination.appendChild(li);
      // Ajoute l'élément de liste au conteneur de pagination
    }
  }
  
  showPage(currentPage);
  // Affiche initialement la première page des articles

  // Boutons de défilement haut/bas
  // Cette section gère les boutons pour revenir en haut ou aller en bas de la page
  
  const backToTopBtn = document.getElementById('backToTopBtn');
  // Sélectionne le bouton pour revenir en haut de la page
  
  const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');
  // Sélectionne le bouton pour défiler jusqu'en bas de la page
  
  if (backToTopBtn) {
    // Vérifie si le bouton "retour en haut" existe
    
    backToTopBtn.addEventListener('click', function() {
      // Ajoute un écouteur d'événement au clic sur le bouton
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Fait défiler la fenêtre vers le haut de façon fluide (animation)
    });
  }
  
  if (scrollToBottomBtn) {
    // Vérifie si le bouton "défiler vers le bas" existe
    
    scrollToBottomBtn.addEventListener('click', function() {
      // Ajoute un écouteur d'événement au clic sur le bouton
      
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      // Fait défiler la fenêtre vers le bas de la page de façon fluide (animation)
      // document.body.scrollHeight représente la hauteur totale du contenu de la page
    });
  }
});