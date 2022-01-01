function generateAffirmation() {
    $.getJSON("../data/affirmations.json", function(affirmations) {
        let affirmation =
            affirmations[Math.floor(Math.random() * affirmations.length)];
        let e = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = affirmation;
        e.appendChild(p);
        $(".affirmations").prepend(e);
    });
}

function changeBackground(element) {
    if (element.style.background == "black") {
        element.style.background = "gray";
    } else {
        element.style.background = "black";
    }
}

function changeFooterBackground() {
    let footers = document.getElementsByClassName("footer-bg");
    for (let i = 0; i < footers.length; i++) {
        changeBackground(footers[i]);
    }
}

function load() {
    changeFooterBackground();

    let name = decodeURIComponent(window.location.search.replace("?name=", ""));
    if (name != "") {
        $(".username").html(name.charAt(0).toUpperCase() + name.slice(1));
    }
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        console.log(window.scrollY);
        window.scrollY > 100 ?
            (navbar.style.display = "block") :
            (navbar.style.display = "none");
    });
}