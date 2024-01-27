// This script:
// 1. Hides the navbar when scrolling down 
// 2. Shows the navbar when scrolling up
// 3. Adds padding to the body to prevent the navbar from overlapping the content


  /* Navbar auto hide/show feature is bootstrapped
  Find it here https://bootstrap-menu.com/detail-autohide.html */

  document.addEventListener("DOMContentLoaded", function navfunction() {
    var prevScrollpos = window.pageYOffset;
    var navbar = document.querySelector('.navbar');

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
