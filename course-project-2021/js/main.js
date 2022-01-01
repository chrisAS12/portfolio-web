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


/*
  var navbar = document.getElementById("navbar");
 
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

/*
function validateForm() {
    let form = document.userForm;
    console.log(parseInt(form["age"].value).toString());
    console.log(form["age"].value);
    if (parseInt(form["age"].value).toString() == form["age"].value) {
        alert("Age was not defined as an integer");
        return false;
    } else if (form["age"].value.charAt(0) === "-") {
        alert("Age cannot be negative");
        return false;
    }
    return false;
}

function formValidation() {

}
*/

function formSubmit(event) {
    var url = "https://www.w3schools.com/action_page.php";
    var request = new XMLHttpRequest();
    request.open('get', url);
    request.onload = function() { // request successful
        console.log(request.responseText);
    };

    request.onerror = function() {
        alert("Unsuccessful post.");
    };

    request.send(new FormData(event.target));
    event.preventDefault();
}

// and you can attach form submit event like this for example
function attachFormSubmitEvent(formId) {
    document.getElementById(formId).addEventListener("submit", formSubmit);
}


/*
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
            console.log(form);
            if (parseInt(form["age"].value).toString().length === form["age"].value.length) {
                console.log("Age was not defined as an intege");
                document.getElementById("age-invalid-feedback").innerHTML = "Age was not defined as an integer.";
                failed();
            } else if (form["age"].value.charAt(0) === "-") {
                console.log("negative age");
                document.getElementById("age-invalid-feedback").innerHTML = "Age cannot be negative.";
                failed();
            } else {
                form.classList.add("was-validated");
            }
        },
        false
    );
})();
*/

function load() {

    document.getElementById("uform").addEventListener("submit", formSubmit);
    changeFooterBackground();

    let name = decodeURIComponent(window.location.search.replace("?name=", ""));
    if (name != "") {
        $(".username").html(name.charAt(0).toUpperCase() + name.slice(1));
    }
}