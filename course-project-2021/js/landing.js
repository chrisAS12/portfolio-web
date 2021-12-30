function load() {

    let name = window.location.search.replace("?name=", "");
    document.getElementById("username").innerHTML = name.charAt(0).toUpperCase() + name.slice(1);

    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        window.scrollY > 100 ?
            (navbar.style.display = "block") :
            (navbar.style.display = "none");
    });
}