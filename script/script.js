// Ajoute/retire la classe "active" lors du clic sur l'icône du menu hamburger
var navToggle = document.querySelector('.nav-toggle');
var navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});
