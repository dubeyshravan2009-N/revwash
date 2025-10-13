const carModels = {
  "Toyota": ["Corolla", "Camry", "Fortuner", "Hilux", "Yaris"],
  "Honda": ["City", "Civic", "Jazz", "WR-V", "CR-V"],
  "Hyundai": ["i20", "i10", "Creta", "Verna", "Venue"],
  "Mahindra": ["Thar", "XUV700", "Scorpio", "Bolero", "XUV300"],
  "Nissan": ["Magnite", "Kicks", "Leaf", "Altima", "GT-R"],
  "Tata": ["Nexon", "Harrier", "Altroz", "Punch", "Safari"],
  "Renault": ["Kiger", "Triber", "Kwid", "Duster", "Captur"],
  "BMW": ["X5", "X3", "3 Series", "5 Series", "7 Series"],
  "Mercedes": ["A-Class", "C-Class", "E-Class", "GLA", "GLC"]
};

// When a brand is clicked from index.html
function selectBrand(brand) {
    localStorage.setItem("selectedBrand", brand);
    window.location.href = "models.html";
}

// Populate models dynamically on models.html
window.onload = () => {
    const brand = localStorage.getItem("selectedBrand");
    const container = document.getElementById("modelsContainer");
    if (brand && container) {
        container.innerHTML = "";
        carModels[brand].forEach(model => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerText = model;
            div.addEventListener("click", () => {
                localStorage.setItem("selectedModel", model);
                window.location.href = "washType.html";
            });
            container.appendChild(div);
        });
    }
};
