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
