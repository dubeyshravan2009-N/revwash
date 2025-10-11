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
// Package Selection
const packagesContainer = document.getElementById("packagesContainer");
if(packagesContainer){
  const washPackages = [
    { name: "Full Car Wash", price: "₹999" },
    { name: "Waterless Car Wash", price: "₹499" },
    { name: "Interior Clean Only", price: "₹399" },
    { name: "Polish Only", price: "₹299" }
  ];

  washPackages.forEach(pkg => {
    const pkgDiv = document.createElement("div");
    pkgDiv.classList.add("package");
    pkgDiv.innerHTML = `<h3>${pkg.name}</h3><p>${pkg.price}</p>`;
    pkgDiv.onclick = function(){
      localStorage.setItem("selectedPackage", pkg.name);
      localStorage.setItem("selectedPrice", pkg.price);
      window.location.href = "payment.html"; // next step
    };
    packagesContainer.appendChild(pkgDiv);
  });
}

