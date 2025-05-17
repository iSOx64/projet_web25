document.addEventListener('DOMContentLoaded', function() {
    // Initialize all slideshows
    initSlideshows();
    
    // Initialize countdown
    initCountdown();
    
    // Smooth scrolling for navigation
    initSmoothScrolling();
});

function initSlideshows() {
    const slideshowContainers = document.querySelectorAll('.slideshow-container, .sponsors-slideshow');
    
    slideshowContainers.forEach(container => {
        const track = container.querySelector('.slideshow-track, .sponsors-track');
        const slides = container.querySelectorAll('.slide, .sponsor-slide');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        const dotsContainer = container.querySelector('.dots');
        let currentIndex = 0;
        let slideInterval;
        
        // Create dots if container exists
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
        
        // Start auto-scrolling
        startSlideshow();
        
        // Function to go to specific slide
        function goToSlide(index) {
            // Reset all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            if (dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
            }
            
            // Set new active slide and dot
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            if (dots.length > 0) {
                dots[currentSlide].classList.add('active');
            }
            
            // Update track position
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Reset timer
            resetSlideshow();
        }
        
        // Function to go to next slide
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextIndex);
        }
        
        // Function to start auto-scrolling
        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }
        
        // Function to reset timer
        function resetSlideshow() {
            clearInterval(slideInterval);
            startSlideshow();
        }
        
        // Event listeners for buttons
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', () => {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevIndex);
        });
        
        // Pause on hover (optional)
        container.addEventListener('mouseenter', () => clearInterval(slideInterval));
        container.addEventListener('mouseleave', startSlideshow);
    });
}

function initCountdown() {
    const tournamentDate = new Date('December 21, 2025 00:00:00').getTime();
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = tournamentDate - now;
        
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update DOM
        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        
        // If countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-timer').innerHTML = '<div class="tournament-begun">The tournament has begun!</div>';
        }
    }
    
    // Initial update
    updateCountdown();
    
    // Update every second
    const countdownInterval = setInterval(updateCountdown, 1000);
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                
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
