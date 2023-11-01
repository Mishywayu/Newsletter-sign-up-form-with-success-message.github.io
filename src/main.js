const form = document.querySelector(".form");
const successCard = document.getElementById("success-card");
const emailInput = document.getElementById("email-input");
const invalidMsg = document.getElementById("invalid-msg");
const mainCard = document.getElementById("main-card");

let mailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (emailInput.value.match(mailRegex)) {
      // Valid email, show success card
      successCard.style.display = "block";
      mainCard.style.display = "none";
      invalidMsg.style.display = "none";
  } else {
      // Invalid email, show error message
      invalidMsg.style.display = "block";
      emailInput.style.border = "2px solid red";
      emailInput.style.background = "red";
  }
});