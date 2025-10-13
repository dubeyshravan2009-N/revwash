
const firebaseConfig = {
  apiKey: "AIzaSyAYRHW2Y_C9xAxdjii9VpdldW_FSfcHEsc",
  authDomain: "revwash-b60b5.firebaseapp.com",
  projectId: "revwash-b60b5",
  storageBucket: "revwash-b60b5.firebasestorage.app",
  messagingSenderId: "190105346093",
  appId: "1:190105346093:web:b33091abe78cd32ae9d8a4"
};
// central place for brands/models so both functions use same data
const REVV_CAR_DATA = {
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

// populate brand cards (index.html)
function populateBrands() {
  const container = document.getElementById('brandsContainer');
  if (!container) {
    console.error('populateBrands: brandsContainer not found');
    return;
  }
  container.innerHTML = '';
  Object.keys(REVV_CAR_DATA).forEach(brand => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = brand;
    card.addEventListener('click', () => {
      // store selection and go to models page
      localStorage.setItem('selectedBrand', brand);
      // navigate
      window.location.href = 'models.html';
    });
    container.appendChild(card);
  });
}

// populate models for selected brand (models.html)
function populateModels() {
  const brand = localStorage.getItem('selectedBrand');
  const container = document.getElementById('modelsContainer');
  const titleNode = document.getElementById('modelsTitle');
  const noteNode = document.getElementById('selectedBrandNote');
  if (!container) {
    console.error('populateModels: modelsContainer not found');
    return;
  }
  if (!brand) {
    container.innerHTML = '<p style="color:#666;">No brand selected — please go back and choose a brand.</p>';
    if (titleNode) titleNode.innerText = 'Select Your Car Model';
    if (noteNode) noteNode.innerText = '';
    return;
  }

  // update small UI hints
  if (titleNode) titleNode.innerText = `Select Your ${brand} Model`;
  if (noteNode) noteNode.innerText = `Brand selected: ${brand}`;

  const models = REVV_CAR_DATA[brand] || [];
  container.innerHTML = '';
  models.forEach(model => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = model;
    card.addEventListener('click', () => {
      localStorage.setItem('selectedModel', model);
      // go to wash selection
      window.location.href = 'washType.html';
    });
    container.appendChild(card);
  });
}
