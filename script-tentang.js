// ===== Scroll reveal animasi =====
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');
  if(prefersReduced || !('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('revealed'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  items.forEach(el => observer.observe(el));

  // Stagger timeline items sedikit biar muncul berurutan
  document.querySelectorAll('.timeline-item.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.1) + 's';
  });
})();

