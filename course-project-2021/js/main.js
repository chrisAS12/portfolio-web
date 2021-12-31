function load() {
    let name = decodeURIComponent(window.location.search.replace("?name=", ""));
    if (name != "") {
        $(".username").html(name.charAt(0).toUpperCase() + name.slice(1) + "!");
    }
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        window.scrollY > 100 ?
            (navbar.style.display = "block") :
            (navbar.style.display = "none");
    });
}