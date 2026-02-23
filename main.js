// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 100, // Offset for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Simple Navbar transparency change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(17, 17, 17, 0.95)';
    navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
  } else {
    navbar.style.background = 'rgba(17, 17, 17, 0.8)';
    navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
  }
});
