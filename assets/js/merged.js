




    const slides = document.querySelectorAll(".slidee ");
const heading = document.getElementById("sliderHeading");

// Guarded slider: only run if required elements exist
if (slides && slides.length > 0 && heading) {
  let current = 0;
  const changeSlide = () => {
    // remove active if exists
    if (slides[current] && slides[current].classList)
      slides[current].classList.remove("is-active");

    // move to next
    current = (current + 1) % slides.length;

    // add active
    if (slides[current] && slides[current].classList)
      slides[current].classList.add("is-active");

    // update heading if dataset present
    if (slides[current] && slides[current].dataset && typeof slides[current].dataset.heading !== 'undefined') {
      heading.textContent = slides[current].dataset.heading;
    }
  };

  // Auto-change every 4 seconds
  setInterval(changeSlide, 4000);
}





// --- We Care Slider: 3 at a time, center wider, infinite, autoplay, responsive ---
document.addEventListener('DOMContentLoaded', function() {
  const sliderr = document.querySelector('.sliderr');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  if (!sliderr || !prev || !next) return;
  let current = 1;
  let autoInterval;

  function updateSlides() {
    const slides = sliderr.querySelectorAll('.slide');
    const total = slides.length;
    slides.forEach((slide, i) => {
      slide.classList.remove('left', 'center', 'right');
      slide.style.display = 'none';
    });
    // Calculate indices for left, center, right
    const left = (current - 1 + total) % total;
    const center = current % total;
    const right = (current + 1) % total;
    slides[left].classList.add('left');
    slides[left].style.display = '';
    slides[center].classList.add('center');
    slides[center].style.display = '';
    slides[right].classList.add('right');
    slides[right].style.display = '';
  }

  function goTo(dir) {
    const slides = sliderr.querySelectorAll('.slide');
    const total = slides.length;
    current = (current + dir + total) % total;
    updateSlides();
  }

  prev.addEventListener('click', function() {
    goTo(-1);
    resetAutoplay();
  });
  next.addEventListener('click', function() {
    goTo(1);
    resetAutoplay();
  });

  function startAutoplay() {
    autoInterval = setInterval(() => goTo(1), 3000);
  }
  function stopAutoplay() {
    clearInterval(autoInterval);
  }
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }
  sliderr.addEventListener('mouseenter', stopAutoplay);
  sliderr.addEventListener('mouseleave', startAutoplay);
  sliderr.addEventListener('touchstart', stopAutoplay, {passive:true});
  sliderr.addEventListener('touchend', startAutoplay, {passive:true});

  // Overlay play button
  sliderr.querySelectorAll('.overlay button').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const url = this.getAttribute('data-url');
      if (url) window.open(url, '_blank');
    });
  });

  updateSlides();
  startAutoplay();
});
// --- JS from index.html (navbar and responsive) ---
// Navbar toggle and dropdown
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownLinks = document.querySelectorAll('.nav-toggle-link');

// Toggle nav on mobile
if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Toggle dropdowns on mobile
dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      const parent = link.parentElement;
      const menu = parent.querySelector('.mega-menu');
      if (menu) menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
  });
});

// Responsive Navbar JS (secondary nav)
const btnm = document.querySelector('.btnm button');
const navLinks2 = document.querySelector('.nav-links');
if (btnm && navLinks2) {
  btnm.addEventListener('click', () => {
    navLinks2.classList.toggle('open');
  });
  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) navLinks2.classList.remove('open');
    });
  });
  // Dropdowns on click for mobile
  document.querySelectorAll('.has-dropdown').forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown')) {
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
      }
    });
  });
  // Close dropdowns when nav closes
  btnm.addEventListener('click', () => {
    if (!navLinks2.classList.contains('open')) {
      document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
    }
  });
}
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


