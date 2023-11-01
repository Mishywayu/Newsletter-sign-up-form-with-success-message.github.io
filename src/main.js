document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const successCard = document.getElementById("success-card");
  const emailInput = document.getElementById("email-input");
  const invalidMsg = document.getElementById("invalid-msg");
  const mainCard = document.getElementById("main-card");

  let btn = document.getElementById("dismiss");

  let mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (emailInput.value.match(mailRegex)) {
      // Valid email, show success card
      mainCard.style.display = "none";
      successCard.style.display = "block";
    } else {
      // Invalid email, show error message
      invalidMsg.style.display = "block";
      emailInput.style.border = "2px solid red";
      emailInput.style.background = "red";
    }

    btn.addEventListener('click', () => {
      successCard.style.display = "none";
      mainCard.style.display = "block"
    });
  });
});
