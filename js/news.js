// Initialisation de la bibliothèque AOS pour les animations
// Définition du nombre d'articles à afficher par page
const articlesPerPage = 3; // Déclare une constante qui limite le nombre d'articles affichés à 3 par page pour la pagination

// Tableau contenant tous les articles à afficher sur la page news
const newsArticles = [ // Déclare un tableau constant qui contient tous les articles d'actualités sous forme d'objets
  {
    id: 1, // Identifiant unique de l'article
    title: "MATCH FACTS: Winner-takes-all battle between Tunisia and Morocco in Group B", // Titre de l'article
    category: "U20 AFCON Group B", // Catégorie de l'article pour le filtrage
    date: "May 6, 2025", // Date de publication de l'article
    author: "CAF Media", // Auteur de l'article
    image: "img1.webp", // Nom du fichier image associé à l'article
    summary: "Tunisia and Morocco face off at the Suez Canal Stadium in a decisive Group B clash. The outcome could determine the group winner and qualification for the knockout stages. Morocco only need a draw, while Tunisia must win or hope to be among the best third-placed teams.", // Résumé du contenu de l'article
    dataCategory: "tournament" // Attribut pour le filtrage par catégorie principale
  },
  {
    id: 2, // Identifiant unique du deuxième article
    title: "Last gasp penalty sends Zambia past Tanzania in dramatic Group A Clash", // Titre du deuxième article
    category: "U20 AFCON Group A", // Catégorie du deuxième article
    date: "May 6, 2025", // Date de publication
    author: "CAF Media", // Auteur
    image: "img2.webp", // Nom du fichier image
    summary: "Zambia snatched a dramatic 1-0 victory over Tanzania in Ismailia thanks to a last-minute penalty by Joseph Sabobo. The result puts Zambia second in the group, while Tanzania remain bottom.", // Résumé
    dataCategory: "tournament" // Attribut de catégorie principale
  },
  {
    id: 3, // Identifiant unique du troisième article
    title: "MATCH FACTS: Nigeria face eliminated Kenya in final Group B game at TotalEnergies CAF U20 AFCON", // Titre
    category: "U20 AFCON Group B", // Catégorie
    date: "May 5, 2025", // Date
    author: "CAF Media", // Auteur
    image: "img3.webp", // Image
    summary: "Nigeria and Kenya meet in Cairo for their final Group B match. Nigeria need a point to progress, while Kenya look to end on a high after two defeats.", // Résumé
    dataCategory: "tournament" // Catégorie principale
  },
  {
    id: 4, // Identifiant unique du quatrième article
    title: "Makanza brace fires DR Congo to 3-1 triumph over Central African Republic", // Titre
    category: "U20 AFCON Group C", // Catégorie
    date: "May 5, 2025", // Date
    author: "CAF Media", // Auteur
    image: "img4.webp", // Image
    summary: "Noah Makanza scored twice as DR Congo came from behind to beat Central African Republic 3-1 in Suez, boosting their hopes of reaching the knockout stage.", // Résumé
    dataCategory: "tournament" // Catégorie principale
  },
  {
    id: 5, // Identifiant unique du cinquième article
    title: "TotalEnergies CAF U-20 AFCON: Ghana edge Senegal in tightly contested duel", // Titre
    category: "U20 AFCON Group C", // Catégorie
    date: "May 5, 2025", // Date
    author: "CAF Media", // Auteur
    image: "img5.webp", // Image
    summary: "Ghana moved into second place in Group C after a crucial 1-0 win over reigning champions Senegal, thanks to an early goal from Emmanuel Mensah.", // Résumé
    dataCategory: "tournament" // Catégorie principale
  },
  {
    id: 6, // Identifiant unique du sixième article
    title: "Tightly contested Morocco Nigeria duel ends goalless", // Titre
    category: "U20 AFCON Group C", // Catégorie
    date: "May 4, 2025", // Date
    author: "CAF Media", // Auteur
    image: "img6.webp", // Image
    summary: "Morocco and Nigeria played out a goalless draw in a physical and tactical Group C encounter, leaving both teams' qualification hopes to be decided in the final round.", // Résumé
    dataCategory: "tournament" // Catégorie principale
  },
  {
    id: 7, // Identifiant unique du septième article
    title: "Egypt held by Zambia as Group A remains wide open at U20 AFCON", // Titre
    category: "U20 AFCON Group A", // Catégorie
    date: "May 3, 2025", // Date
    author: "CAF Media", // Auteur
    image: "img7.webp", // Image
    summary: "Hosts Egypt were held to a goalless draw by Zambia in Ismailia, leaving Group A wide open ahead of the final round of matches.", // Résumé
    dataCategory: "tournament" // Catégorie principale
  },
  {
    id: 8, // Identifiant unique du huitième article
    title: "Morocco fight back to claim dramatic victory over Kenya", // Titre
    category: "U20 AFCON Group B", // Catégorie
    date: "May 1, 2025", // Date
    author: "CAF Media", // Auteur
    image: "img8.webp", // Image
    summary: "Morocco came from behind twice to defeat Kenya 3-2 in a thrilling Group B opener, with goals from Zabiri (2) and Laalaoui.", // Résumé
    dataCategory: "tournament" // Catégorie principale
  },
  {
    id: 9, // Identifiant unique du neuvième article
    title: "Infrastructures et Villes Hôtes", // Titre en français
    category: "Organisation", // Catégorie différente (Organisation au lieu de groupe)
    date: "April 18, 2025", // Date
    author: "CAF Media", // Auteur
    image: "img9.webp", // Image
    summary: "Le tournoi se déroulera dans 9 stades répartis sur 6 villes marocaines. Plus de 120 projets d'infrastructure sont en cours pour moderniser les installations sportives et logistiques.", // Résumé en français
    dataCategory: "tournament" // Catégorie principale
  },
  {
    id: 10, // Identifiant unique du dixième article
    title: "CAF Unveils Full Match Schedule for Morocco 2025 Africa Cup of Nations", // Titre
    category: "Organisation", // Catégorie
    date: "31 January 2025", // Date au format différent
    author: "CAF Media", // Auteur
    image: "img10.jpg", // Image avec extension .jpg au lieu de .webp
    summary: "CAF has released the full match schedule for the 2025 Africa Cup of Nations in Morocco, with 52 matches across six cities from December 21, 2025, to January 18, 2026. The tournament opens with Morocco vs Comoros in Rabat and concludes with the final at the Prince Moulay Abdellah Sports Complex.", // Résumé plus long
    dataCategory: "tournament" // Catégorie principale
  },
]; // Fin du tableau d'articles

