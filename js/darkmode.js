/* inspired by https://ryanfeigenbaum.com/dark-mode/ */

let darkmodetoggle = document.getElementById("DarkModeToggle");

// on button click change color mode
darkmodetoggle.addEventListener("click", function () {
    let current_mode = document.documentElement.getAttribute("color-mode");
    if (current_mode === "dark"){
        document.documentElement.setAttribute("color-mode", "light");
    }
    else {
        document.documentElement.setAttribute("color-mode", "dark");
    }

});