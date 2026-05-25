// Rating buttons
const btns = document.querySelectorAll(".main__list-btn");
const submitBtn = document.querySelector(".main__submit");

// UI elements
const message = document.querySelector(".thanks__rating-response");
const mainCard = document.querySelector(".main");
const messageCard = document.querySelector(".thanks-card");

// Selected rating
let starValue = null;

// Handle rating selection
btns.forEach((button) => {
  button.addEventListener("click", () => {

    // Remove active state
    btns.forEach((btn) => {
      btn.classList.remove("btn-active");
    });

    // Add active state
    button.classList.add("btn-active");

    // Save rating
    starValue = Number(button.dataset.star);

    // Enable submit button
    submitBtn.disabled = false;
  });
});

// Handle submit
submitBtn.addEventListener("click", () => {

  // Prevent invalid submission
  if (starValue === null) return;

  // Update thank-you message
  message.textContent = starValue;

  // Toggle cards
  mainCard.hidden = true;
  messageCard.hidden = false;
});