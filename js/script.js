// Populate car brands dynamically
function populateBrands() {
  const container = document.getElementById('brandsContainer');
  if (!container) {
    console.error("Brands container not found!");
    return;
  }

  const carBrands = {
    "Toyota": ["Corolla","Camry","Fortuner","Hilux","Yaris"],
    "Honda": ["City","Civic","Jazz","WR-V","CR-V"],
    "Hyundai": ["i20","i10","Creta","Verna","Venue"],
    "Mahindra": ["Thar","XUV700","Scorpio","Bolero","XUV300"],
    "Nissan": ["Magnite","Kicks","Leaf","Altima","GT-R"],
    "Tata": ["Nexon","Harrier","Altroz","Punch","Safari"],
    "Renault": ["Kiger","Triber","Kwid","Duster","Captur"],
    "BMW": ["X5","X3","3 Series","5 Series","7 Series"],
    "Mercedes": ["A-Class","C-Class","E-Class","GLA","GLC"]
  };

  container.innerHTML = ''; // Clear previous brands

  Object.keys(carBrands).forEach(brand => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerText = brand;
    div.addEventListener('click', () => {
      localStorage.setItem('selectedBrand', brand);
      window.location.href = 'models.html';
    });
    container.appendChild(div);
  });
}

// Populate models dynamically (called in models.html)
function populateModels() {
  const brand = localStorage.getItem('selectedBrand');
  const container = document.getElementById('modelsContainer');
  if (!brand || !container) {
    console.error("Models container or selected brand not found!");
    return;
  }

  const carModels = {
    "Toyota": ["Corolla","Camry","Fortuner","Hilux","Yaris"],
    "Honda": ["City","Civic","Jazz","WR-V","CR-V"],
    "Hyundai": ["i20","i10","Creta","Verna","Venue"],
    "Mahindra": ["Thar","XUV700","Scorpio","Bolero","XUV300"],
    "Nissan": ["Magnite","Kicks","Leaf","Altima","GT-R"],
    "Tata": ["Nexon","Harrier","Altroz","Punch","Safari"],
    "Renault": ["Kiger","Triber","Kwid","Duster","Captur"],
    "BMW": ["X5","X3","3 Series","5 Series","7 Series"],
    "Mercedes": ["A-Class","C-Class","E-Class","GLA","GLC"]
  };

  container.innerHTML = '';

  carModels[brand].forEach(model => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerText = model;
    div.addEventListener('click', () => {
      localStorage.setItem('selectedModel', model);
      window.location.href = 'washType.html';
    });
    container.appendChild(div);
  });
}
