// 1. Login / Signup
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

// 2. Car Brand Selection
function selectBrand(brandName) {
  localStorage.setItem("selectedBrand", brandName);
  window.location.href = "models.html";
}

// 3. Car Model Selection with Images
const modelsContainer = document.getElementById("modelsContainer");
if(modelsContainer){
  const brand = localStorage.getItem("selectedBrand");

  const carModels = {
    Toyota: [
      { name: "Corolla", img: "images/models/toyota_corolla.png" },
      { name: "Camry", img: "images/models/toyota_camry.png" },
      { name: "Fortuner", img: "images/models/toyota_fortuner.png" },
      { name: "Innova", img: "images/models/toyota_innova.png" }
    ],
    Honda: [
      { name: "City", img: "images/models/honda_city.png" },
      { name: "Civic", img: "images/models/honda_civic.png" },
      { name: "CR-V", img: "images/models/honda_crv.png" },
      { name: "Jazz", img: "images/models/honda_jazz.png" }
    ],
    BMW: [
      { name: "X1", img: "images/models/bmw_x1.png" },
      { name: "X3", img: "images/models/bmw_x3.png" },
      { name: "X5", img: "images/models/bmw_x5.png" },
      { name: "3 Series", img: "images/models/bmw_3series.png" }
    ],
    Mercedes: [
      { name: "A-Class", img: "images/models/mercedes_a.png" },
      { name: "C-Class", img: "images/models/mercedes_c.png" },
      { name: "E-Class", img: "images/models/mercedes_e.png" },
      { name: "GLC", img: "images/models/mercedes_glc.png" }
    ]
  };

  const models = carModels[brand] || [];

  models.forEach(model => {
    const modelDiv = document.createElement("div");
    modelDiv.classList.add("model");
    modelDiv.innerHTML = `
      <img src="${model.img}" alt="${model.name}" class="model-img">
      <p>${model.name}</p>
    `;
    modelDiv.onclick = function(){
      localStorage.setItem("selectedModel", model.name);
      window.location.href = "packages.html";
    };
    modelsContainer.appendChild(modelDiv);
  });
}

// 4. Package Selection
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
