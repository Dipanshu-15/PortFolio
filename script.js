// 1. Select the button and the body
const toggleButton = document.getElementById("toggle-btn");
const body = document.body;

// 2. Add a click event listener
toggleButton.addEventListener("click", function() {
  
  // 3. Toggle the "dark-theme" class on the whole page
  body.classList.toggle("dark-theme");

  // 4. Update the button text based on the mode
  if (body.classList.contains("dark-theme")) {
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }
});