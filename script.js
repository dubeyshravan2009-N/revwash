// Login / Signup
const loginForm = document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(username && email && password){
      alert(`Welcome, ${username}!`);
      window.location.href = "home.html";
    } else {
      alert("Please fill all fields");
    }
  });
}

// Car Brand Selection
function selectBrand(brandName) {
  localStorage.setItem("selectedBrand", brandName);
  window.location.href = "models.html"; // next page
}