// JS for transformation section (banner.html) - guarded
const words = ["TRANSFORMATION", "INNOVATION", "EXCELLENCE"];
const images = [
  document.getElementById("img1"),
  document.getElementById("img2"),
  document.getElementById("img3")
];
const wordSpan = document.getElementById("changingWord");
let index = 0;
if (wordSpan && images && images.some(img => img !== null)) {
  setInterval(() => {
    index = (index + 1) % words.length;
    if (wordSpan.style) wordSpan.style.transform = "translateY(-100%)";
    setTimeout(() => {
      if (wordSpan) {
        wordSpan.textContent = words[index];
        if (wordSpan.style) wordSpan.style.transform = "translateY(0)";
      }
    }, 300);
    images.forEach(img => { if (img && img.classList) img.classList.remove("active"); });
    if (images[index] && images[index].classList) images[index].classList.add("active");
  }, 3000);
}

// Animated Counters for .counter-box
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.counter-box h3');
  counters.forEach(counter => {
    const targetText = counter.textContent.trim();
    const target = parseInt(targetText.replace(/\D/g, ''));
    const plus = targetText.includes('+');
    let count = 0;
    const duration = 1800; // ms
    const step = Math.ceil(target / (duration / 16));
    function updateCounter() {
      count += step;
      if (count >= target) {
        counter.textContent = target + (plus ? '+' : '');
      } else {
        counter.textContent = count + (plus ? '+' : '');
        requestAnimationFrame(updateCounter);
      }
    }
    counter.textContent = '0' + (plus ? '+' : '');
    requestAnimationFrame(updateCounter);
  });
});
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



                //slider js (guarded)
                 (function(){
                   const slider = document.getElementById("slider");
                   if (!slider) return;
                   let currentIndex = 0;
                   const sections = slider.children;
                   const totalSections = sections.length || 0;

                   if (totalSections === 0) return;

                   // Clone first section if exists
                   if (sections[0]) {
                     const firstClone = sections[0].cloneNode(true);
                     slider.appendChild(firstClone);
                   }

                   function updateSlider() {
                     slider.style.transition = "transform 0.8s ease";
                     slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
                   }

                   // Auto slide
                   let autoSlide = setInterval(nextSlide, 3000);

                   function nextSlide() {
                     currentIndex++;
                     updateSlider();

                     if (currentIndex === totalSections) {
                       setTimeout(() => {
                         slider.style.transition = "none";
                         currentIndex = 0;
                         slider.style.transform = `translateX(0)`;
                         setTimeout(() => {
                           slider.style.transition = "transform 0.8s ease";
                         }, 50);
                       }, 800);
                     }
                   }

                   function prevSlide() {
                     if (currentIndex === 0) {
                       currentIndex = totalSections - 1;
                       slider.style.transition = "none";
                       slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
                       setTimeout(() => {
                         slider.style.transition = "transform 0.8s ease";
                       }, 50);
                     } else {
                       currentIndex--;
                       updateSlider();
                     }
                   }

                   // Buttons (guarded)
                   const nextBtn = document.getElementById("nextBtn");
                   const prevBtn = document.getElementById("prevBtn");
                   if (nextBtn) {
                     nextBtn.addEventListener("click", () => {
                       clearInterval(autoSlide);
                       nextSlide();
                       autoSlide = setInterval(nextSlide, 3000); // restart auto
                     });
                   }
                   if (prevBtn) {
                     prevBtn.addEventListener("click", () => {
                       clearInterval(autoSlide);
                       prevSlide();
                       autoSlide = setInterval(nextSlide, 3000); // restart auto
                     });
                   }
                 })();


/* Clocks script (same as before) */
function getTimePartsInTZ(tz) {
  // DST-safe: read HH, MM, SS using Intl parts
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: tz, hour12: false,
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }).formatToParts(new Date());

  const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
  return {
    h: parseInt(map.hour, 10),
    m: parseInt(map.minute, 10),
    s: parseInt(map.second, 10),
    str: `${map.hour}:${map.minute}:${map.second}`
  };
}

