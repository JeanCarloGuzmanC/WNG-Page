let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("banner").style.top = "0";
  } else {
    document.getElementById("banner").style.top = "-115px"; /* Ajustar según el tamaño del banner */
  }
  prevScrollpos = currentScrollPos;
}

var sign_in = document.getElementById('sign_in');
// Agregar un evento de click al botón
sign_in.addEventListener('click', function() {
    // Redireccionar a otra página
    window.location.href = 'login-register-WNG/index.html';
  });

  var sign_up = document.getElementById('sign_up');
// Agregar un evento de click al botón
sign_up.addEventListener('click', function() {
    // Redireccionar a otra página
    window.location.href = 'login-register-WNG/PAGES/register.html';
  });