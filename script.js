// 1. Select the button and the card
const button = document.getElementById("toggle-btn");
const card = document.querySelector(".card");

// 2. Add a "click" event listener
button.addEventListener("click", function() {
  
  // 3. Toggle the class on the card
  card.classList.toggle("dark-theme");

  // Optional: Change button text based on mode
  if (card.classList.contains("dark-theme")) {
    button.textContent = "☀️ Light Mode";
  } else {
    button.textContent = "🌙 Dark Mode";
  }
  
});