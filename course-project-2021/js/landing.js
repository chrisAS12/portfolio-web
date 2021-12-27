function load() {
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        window.scrollY > 100 ?
            (navbar.style.display = "block") :
            (navbar.style.display = "none");
    });
}