function sendWA() {
  var nom = document.getElementById('f-nom').value.trim();
  var tel = document.getElementById('f-tel').value.trim();
  var msg = document.getElementById('f-msg').value.trim();
  var loc = document.getElementById('f-loc').value.trim();

  if (!nom && !tel && !msg) { alert('Remplis au moins un champ !'); return; }

  var txt = 'Bonjour Anwer Delivery! 👋%0A%0A'
    + '👤 Nom: ' + encodeURIComponent(nom || 'Non précisé') + '%0A'
    + '📞 Téléphone: ' + encodeURIComponent(tel || 'Non précisé') + '%0A'
    + '📦 Commande: ' + encodeURIComponent(msg || 'Non précisé') + '%0A'
    + '📍 Localisation: ' + encodeURIComponent(loc || 'Non précisé');

  window.open('https://wa.me/212633812010?text=' + txt, '_blank');
}