// Fonction pour afficher les articles d'une page donnée, avec filtre et recherche
function displayNews(page = 1, filter = 'all', searchTerm = '') { // Définit une fonction avec 3 paramètres (page courante, filtre, terme de recherche) avec des valeurs par défaut
  let filteredArticles = newsArticles; // On commence avec tous les articles dans une variable modifiable
  if (filter !== 'all') { // Vérifie si un filtre spécifique est appliqué (différent de 'all')
    // Si un filtre est appliqué, on ne garde que les articles de cette catégorie
    filteredArticles = filteredArticles.filter(article => article.dataCategory === filter); // Filtre les articles selon leur dataCategory
  }
  if (searchTerm) { // Vérifie si un terme de recherche est fourni
    // Si une recherche est effectuée, on filtre selon le titre ou le résumé
    filteredArticles = filteredArticles.filter(article => // Filtre à nouveau le tableau en fonction du terme de recherche
      article.title.toLowerCase().includes(searchTerm) || // Vérifie si le titre contient le terme de recherche (insensible à la casse)
      article.summary.toLowerCase().includes(searchTerm) // Vérifie si le résumé contient le terme de recherche (insensible à la casse)
    );
  }
  // Calcul de l'index de début et de fin pour la pagination
  const start = (page - 1) * articlesPerPage; // Calcule l'index du premier article à afficher sur la page courante
  const end = start + articlesPerPage; // Calcule l'index du dernier article à afficher sur la page courante
  // Sélection des articles à afficher sur la page courante
  const articlesToShow = filteredArticles.slice(start, end); // Extrait un sous-ensemble du tableau filtré pour la page courante

  // Sélection du conteneur HTML où afficher les articles
  const newsGrid = document.getElementById('news-grid'); // Récupère l'élément HTML avec l'id 'news-grid'
  // Génération du HTML pour chaque article à afficher
  newsGrid.innerHTML = articlesToShow.map(article => `<!-- Transforme chaque article en HTML et assigne le résultat à innerHTML du conteneur-->
    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-category="${article.dataCategory}"> <!--Crée un div avec des classes Bootstrap et des attributs pour AOS et filtrage-->
      <div class="card news-card h-100"> <!-- Crée une carte Bootstrap de hauteur 100%-->
        <img src="img/news/${article.image}" class="card-img-top" alt="${article.title}" loading="lazy"> <!--Ajoute l'image de l'article avec chargement différé-->
        <div class="card-body"> <!--Corps de la carte contenant le contenu textuel-->
          <span class="badge bg-primary mb-2">${article.category}</span> <!--Badge affichant la catégorie de l'article-->
          <small class="text-muted">${article.date}</small> <!-- Affiche la date de publication en petit texte grisé-->
          <h5 class="card-title">${article.title}</h5> <!--Titre de l'article en h5-->
          <p class="card-text">${article.summary}</p> <!--Résumé de l'article en paragraphe-->
          <a href="news-detail.html?id=${article.id}&title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(article.category)}&date=${encodeURIComponent(article.date)}&author=${encodeURIComponent(article.author)}&image=${encodeURIComponent(article.image)}" class="btn btn-link p-0">Read More <i class="fas fa-arrow-right ms-1"></i></a> <!--Lien vers la page détaillée avec paramètres URL encodés-->
        </div>
      </div>
    </div>
  `).join(''); // Convertit le tableau de chaînes HTML en une seule chaîne
  // Mise à jour de la pagination
  updatePagination(page, filteredArticles.length, filter, searchTerm); // Appelle la fonction de mise à jour de la pagination avec les paramètres actuels
  // Rafraîchit les animations AOS
  AOS.refresh(); // Actualise les animations AOS après modification du DOM
}

