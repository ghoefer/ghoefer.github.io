// This script:
// 1. Hides the navbar when scrolling down 
// 2. Shows the navbar when scrolling up
// 3. Adds padding to the body to prevent the navbar from overlapping the content


  /* Navbar auto hide/show feature is bootstrapped
  Find it here https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */


  let lastScrollTop = 0;
  const navbar = document.getElementById('topnav-container');
  
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Scroll down
      navbar.style.top = `-${navbar.offsetHeight}px`;
    } else {
      // Scroll up
      navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
  });
  