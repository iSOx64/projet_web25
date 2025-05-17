// Attend que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function() {
    // Initialise tous les diaporamas
    initSlideshows();
    
    // Initialise le compte à rebours
    initCountdown();
    
    // Initialise le défilement fluide pour la navigation
    initSmoothScrolling();
});

// Fonction pour initialiser les diaporamas
function initSlideshows() {
    // Sélectionne tous les conteneurs de diaporama
    const slideshowContainers = document.querySelectorAll('.slideshow-container, .sponsors-slideshow');
    
    // Pour chaque conteneur de diaporama
    slideshowContainers.forEach(container => {
        // Éléments du diaporama
        const track = container.querySelector('.slideshow-track, .sponsors-track');
        const slides = container.querySelectorAll('.slide, .sponsor-slide');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        const dotsContainer = container.querySelector('.dots');
        let currentIndex = 0;
        let slideInterval;
        
        // Crée les indicateurs de points (dots) si le conteneur existe
        if (dotsContainer) {
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
        }
        
        const dots = container.querySelectorAll('.dot');
        
        // Démarre le diaporama automatique
        startSlideshow();
        
        // Fonction pour aller à une diapositive spécifique
        function goToSlide(index) {
            // Réinitialise toutes les diapositives et points
            slides.forEach(slide => slide.classList.remove('active'));
            if (dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
            }
            
            // Définit la nouvelle diapositive et point actifs
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            if (dots.length > 0) {
                dots[currentSlide].classList.add('active');
            }
            
            // Met à jour la position de la piste
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Réinitialise le minuteur
            resetSlideshow();
        }
        
        // Fonction pour passer à la diapositive suivante
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextIndex);
        }
        
        // Fonction pour démarrer le défilement automatique
        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 5000); // Change de diapositive toutes les 5 secondes
        }
        
        // Fonction pour réinitialiser le minuteur
        function resetSlideshow() {
            clearInterval(slideInterval);
            startSlideshow();
        }
        
        // Écouteurs d'événements pour les boutons
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', () => {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevIndex);
        });
        
        // Met en pause au survol 
        container.addEventListener('mouseenter', () => clearInterval(slideInterval));
        container.addEventListener('mouseleave', startSlideshow);
    });
}

// Fonction pour initialiser le compte à rebours
function initCountdown() {
    // Date du tournoi (21 décembre 2025)
    const tournamentDate = new Date('December 21, 2025 00:00:00').getTime();
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    // Fonction pour mettre à jour le compte à rebours
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = tournamentDate - now;
        
        // Calculs du temps restant
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Met à jour le DOM
        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        
        // Si le compte à rebours est terminé
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-timer').innerHTML = '<div class="tournament-begun">The tournament has begun!</div>';
        }
    }
    
    // Mise à jour initiale
    updateCountdown();
    
    // Met à jour toutes les secondes
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Fonction pour initialiser le défilement fluide
function initSmoothScrolling() {
    // Sélectionne tous les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcule la hauteur de l'en-tête pour le décalage
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                
                // Défilement fluide vers la cible
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// Initialize slideshow and team sections when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Team page specific initializations
    if (document.querySelector('.team-slideshow')) {
        initSlideshow();
        initTeamSections();
    }
    
    // Other common initializations
    initCountdown();
    initBackToTop();
    initStickyHeader();
    initTeamSearch();
});
<<<<<<< HEAD
=======

// Initialize the team slideshow
function initSlideshow() {
    const slideshow = document.querySelector('.team-slideshow');
    const navContainer = document.createElement('div');
    navContainer.className = 'slide-nav';
    
    teams.forEach((team, index) => {
        // Create slide container
        const slide = document.createElement('div');
        slide.className = `team-slide ${index === 0 ? 'active' : ''}`;
        
        // Create image element (instead of background image)
        const img = document.createElement('img');
        img.className = 'team-slide-image';
        img.src = team.background;
        img.alt = `${team.name} Team`;
        img.loading = 'lazy';
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'slide-overlay';
        overlay.innerHTML = `
            <h2 class="slide-title">${team.name}</h2>
            <p>${team.subtitle}</p>
            <a href="#${team.id}" class="btn btn-primary mt-3">Read More</a>
        `;
        
        slide.appendChild(img);
        slide.appendChild(overlay);
        slideshow.appendChild(slide);
        
        // Create nav button
        const navBtn = document.createElement('button');
        navBtn.className = `slide-nav-btn ${index === 0 ? 'active' : ''}`;
        navBtn.dataset.slide = index;
        navContainer.appendChild(navBtn);
    });
    
    slideshow.appendChild(navContainer);
    
    // Set up slide navigation
    const slides = document.querySelectorAll('.team-slide');
    const navButtons = document.querySelectorAll('.slide-nav-btn');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        slides[index].classList.add('active');
        navButtons[index].classList.add('active');
        currentSlide = index;
    }
    
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

// Initialize all team sections
function initTeamSections() {
    const container = document.getElementById('teams-container');
    
    teams.forEach(team => {
        const section = document.createElement('section');
        section.className = 'team-section';
        section.id = team.id;
        section.setAttribute('data-aos', 'fade-up');
        
        section.innerHTML = `
            <div class="container">
                <div class="team-header">
                    <img src="${team.flag}" alt="${team.name} Flag" class="team-flag">
                    <h2 class="team-name">${team.name}</h2>
                    <p class="team-subtitle">${team.subtitle}</p>
                </div>
                
                <div class="team-content">
                    <div class="team-history">
                        <p>${team.history}</p>
                    </div>
                    
                    <div class="team-stats">
                        <div class="stat-item">
                            <div class="stat-number">${team.stats.appearances}</div>
                            <div class="stat-label">Appearances</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${team.stats.firstParticipation}</div>
                            <div class="stat-label">First Participation</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${team.stats.bestResult}</div>
                            <div class="stat-label">Best Result</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${team.stats.lastParticipation}</div>
                            <div class="stat-label">Last Participation</div>
                        </div>
                    </div>
                    
      <div class="video-container">
        <iframe 
            src="https://www.youtube.com/embed/${extractYouTubeId(team.video)}?autoplay=1&mute=1&modestbranding=1&rel=0&enablejsapi=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
                    
                    <div class="discover-more">
                        <a href="${team.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary">
                        Discover More About ${team.name}
                    </a>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(section);
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');
    
    // Back to top function
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll to bottom function
    scrollToBottomBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
    
    // Show/hide buttons based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
        
        // Optional: Hide scroll-to-bottom button when near bottom
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
            scrollToBottomBtn.style.display = 'none';
        } else {
            scrollToBottomBtn.style.display = 'flex';
        }
    });
});
// Add this helper function to extract YouTube ID from any URL format
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}
>>>>>>> d317c5be0e9065d33607d5f76bb29083d9f74a4e
