// --- Car Brands & Models ---
const carData = {
  "Maruti": ["Swift", "Baleno", "Dzire"],
  "Hyundai": ["i20", "Creta", "Venue"],
  "Tata": ["Nexon", "Altroz", "Punch"],
  "Mahindra": ["XUV700", "Thar", "Scorpio"],
  "Honda": ["City", "Jazz", "WR-V"],
  "Toyota": ["Fortuner", "Corolla", "Innova"]
};

// Load brands dynamically
const carBrandsDiv = document.getElementById("carBrands");
for (let brand in carData) {
  let btn = document.createElement("button");
  btn.innerText = brand;
  btn.type = "button";
  btn.onclick = () => selectBrand(brand);
  carBrandsDiv.appendChild(btn);
}

let selectedBrand = "";
let selectedModel = "";

function selectBrand(brand) {
  selectedBrand = brand;
  // Populate models
  const modelSelect = document.getElementById("carModel");
  modelSelect.innerHTML = "<option value=''>--Select Model--</option>";
  carData[brand].forEach(model => {
    let opt = document.createElement("option");
    opt.value = model;
    opt.innerText = model;
    modelSelect.appendChild(opt);
  });
}

// --- Multi-step form navigation ---
function nextStep(step) {
  if (step === 2 && !selectedBrand) {
    alert("Please select a car brand.");
    return;
  }
  if (step === 3) {
    const model = document.getElementById("carModel").value;
    if (!model) { alert("Select your car model"); return; }
    selectedModel = model;
  }
  if (step === 4) {
    const pkg = document.getElementById("package").value;
    if (!pkg) { alert("Select a package"); return; }
  }
  if (step === 5) {
    const pay = document.getElementById("payment").value;
    if (!pay) { alert("Select a payment mode"); return; }
  }
  document.getElementById(`step${step}`).style.display = "none";
  document.getElementById(`step${step+1}`).style.display = "block";
}

function prevStep(step) {
  document.getElementById(`step${step}`).style.display = "none";
  document.getElementById(`step${step-1}`).style.display = "block";
}

// --- Submit Booking ---
function submitBooking() {
  const name = document.getElementById("fullName").value;
  const mobile = document.getElementById("mobile").value;
  const address = document.getElementById("address").value;
  const pin = document.getElementById("pincode").value;
  const pkg = document.getElementById("package").value;
  const payment = document.getElementById("payment").value;

  const msg = `Thank you, ${name}! Your ${pkg} for ${selectedBrand} ${selectedModel} has been booked. Payment Mode: ${payment}. Our team will contact you soon.`;
  document.getElementById("confirmationMessage").innerText = msg;

  nextStep(5); // Show confirmation
}
