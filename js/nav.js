// This script:
// 1. Hides the navbar when scrolling down 
// 2. Shows the navbar when scrolling up
// 3. Adds padding to the body to prevent the navbar from overlapping the content

document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar");
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos == 0) {
          navbar.style.top = "0";
      } else {
          if (prevScrollpos > currentScrollPos) {
              navbar.style.top = "0";
          } else {
              navbar.style.top = "-50px";
          }
      }
      prevScrollpos = currentScrollPos;

      // Your existing code for auto hide/show navbar
      var el_autohide = document.querySelector('.autohide');
      if (el_autohide) {
          var last_scroll_top = 0;
          if (currentScrollPos < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          } else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = currentScrollPos;
      }
  };
});

// DOMContentLoaded  end hi