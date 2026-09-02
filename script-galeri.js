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

