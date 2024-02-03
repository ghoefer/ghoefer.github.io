// This script:
// 1. Hides the navbar when scrolling down 
// 2. Shows the navbar when scrolling up
// 3. Adds padding to the body to prevent the navbar from overlapping the content


  /* Navbar auto hide/show feature is bootstrapped
  Find it here https://bootstrap-menu.com/detail-autohide.html */

document.addEventListener("DOMContentLoaded", function () {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
        }

  });
