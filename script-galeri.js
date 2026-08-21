var galleryImages = Array.prototype.map.call(document.querySelectorAll('.galeri-card img'), function(img){ return img.src; });
var currentIndex = 0;

function openLightbox(idx){
  currentIndex = idx;
  const img = document.getElementById('lightboxImg');
  img.src = galleryImages[currentIndex];
  document.getElementById('lightboxOverlay').classList.add('active');
}
function closeLightbox(){
  document.getElementById('lightboxOverlay').classList.remove('active');
}
function switchTo(idx){
  const img = document.getElementById('lightboxImg');
  img.classList.add('switching');
  setTimeout(() => {
    currentIndex = idx;
    img.src = galleryImages[currentIndex];
    img.classList.remove('switching');
  }, 140);
}
function showNext(){
  switchTo((currentIndex + 1) % galleryImages.length);
}
function showPrev(){
  switchTo((currentIndex - 1 + galleryImages.length) % galleryImages.length);
}
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowRight') showNext();
  if(e.key === 'ArrowLeft') showPrev();
});

// ===== Scroll reveal untuk kartu galeri =====
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = document.querySelectorAll('.galeri-card');
  if(prefersReduced || !('IntersectionObserver' in window)){
    cards.forEach(c => c.classList.add('revealed'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  cards.forEach(c => observer.observe(c));
})();

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


// ===== Placeholder tombol Login (belum berfungsi, admin panel akan datang) =====
(function(){
  const btn = document.getElementById("loginPlaceholderBtn");
  if(!btn) return;
  btn.addEventListener("click", () => {
    let msg = document.getElementById("loginSoonMsg");
    if(!msg){
      msg = document.createElement("div");
      msg.id = "loginSoonMsg";
      msg.textContent = "🔒 Fitur login admin akan segera hadir";
      msg.style.cssText = "position:fixed; top:74px; right:16px; left:auto; max-width:90vw; background:#0B2A44; color:#fff; padding:11px 18px; border-radius:11px; font-size:13px; font-weight:600; z-index:999; box-shadow:0 10px 26px rgba(0,0,0,0.22); opacity:0; transition:opacity .25s ease; pointer-events:none;";
      document.body.appendChild(msg);
    }
    msg.style.opacity = "1";
    clearTimeout(window._loginMsgTimer);
    window._loginMsgTimer = setTimeout(() => { msg.style.opacity = "0"; }, 2400);
  });
})();

