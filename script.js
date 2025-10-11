// 1. Login / Signup
const loginForm = document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("username").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;

    if(username && mobile && address && pincode){
      alert(`Welcome, ${username}!`);
      window.location.href = "home.html"; // redirect after login
    } else {
      alert("Please fill all fields");
    }
  });
}

// 2. Brand Selection
function selectBrand(brandName){
  localStorage.setItem("selectedBrand", brandName);
  window.location.href = "models.html";
}

// 3. Model Selection with images
const modelsContainer = document.getElementById("modelsContainer");
if(modelsContainer){
  const brand = localStorage.getItem("selectedBrand");
  const carModels = {
    Toyota: [
      {name:"Corolla", img:"images/models/toyota_corolla.png"},
      {name:"Camry", img:"images/models/toyota_camry.png"},
      {name:"Fortuner", img:"images/models/toyota_fortuner.png"}
    ],
    Honda: [
      {name:"City", img:"images/models/honda_city.png"},
      {name:"Civic", img:"images/models/honda_civic.png"},
      {name:"CR-V", img:"images/models/honda_crv.png"}
    ]
    // Add more brands/models as needed
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
    {name:"Full Car Wash", price:"₹999"},
    {name:"Waterless Car Wash", price:"₹499"},
    {name:"Interior Clean Only", price:"₹399"},
    {name:"Polish Only", price:"₹299"}
  ];

  washPackages.forEach(pkg => {
    const pkgDiv = document.createElement("div");
    pkgDiv.classList.add("package");
    pkgDiv.innerHTML = `<h3>${pkg.name}</h3><p>${pkg.price}</p>`;
    pkgDiv.onclick = function(){
      localStorage.setItem("selectedPackage", pkg.name);
      localStorage.setItem("selectedPrice", pkg.price);
      window.location.href = "payment.html";
    };
    packagesContainer.appendChild(pkgDiv);
  });
}
