window.onscroll = function() {navStickyTop()};

let navbar = document.getElementById("navigation");

let sticky = navbar.offsetTop;

function navStickyTop() {
    window.pageYOffset >= sticky ? 
    navbar.classList.add("navbar-sticky-top") : 
    navbar.classList.remove("navbar-sticky-top");
  }