// ===== Header shadow saat scroll =====
(function(){
  const header = document.querySelector("header");
  if(!header) return;
  const toggleShadow = () => {
    if(window.scrollY > 8){ header.classList.add("scrolled"); }
    else { header.classList.remove("scrolled"); }
  };
  toggleShadow();
  window.addEventListener("scroll", toggleShadow, { passive: true });
})();

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

// ===== Menu hamburger (mobile) =====
(function(){
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.querySelector("nav.links");
  if(!hamburgerBtn || !navLinks) return;

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("mobile-open");
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
  });

  document.addEventListener("click", (e) => {
    if(navLinks.classList.contains("mobile-open") && !navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)){
      navLinks.classList.remove("mobile-open");
    }
  });

  window.addEventListener("resize", () => {
    if(window.innerWidth > 900) navLinks.classList.remove("mobile-open");
  });
})();

