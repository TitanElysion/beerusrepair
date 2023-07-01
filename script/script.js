/* // Afficher ou masquer le bouton "Retour en haut" en fonction de la position de la page
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  
  // Faire défiler la page jusqu'en haut lorsque le bouton "Retour en haut" est cliqué
  document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
   */

  