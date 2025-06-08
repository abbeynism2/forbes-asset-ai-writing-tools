document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Create mobile menu content
    mobileMenu.innerHTML = `
        <div class="flex justify-end mb-8">
            <button class="text-gray-600 hover:text-black">
                <i class="fas fa-times text-xl"></i>
            </button>
        </div>
        <div class="flex flex-col space-y-6">
            <a href="#" class="text-xl text-gray-600 hover:text-black">Home</a>
            <a href="#how-it-works" class="text-xl text-gray-600 hover:text-black">How it works</a>
            <a href="#testimonials" class="text-xl text-gray-600 hover:text-black">Our Dream</a>
            <a href="#download" class="text-xl bg-black text-white px-6 py-2 rounded-full text-center">Download now →</a>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close mobile menu
    const closeButton = mobileMenu.querySelector('button');
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Section animations on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Feature card hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });

    // Add custom button effects
    document.querySelectorAll('a[href], button').forEach(button => {
        button.classList.add('custom-button');
    });

    // Handle download buttons
    document.querySelectorAll('a[href="#download"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your download logic here
            console.log('Download button clicked');
        });
    });

    // Add star rating functionality
    document.querySelectorAll('.star-rating').forEach(container => {
        const rating = parseInt(container.dataset.rating) || 5;
        container.innerHTML = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    });

    // Error handling
    window.onerror = function(msg, url, lineNo, columnNo, error) {
        console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
        return false;
    };

    // Add loading animation to images
    document.querySelectorAll('img').forEach(img => {
        img.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        img.addEventListener('load', function() {
            this.classList.remove('opacity-0');
        });
    });

    // Initialize any tooltips
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-black text-white px-2 py-1 rounded text-sm -mt-8 left-1/2 transform -translate-x-1/2';
            tooltip.textContent = this.dataset.tooltip;
            this.appendChild(tooltip);
        });

        element.addEventListener('mouseleave', function(e) {
            const tooltip = this.querySelector('.absolute');
            if (tooltip) tooltip.remove();
        });
    });
});
