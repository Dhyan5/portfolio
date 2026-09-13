const revealItems = document.querySelectorAll('.section-label, .section-heading, .project, .about-copy, .about-aside, .experience-entry, .contact-content');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.classList.add('reveal');
  item.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`);
  revealObserver.observe(item);
});

document.querySelector('.hero').classList.add('hero-ready');
