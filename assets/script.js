/* KADSYS Electronics — comportements de page */

// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('header nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  // Année dynamique dans le pied de page
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Le formulaire de contact est envoyé par FormSubmit (voir contact.html).
  // Aucun blocage JavaScript : la page de remerciement est fournie par FormSubmit.
});
