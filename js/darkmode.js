/* inspired by https://ryanfeigenbaum.com/dark-mode/ */

let darkmodetoggle = document.getElementById("DarkModeToggle");


document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.lightMode === null) {
        localStorage.lightMode = "dark";
        console.log("localstorage lightMode on load", localStorage.lightMode);
    }
});

// on button click change color mode
darkmodetoggle.addEventListener("click", function () {
    console.log("localstorage lightMode on click", localStorage.lightMode)
    if (localStorage.lightMode === "dark"){
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.lightMode = "light";
        console.log("localstorage lightMode after if", localStorage.lightMode)
    }
    else {
        document.documentElement.setAttribute("color-mode", "dark");
        localStorage.lightMode = "dark";
        console.log("localstorage lightMode after else", localStorage.lightMode)
    }

});