/**
 * AFCON Morocco 2025 - Main JavaScript
 * This file contains all the JavaScript functionalities for the AFCON Morocco 2025 website
 */

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Countdown Timer
    initCountdown();
    
    // Back to top button
    initBackToTop();
    
    // Team search functionality
    initTeamSearch();
    
    // Sticky header
    initStickyHeader();
});

/**
 * Initialize countdown timer to tournament start date
 */
function initCountdown() {
    // Set the tournament start date (December 1, 2025)
    const tournamentStartDate = new Date('December 1, 2024 00:00:00').getTime();
    
    // Update the countdown every second
    const countdownTimer = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();
        
        // Calculate the time remaining
        const timeRemaining = tournamentStartDate - now;
        
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // Display the result in the countdown elements
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (daysElement && hoursElement && minutesElement && secondsElement) {
            daysElement.innerHTML = days.toString().padStart(3, '0');
            hoursElement.innerHTML = hours.toString().padStart(2, '0');
            minutesElement.innerHTML = minutes.toString().padStart(2, '0');
            secondsElement.innerHTML = seconds.toString().padStart(2, '0');
        }
        
        // If the countdown is finished, display a message
        if (timeRemaining < 0) {
            clearInterval(countdownTimer);
            if (daysElement && hoursElement && minutesElement && secondsElement) {
                daysElement.innerHTML = '000';
                hoursElement.innerHTML = '00';
                minutesElement.innerHTML = '00';
                secondsElement.innerHTML = '00';
            }
            
            // Display a message that the tournament has started
            const countdownContainer = document.querySelector('.countdown-container');
            if (countdownContainer) {
                countdownContainer.innerHTML = '<h3 class="text-white text-center">The Tournament Has Started!</h3>';
            }
        }
    }, 1000);
}

/**
 * Initialize back to top button functionality
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show back to top button when user scrolls down
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Initialize team search functionality
 */
function initTeamSearch() {
    const searchInput = document.getElementById('team-search');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const teamCards = document.querySelectorAll('.team-detailed-card');
            
            teamCards.forEach(function(card) {
                const teamName = card.querySelector('.team-name').textContent.toLowerCase();
                const teamContainer = card.parentElement;
                
                if (teamName.includes(searchTerm)) {
                    teamContainer.style.display = 'block';
                } else {
                    teamContainer.style.display = 'none';
                }
            });
        });
    }
}

/**
 * Initialize sticky header with transparent to solid transition
 */
function initStickyHeader() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.style.padding = '0.5rem 0';
                navbar.style.backgroundColor = 'rgba(28, 28, 28, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.backgroundColor = 'var(--dark)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

/**
 * Initialize image gallery with lightbox effect
 * Only executed on pages with gallery
 */
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length > 0) {
        galleryItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create lightbox elements
                const lightbox = document.createElement('div');
                lightbox.classList.add('lightbox');
                
                const lightboxContent = document.createElement('div');
                lightboxContent.classList.add('lightbox-content');
                
                const lightboxImage = document.createElement('img');
                lightboxImage.src = this.getAttribute('href');
                
                const closeButton = document.createElement('span');
                closeButton.classList.add('lightbox-close');
                closeButton.innerHTML = '&times;';
                
                // Append elements to the DOM
                lightboxContent.appendChild(lightboxImage);
                lightboxContent.appendChild(closeButton);
                lightbox.appendChild(lightboxContent);
                document.body.appendChild(lightbox);
                
                // Prevent scrolling when lightbox is open
                document.body.style.overflow = 'hidden';
                
                // Close lightbox when clicking close button or outside the image
                lightbox.addEventListener('click', function(e) {
                    if (e.target === lightbox || e.target === closeButton) {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = 'auto';
                    }
                });
            });
        });
    }
}

/**
 * Handle match fixture tabs 
 * For schedule page
 */
function initFixtureTabs() {
    const tabLinks = document.querySelectorAll('.fixture-tab-link');
    
    if (tabLinks.length > 0) {
        tabLinks.forEach(function(tabLink) {
            tabLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs
                tabLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show the corresponding tab content
                const tabId = this.getAttribute('href').substring(1);
                const tabContents = document.querySelectorAll('.fixture-tab-content');
                
                tabContents.forEach(function(content) {
                    if (content.id === tabId) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    }
}

/**
 * Initialize stadium information tabs
 * For stadium details page
 */
function initStadiumTabs() {
    const stadiumTabs = document.querySelectorAll('.stadium-tab');
    
    if (stadiumTabs.length > 0) {
        stadiumTabs.forEach(function(tab) {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs
                stadiumTabs.forEach(function(t) {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show the corresponding content
                const contentId = this.getAttribute('data-tab');
                const tabContents = document.querySelectorAll('.stadium-tab-content');
                
                tabContents.forEach(function(content) {
                    if (content.id === contentId) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    }
}

/**
 * Newsletter subscription form handler
 * Show success/error message on submission
 */
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Simple email validation
            if (email === '' || !isValidEmail(email)) {
                showFormMessage(this, 'Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (in a real application, this would be an AJAX call)
            showFormMessage(this, 'Thank you for subscribing!', 'success');
            emailInput.value = '';
        });
    }
});

/**
 * Show a success or error message after newsletter form submission
 * @param {HTMLElement} form - The form element
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function showFormMessage(form, message, type) {
    // Remove any existing message
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('form-message', type === 'success' ? 'text-success' : 'text-danger');
    messageElement.innerHTML = message;
    
    // Insert message after form
    form.appendChild(messageElement);
    
    // Remove message after 3 seconds
    setTimeout(function() {
        if (form.contains(messageElement)) {
            form.removeChild(messageElement);
        }
    }, 3000);
}

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @return {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}