function generateAffirmation() {
    $.getJSON("../data/affirmations.json", function(affirmations) {
        let index = Math.floor(Math.random() * affirmations.length);
        let affirmation = affirmations[index];
        let p = document.createElement("li");
        p.innerHTML = affirmation;
        $(".affirmations-list").prepend(p);
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
    /*
      window.addEventListener("scroll", function() {
          console.log(window.scrollY);
          window.scrollY > 100 ?
              (navbar.style.display = "block") :
              (navbar.style.display = "none");
      });
      */
    /*
      document.body.addEventListener('scroll', function() {
          const main = document.querySelector('#main');

          if (main.scrollTop > 50) {
              console.log("no123");
          } else {}

          if (main.scrollTop > window.innerHeight / 2) {} else { console.log("hi123"); }

      });*/
}

(function() {
    "use strict";

    var form = document.getElementById("user-form");

    form.addEventListener(
        "submit",
        function(event) {
            function failed() {
                event.preventDefault();
                event.stopPropagation();
            }
            if (!form.checkValidity()) {
                failed();
            }
            console.log("asdasd");
            form.classList.add("was-validated");
        },
        false
    );
})();