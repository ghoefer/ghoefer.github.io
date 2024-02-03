// This script:
// 1. Hides the navbar when scrolling down 
// 2. Shows the navbar when scrolling up
// 3. Adds padding to the body to prevent the navbar from overlapping the content

function navfunction() {
    /* Navbar auto hide/show feature is bootstrapped
    Find it here https://bootstrap-menu.com/detail-autohide.html */
  
  
    el_autohide = document.querySelector('.autohide');
    el_autohide.style.position = "fixed";
  
  //   console.log("is this working");
    // add padding-top to body (if necessary)
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
        if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
    }
    // if
  }; 
  // DOMContentLoaded  end hi
  