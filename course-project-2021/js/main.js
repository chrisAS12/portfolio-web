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

function validation() {
    var letters = /^[A-Za-z]+$/;
    if (!document.uform.fname.value.match(letters)) {
        alert('You can only input letters into "First name" field!');
        return false;
    }

    if (!document.uform.surname.value.match(letters)) {
        alert('You can only input letters into "Surname " field!');
        return false;
    }

    if (isNaN(parseInt(document.uform.age.value))) {
        alert("You have to specify your age!");
        return false;
    }
    if (
        isNaN(parseInt(document.uform.phone.value)) ||
        document.uform.phone.value.match(/^[0-9]+$/) == null ||
        document.uform.phone.value.length != 8
    ) {
        alert(
            "Your phone number can't contain anything except numbers and has to be 8 symbols long."
        );
        return false;
    }
    alert("Will contact you when possible!");
    return true;
}

function showFooter() {
    let showFooterButton = document.getElementById("show-footer");
    if (showFooterButton.innerText == "Show bonus section") {
        showFooterButton.innerText = "Hide bonus section";
    } else {
        showFooterButton.innerText = "Show bonus section";
    }
    swapFooterDisplay();

}

function swapFooterDisplay() {
    let footer = document.getElementById("encourage-footer");
    console.log(footer.style.display);
    if (footer.style.display == "" || footer.style.display == "block") {
        footer.style.display = "none";
    } else {
        footer.style.display = "block";

    }
}

function load() {
    changeFooterBackground();
    swapFooterDisplay();

    let name = decodeURIComponent(window.location.search.replace("?name=", ""));
    if (name != "") {
        $(".username").html(name.charAt(0).toUpperCase() + name.slice(1));
    }
}