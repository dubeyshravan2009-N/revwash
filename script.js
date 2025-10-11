// Simple demo login (no backend yet)
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();

  // Get user info
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(username && email && password){
    alert(`Welcome, ${username}!`);
    // After login, you can redirect to main homepage
    window.location.href = "home.html"; // create this later
  } else {
    alert("Please fill all fields");
  }
});
