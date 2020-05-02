function partOne() {
    var jumbotron = document.querySelector(".jumbotron");
    var donateBikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
    var volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");

    var blueButton = document.querySelector("#blueBtn");
    blueButton.addEventListener("click", function() {
        jumbotron.style.backgroundColor = "#588fbd";
        donateBikeButton.style.backgroundColor = "#ffa500";
        volunteerButton.style.backgroundColor = "black";
        volunteerButton.style.color = "white";
    });

    var orangeButton = document.querySelector("#orangeBtn");
    orangeButton.addEventListener("click", function() {
        jumbotron.style.backgroundColor = "#f0ad4e";
        donateBikeButton.style.backgroundColor = "#5751fd";
        volunteerButton.style.backgroundColor = "#31b0d5";
        volunteerButton.style.color = "white";
    });

    var greenButton = document.querySelector("#greenBtn");
    greenButton.addEventListener("click", function() {
        jumbotron.style.backgroundColor = "#87ca8a";
        donateBikeButton.style.backgroundColor = "black";
        volunteerButton.style.backgroundColor = "#8c9c08";
    });
}

partOne();

function partTwo() {
    var submitButton = document.querySelector("button[type=submit]");
    // var submitButton = document.querySelector("#submitBtn");
    // var submitButton = document.querySelector("form .btn.btn-primary");
    submitButton.addEventListener("click", onSubmit);
}

function onSubmit(event) {
    var formInputs = document.querySelectorAll(".form-control");
    var isInputValid = true;
    for (var i = 0; i < formInputs.length; i++) {
        var formInput = formInputs[i];
        if (formInput.value.length == 0) {
            formInput.style.borderColor = "red";
            isInputValid = false;
        }
        // If there is a value then set the border to light grey, in case it was red from a previous call to Submit
        else {
            formInput.style.borderColor = "lightgrey";
        }
    }

    var emailInput = document.querySelector("#exampleInputEmail1");
    if (!emailInput.value.includes("@")) {
        emailInput.style.borderColor = "red";
        isInputValid = false;
    }

    if (isInputValid) {
        for (var i = 0; i < formInputs.length; i++) {
            var formInput = formInputs[i];
            formInput.value = "";
            // Set the border to light grey, in case it was red from a previous call to Submit
            formInput.style.borderColor = "lightgrey";
        }
        alert("Thank you for filling out the form!");
    }

    event.preventDefault();
}

partTwo();
