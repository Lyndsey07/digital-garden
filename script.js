var menuButton = document.querySelector("header button");
var deNav = document.querySelector("header nav");
var deHeader = document.querySelector("header");

menuButton.addEventListener("click", function() {
    deNav.classList.toggle("is-open");
    deHeader.classList.toggle("is-open");

    console.log("Header:", deHeader.className);
    console.log("Nav:", deNav.className);
});