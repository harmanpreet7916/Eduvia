/* script.js */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

// Smooth scrolling for navbar links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Auto-scroll testimonials
const testimonialContainer = document.querySelector('.testimonial-cards');
setInterval(() => {
  testimonialContainer.scrollBy({ left: testimonialContainer.offsetWidth, behavior: 'smooth' });
  if (testimonialContainer.scrollLeft + testimonialContainer.offsetWidth >= testimonialContainer.scrollWidth) {
    testimonialContainer.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 1000);
