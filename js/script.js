/* ===== WHATSAPP FORM ===== */
function sendWA() {
  var nom = document.getElementById('f-nom').value.trim();
  var tel = document.getElementById('f-tel').value.trim();
  var msg = document.getElementById('f-msg').value.trim();
  var loc = document.getElementById('f-loc').value.trim();

  if (!nom && !tel && !msg) { alert('Remplis au moins un champ !'); return; }

  var txt = 'Bonjour Anouar Delivery! 👋%0A%0A'
    + '👤 Nom: ' + encodeURIComponent(nom || 'Non précisé') + '%0A'
    + '📞 Téléphone: ' + encodeURIComponent(tel || 'Non précisé') + '%0A'
    + '📦 Commande: ' + encodeURIComponent(msg || 'Non précisé') + '%0A'
    + '📍 Localisation: ' + encodeURIComponent(loc || 'Non précisé');

  window.open('https://wa.me/212633812010?text=' + txt, '_blank');
}

/* ===== HERO SLIDER ===== */
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var autoTimer;

function goSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() { goSlide(currentSlide + 1); }
function prevSlide() { goSlide(currentSlide - 1); }

function startAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(nextSlide, 5500);
}

// Slider yebqa yedour dima — ma yewqefch

startAuto();


var galleryObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('gi-in');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.gallery-item').forEach(function(el) {
  galleryObserver.observe(el);
});

/* ===== year footr ===== */

 document.getElementById("year").textContent = new Date().getFullYear();