function setupHiDPICanvas(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const cssSize = { w: canvas.clientWidth, h: canvas.clientHeight };
  canvas.width  = Math.round(cssSize.w * dpr);
  canvas.height = Math.round(cssSize.h * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale to DPR
  return { ctx, size: cssSize };
}

/* ===== Drawing ===== */
function drawClock(canvas, tz, timeEl) {
  function render() {
    const { ctx, size } = setupHiDPICanvas(canvas);
    const r = Math.min(size.w, size.h) / 2;
    ctx.translate(r, r);

    // Clear
    ctx.clearRect(-r, -r, size.w, size.h);

    // Dial base
    ctx.beginPath();
    ctx.arc(0, 0, r - 1, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Blue double ring
    ctx.strokeStyle = '#2b7bdc';
    ctx.lineWidth = Math.max(4, r * 0.06);
    ctx.beginPath(); ctx.arc(0, 0, r - ctx.lineWidth/2 - 1, 0, Math.PI*2); ctx.stroke();
    ctx.lineWidth = Math.max(2, r * 0.03);
    ctx.beginPath(); ctx.arc(0, 0, r - 10 - ctx.lineWidth/2, 0, Math.PI*2); ctx.stroke();

    // Ticks
    for (let i = 0; i < 60; i++) {
      const angle = (i * Math.PI) / 30; // 6° per tick
      const isHour = i % 5 === 0;
      const len = isHour ? r * 0.12 : r * 0.06;
      ctx.save();
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -r + (isHour ? 12 : 8));
      ctx.lineTo(0, -r + (isHour ? 12 + len : 8 + len));
      ctx.lineWidth = isHour ? Math.max(2, r * 0.02) : Math.max(1, r * 0.01);
      ctx.strokeStyle = '#555';
      ctx.stroke();
      ctx.restore();
    }

    // Numbers 1..12
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${Math.round(r * 0.22)}px Arial`;
    for (let n = 1; n <= 12; n++) {
      const ang = (n * Math.PI) / 6;
      const nr = r * 0.70;
      const x = nr * Math.sin(ang);
      const y = -nr * Math.cos(ang);
      ctx.fillText(String(n), x, y);
    }

    // Time
    const t = getTimePartsInTZ(tz);
    const hour = t.h % 12;
    const minute = t.m;
    const second = t.s;

    // Angles
    const hourAng   = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60);
    const minuteAng = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    const secondAng = (second * Math.PI) / 30;

    // Hands
    function hand(angle, len, width, color = '#000') {
      ctx.save();
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();
      ctx.restore();
    }
    hand(hourAng,   r * 0.52, Math.max(4, r*0.06), '#000');     // hour
    hand(minuteAng, r * 0.78, Math.max(3, r*0.045), '#000');    // minute
    hand(secondAng, r * 0.86, Math.max(2, r*0.025), '#2b7bdc'); // second (blue)

    // Center cap
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.arc(0,0, Math.max(3, r*0.04), 0, Math.PI*2);
    ctx.fill();

    // Digital time
    document.getElementById(timeEl).textContent = t.str;
  }

  // first paint + tick
  render();
  // update every second
  return setInterval(render, 1000);
}

/* ===== Init all clocks ===== */
const timers = [];
// Only initialize clocks if corresponding canvas elements exist
['uae','usa','uk','sg','au'].forEach((id) => {
  const canvas = document.getElementById(id);
  if (canvas) {
    const tzMap = {
      'uae':'Asia/Dubai',
      'usa':'America/New_York',
      'uk':'Europe/London',
      'sg':'Asia/Singapore',
      'au':'Australia/Sydney'
    };
    const tz = tzMap[id];
    timers.push(drawClock(canvas, tz, id + '-time'));
  }
});

// Re-render at new sizes on resize
let resizeTO;
window.addEventListener('resize', () => {
  clearTimeout(resizeTO);
  resizeTO = setTimeout(() => {
    timers.forEach(id => clearInterval(id));
    // re-init with new CSS sizes
    timers.length = 0;
    ['uae','usa','uk','sg','au'].forEach((id) => {
      const canvas = document.getElementById(id);
      if (canvas) {
        const tzMap = {
          'uae':'Asia/Dubai',
          'usa':'America/New_York',
          'uk':'Europe/London',
          'sg':'Asia/Singapore',
          'au':'Australia/Sydney'
        };
        const tz = tzMap[id];
        timers.push(drawClock(canvas, tz, id + '-time'));
      }
    });
  }, 150);
});




  window.onload = function() {
      setTimeout(() => {
        var popupEl = document.getElementById("popupOverlay");
        if (popupEl) {
          popupEl.style.display = "flex";
        }
      }, 5000);
    };

    // Close popup on click (guarded)
    var closeBtn = document.getElementById("closePopup");
    if (closeBtn) {
      closeBtn.onclick = function() {
        var popupEl = document.getElementById("popupOverlay");
        if (popupEl) popupEl.style.display = "none";
      };
    }

// ...existing code...

/* Scroll progress bar and scroll-to-top button behavior */
(function() {
  // Wait for DOM to be ready (some pages may not include elements until later)
  function init() {
    var progressEl = document.getElementById('scroll-progress');
    var scrollBtn = document.getElementById('scrollToTop');
    if (!progressEl || !scrollBtn) return;

    var ticking = false;

    function update() {
      var scrollY = window.scrollY || window.pageYOffset;
      var docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      var winH = window.innerHeight || document.documentElement.clientHeight;
      var maxScroll = docH - winH;
      var pct = maxScroll > 0 ? Math.min(100, (scrollY / maxScroll) * 100) : 0;
      progressEl.style.width = pct + '%';

      // Adaptive show threshold: mobile devices should reveal the button earlier
      var show = false;
      try {
        var isMobileWidth = (window.innerWidth || document.documentElement.clientWidth) <= 600;
        if (isMobileWidth) {
          // On small screens, show after small scroll or a small percent scrolled
          var mobileScrollThresh = Math.min(100, Math.round(winH * 0.15));
          show = (scrollY > mobileScrollThresh) || (pct > 3);
        } else {
          // Desktop: keep original behaviour
          show = (pct > 15) || (scrollY > 300);
        }
      } catch (e) {
        show = (pct > 15) || (scrollY > 300);
      }

      if (show) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Smooth scroll to top easing
    function smoothScrollToTop(duration) {
      duration = duration || 600;
      var start = window.scrollY || window.pageYOffset;
      var startTime = performance.now();

      function ease(t) { return 1 - Math.pow(1 - t, 3); }

      function step(now) {
        var elapsed = now - startTime;
        var progress = Math.min(1, elapsed / duration);
        var val = Math.round(start * (1 - ease(progress)));
        window.scrollTo(0, val);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollToTop(600);
    });

    // Initialize
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


let expp=0

setInterval(()=>{
  if(expp<12){
    expp++
    const expEl = document.getElementById("exp");
    if (expEl) expEl.innerText = expp+"+";
  }
},300)

let served=0
setInterval(()=>{
  if(served<25){
    served++
    const servedEl = document.getElementById("cserved");
    if (servedEl) servedEl.innerText = served+"+";
  }
},200)


let tech=0
setInterval(()=>{
  if(tech<300){
    tech++
    const techEl = document.getElementById("techh");
    if (techEl) techEl.innerText = tech+"+";
  }
},2)




  function showContent(index) {
  
    const slides = [
      { img: 'assets/images/ai-image.jpg', title: 'AI', desc: 'Our AI helps create smarter apps with personalized recommendations, chatbots, and real-time decisions.' },
      { img: 'assets/images/artifical-intelligence.jpg', title: 'Gen AI', desc: 'Generative AI boosts app creativity, content automation, and intelligent interactions.' },
      { img: 'assets/images/ar-vr-1.webp', title: 'ML', desc: 'Machine learning helps your app learn from data, giving predictive analytics and automation.' },
      { img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=680&q=80', title: 'IoT', desc: 'IoT connects your app with real-world devices for data and automation.' },
      { img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=680&q=80', title: 'Cloud', desc: 'Cloud scales your app, ensuring global access and resilience.' }
    ];
    const slide = slides[index];
    document.getElementById('slider-img').src = slide.img;
    document.getElementById('slider-title').textContent = slide.title;
    document.getElementById('slider-desc').textContent = slide.desc;
  }
  // initialize first content active
  showContent(0);
