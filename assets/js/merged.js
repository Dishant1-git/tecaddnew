// Click-based interactive section (click-services-section)
document.addEventListener('DOMContentLoaded', function() {
  const clickMenuItems = document.querySelectorAll('.click-menu-item');
  const clickContentBlocks = document.querySelectorAll('.click-content-block');
  clickMenuItems.forEach(item => {
    item.addEventListener('click', function() {
      clickMenuItems.forEach(i => i.classList.remove('active'));
      clickContentBlocks.forEach(c => c.classList.remove('active'));
      item.classList.add('active');
      const target = document.getElementById(item.dataset.target);
      if (target) target.classList.add('active');
    });
  });
});
// JS for transformation section (banner.html)
const words = ["TRANSFORMATION", "INNOVATION", "EXCELLENCE"];
const images = [
  document.getElementById("img1"),
  document.getElementById("img2"),
  document.getElementById("img3")
];
const wordSpan = document.getElementById("changingWord");
let index = 0;
if (wordSpan && images.length) {
  setInterval(() => {
    index = (index + 1) % words.length;
    wordSpan.style.transform = "translateY(-100%)";
    setTimeout(() => {
      wordSpan.textContent = words[index];
      wordSpan.style.transform = "translateY(0)";
    }, 300);
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
  }, 3000);
}

// JS for FAQ accordion (faq.html)
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  const header = item.querySelector(".faq-header");
  if (header) {
    header.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        faqItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      }
    });
  }
});

// JS for hoversection.html (menu hover)
const menuItems = document.querySelectorAll(".menu-item");
const contentBlocks = document.querySelectorAll(".content-block");
menuItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    contentBlocks.forEach(c => c.classList.remove("active"));
    item.classList.add("active");
    const target = document.getElementById(item.dataset.target);
    if (target) target.classList.add("active");
  });
});

// JS for sticky2.html (smooth scroll)
const skipBtn = document.querySelector('#skipBtn');
if (skipBtn) {
  skipBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}


//new js 

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced Tab Switching with Smooth Animations
    const categoryTabs = document.querySelectorAll('.category-tab');
    const techMarquees = document.querySelectorAll('.tech-marquee');

    // Intersection observer for marquees (optional, for performance)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            } else {
                entry.target.style.animationPlayState = 'paused';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.marquee-track').forEach(track => {
        observer.observe(track);
    });

    // Tab interaction
    categoryTabs.forEach(tab => {
        tab.addEventListener('mouseenter', function() {
            switchCategory(this.dataset.category);
        });
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            switchCategory(this.dataset.category);
        });
        tab.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                switchCategory(this.dataset.category);
            }
        });
        tab.setAttribute('tabindex', '0');
        tab.setAttribute('role', 'button');
        tab.setAttribute('aria-pressed', 'false');
    });

    function switchCategory(category) {
        // Remove active state from all tabs
        categoryTabs.forEach(tab => {
            tab.classList.remove('active');
            tab.setAttribute('aria-pressed', 'false');
            tab.style.transform = 'translateY(0)';
        });
        // Add active state to selected tab
        const activeTab = document.querySelector('.category-tab[data-category="' + category + '"]');
        if (activeTab) {
            activeTab.classList.add('active');
            activeTab.setAttribute('aria-pressed', 'true');
        }
        // Hide all marquees (tech card containers)
        techMarquees.forEach(marquee => {
            marquee.style.opacity = '0';
            marquee.style.transform = 'translateY(20px)';
            setTimeout(() => {
                marquee.style.display = 'none';
                marquee.classList.remove('active');
            }, 200);
        });
        // Show target marquee (tech card container)
        const targetMarquee = document.querySelector('.tech-marquee[data-category="' + category + '"]');
        if (targetMarquee) {
            setTimeout(() => {
                targetMarquee.style.display = 'block';
                targetMarquee.classList.add('active');
                // Trigger reflow
                targetMarquee.offsetHeight;
                targetMarquee.style.opacity = '1';
                targetMarquee.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    // Enhanced card interactions
    document.querySelectorAll('.tech-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        card.addEventListener('click', function() {
            // Ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                width: 100px;
                height: 100px;
                left: 50%;
                top: 50%;
                margin-left: -50px;
                margin-top: -50px;
            `;
            this.style.position = 'relative';
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple and float keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .tech-card:hover {
            animation: float 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);

    // Performance optimization: Reduce animation on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
        document.querySelectorAll('.marquee-track').forEach(track => {
            track.style.animationDuration = '60s';
        });
    }

    // Add smooth scroll behavior for navigation
    if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
});

        // Preload images for better performance
        window.addEventListener('load', function() {
            const imageUrls = [
                'https://upload.wikimedia.org/wikipedia/commons/7/7e/Kotlin-logo.svg',
                'https://upload.wikimedia.org/wikipedia/commons/9/9a/Swift_logo.svg',
                'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
                'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
                'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
                'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
                'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            ];

            imageUrls.forEach(url => {
                const img = new Image();
                img.src = url;
            });
        });