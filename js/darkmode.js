/* inspired by https://ryanfeigenbaum.com/dark-mode/ */

let darkmodetoggle = document.getElementById("DarkModeToggle");

// on button click change color mode
darkmodetoggle.addEventListener("click", function () {
    let current_mode = document.documentElement.getAttribute("color-mode");
    if (localStorage.lightMode === "dark"){
        localStorage.lightMode = "light";
        document.documentElement.setAttribute("color-mode", "light");
    }
    else {
        localStorage.lightMode = "dark";
        document.documentElement.setAttribute("color-mode", "dark");
    }

});