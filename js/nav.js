document.addEventListener("DOMContentLoaded", function() {
  var prevScrollpos = window.pageYOffset;
  var navbar = document.querySelector('.autohide');

  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      // Check if the user is not at the top of the page
      if (currentScrollPos > 0) {
          // Determine scroll direction
          if (prevScrollpos > currentScrollPos) {
              navbar.classList.remove('scrolled-down');
              navbar.classList.add('scrolled-up');
          } else {
              navbar.classList.remove('scrolled-up');
              navbar.classList.add('scrolled-down');
          }
      } else {
          // User is at the top of the page, always show the navbar
          navbar.classList.remove('scrolled-up');
          navbar.classList.remove('scrolled-down');
      }

      prevScrollpos = currentScrollPos;
  };
});