/* inspired by https://ryanfeigenbaum.com/dark-mode/ */

let darkmodetoggle = document.getElementById("DarkModeToggle");


// Automatically Check user preference for color scheme on page load
//  document.addEventListener('DOMContentLoaded', function () {
    // Check the user's system color scheme preference
//    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set the `color-mode` attribute on the <html> element based on preference
//    if (prefersDarkScheme) {
//      document.documentElement.setAttribute('color-mode', 'dark');
//    } else {
//      document.documentElement.setAttribute('color-mode', 'light');
//    }
//  });




/* on button click change color mode in css and save in sessionStorage */
darkmodetoggle.addEventListener("click", function () {
    console.log("sessionStorage lightMode on click", sessionStorage.lightMode)
    if (sessionStorage.lightMode === "dark"){
        document.documentElement.setAttribute("color-mode", "light");
        sessionStorage.lightMode = "light";
    }
    else {
        document.documentElement.setAttribute("color-mode", "dark");
        sessionStorage.lightMode = "dark";
    }
});


/* mobile menu button */

const hamburgerBtn = document.getElementById('hamburger-btn');
  const menu = document.querySelector('.menu');

  hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });