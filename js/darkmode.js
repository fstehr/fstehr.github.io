/* inspired by https://ryanfeigenbaum.com/dark-mode/ */

let darkmodetoggle = document.getElementById("DarkModeToggle");


document.addEventListener("DOMContentLoaded", function() {
  if (sessionStorage.lightMode === undefined) {
      sessionStorage.lightMode = "dark";
      console.log("localstorage lightMode on load", sessionStorage.lightMode);
  }
  else {
      /* on load set color mode to the one stored in localstorage */
      console.log("localstorage lightMode on load", sessionStorage.lightMode);
      document.documentElement.setAttribute("color-mode", sessionStorage.lightMode);
  }
});

// on button click change color mode
darkmodetoggle.addEventListener("click", function () {
    console.log("localstorage lightMode on click", sessionStorage.lightMode)
    if (sessionStorage.lightMode === "dark"){
        document.documentElement.setAttribute("color-mode", "light");
        sessionStorage.lightMode = "light";
        console.log("localstorage lightMode after if", sessionStorage.lightMode)
    }
    else {
        document.documentElement.setAttribute("color-mode", "dark");
        sessionStorage.lightMode = "dark";
        console.log("localstorage lightMode after else", sessionStorage.lightMode)
    }

});