// Fonction pour générer dynamiquement la pagination
function updatePagination(currentPage, totalArticles, filter, searchTerm) { // Définit une fonction avec 4 paramètres pour mettre à jour la pagination
  const totalPages = Math.ceil(totalArticles / articlesPerPage); // Calcul du nombre total de pages (arrondi au supérieur)
  const pagination = document.querySelector('.pagination'); // Sélection du conteneur de pagination dans le DOM
  if (!pagination) return; // Si pas de pagination, on quitte la fonction immédiatement
  let html = ''; // Initialise une chaîne vide pour construire le HTML de pagination
  // Génération des boutons de page
  for (let i = 1; i <= totalPages; i++) { // Boucle pour créer un bouton pour chaque page
    html += ` <!-- Concatène le HTML pour chaque bouton de page-->
      <li class="page-item${i === currentPage ? ' active' : ''}"> <!--Élément de liste avec classe 'active' pour la page courante-->
        <a class="page-link" href="#" data-page="${i}">${i}</a> <!--Lien de page avec attribut data-page-->
      </li>
    `;
  }
  // Ajout du bouton suivant si besoin
  if (currentPage < totalPages) { // Vérifie si on n'est pas à la dernière page
    html += ` <!-- Ajoute un bouton "suivant" si ce n'est pas la dernière page-->
      <li class="page-item"> <!--Élément de liste pour le bouton suivant-->
        <a class="page-link" href="#" data-page="${currentPage + 1}" aria-label="Next page"> <!--Lien vers la page suivante avec attributs d'accessibilité-->
          <span aria-hidden="true">&raquo;</span> <!-- Flèche droite pour indiquer "page suivante"-->
        </a>
      </li>
    `;
  }
  // Injection du HTML dans la pagination
  pagination.innerHTML = html; // Remplace le contenu du conteneur de pagination par le HTML généré
  // Ajout des événements de clic sur chaque bouton de page
  pagination.querySelectorAll('a.page-link').forEach(link => { // Parcourt tous les liens de pagination
    link.onclick = function(e) { // Attache un gestionnaire d'événements click à chaque lien
      e.preventDefault(); // Empêche le comportement par défaut du lien (rechargement de la page)
      displayNews(Number(this.dataset.page), filter, searchTerm); // Affiche la page sélectionnée en convertissant data-page en nombre
    };
  });
}

// Initialisation au chargement de la page
// Ajout des événements pour les filtres et la recherche

document.addEventListener('DOMContentLoaded', function() { // Attache un écouteur d'événement au chargement complet du DOM
  AOS.init({ duration: 800, once: true }); // Initialisation de la bibliothèque d'animation AOS avec options
  let currentFilter = 'all'; // Définit le filtre courant à 'all' (toutes les catégories) par défaut
  let currentSearch = ''; // Initialise le terme de recherche courant à une chaîne vide
  displayNews(1); // Affiche la première page d'articles au chargement

  // Fonctionnalité des filtres de catégorie
  document.querySelectorAll('.news-filters button').forEach(button => { // Parcourt tous les boutons de filtre
    button.addEventListener('click', function() { // Attache un gestionnaire d'événements click à chaque bouton
      document.querySelectorAll('.news-filters button').forEach(btn => btn.classList.remove('active')); // Retire la classe 'active' de tous les boutons
      this.classList.add('active'); // Ajoute la classe 'active' au bouton cliqué
      currentFilter = this.getAttribute('data-filter'); // Met à jour le filtre courant avec la valeur de l'attribut data-filter
      displayNews(1, currentFilter, currentSearch); // Affiche la première page avec le nouveau filtre et la recherche courante
    });
  });

  // Fonctionnalité de la recherche
  const searchForm = document.querySelector('.search-form'); // Sélectionne le formulaire de recherche
  if (searchForm) { // Vérifie si le formulaire existe dans le DOM
    searchForm.addEventListener('submit', function(e) { // Attache un gestionnaire d'événements submit au formulaire
      e.preventDefault(); // Empêche l'envoi normal du formulaire
      currentSearch = this.querySelector('input').value.toLowerCase(); // Récupère la valeur du champ de recherche et la convertit en minuscules
      displayNews(1, currentFilter, currentSearch); // Affiche la première page avec le filtre courant et le nouveau terme de recherche
    });
  }
});