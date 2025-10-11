// New script.js: uses placeholders if real images not present
const placeholder = 'images/placeholder.png'; // lightweight placeholder
const logoPath = 'images/logo.png'; // your real logo (must be present)

// Demo data
const models = [
  { id: 'hatch', name: 'Hatchback', img: placeholder },
  { id: 'sedan', name: 'Sedan', img: placeholder },
  { id: 'suv', name: 'SUV', img: placeholder },
  { id: 'lux', name: 'Luxury', img: placeholder }
];

const packages = [
  { id: 'basic', title: 'Basic Wash', price: '299', desc: 'Exterior wash, rinse & hand dry' },
  { id: 'standard', title: 'Standard', price: '499', desc: 'Exterior + interior vacuuming' },
  { id: 'premium', title: 'Premium', price: '999', desc: 'Full detailing & polish' }
];

// create a tiny placeholder if not present (1x1 png-ish using data URI)
function ensurePlaceholder(){
  fetch(placeholder).catch(()=>{
    // create a tiny data uri image and save to an <img> element's src when needed
    // we won't create files on server; just rely on data URI where needed
  });
}

function populateModels(){
  const cont = document.getElementById('modelsContainer');
  if(!cont) return;
  cont.innerHTML = '';
  models.forEach(m=>{
    const el = document.createElement('div');
    el.className='card';
    el.innerHTML = `<img src="${m.img}" alt="${m.name}"><h3>${m.name}</h3><p>Choose this category</p>`;
    cont.appendChild(el);
  });
}

function populatePackages(){
  const cont = document.getElementById('packagesContainer');
  if(!cont) return;
  cont.innerHTML='';
  packages.forEach(p=>{
    const el = document.createElement('div');
    el.className='card';
    el.innerHTML = `<h3>${p.title} — ₹${p.price}</h3><p>${p.desc}</p><div style="margin-top:12px"><a class="btn btn-primary" href="booking.html" onclick="selectPackage('${p.id}')">Select</a></div>`;
    cont.appendChild(el);
  });
}

function fillBookingSelects(){
  const modelSelect = document.getElementById('modelSelect');
  const packageSelect = document.getElementById('packageSelect');
  if(modelSelect){
    modelSelect.innerHTML = '<option value="">Choose model</option>';
    models.forEach(m=> modelSelect.innerHTML += `<option value="${m.id}">${m.name}</option>`);
  }
  if(packageSelect){
    packageSelect.innerHTML = '<option value="">Choose package</option>';
    packages.forEach(p=> packageSelect.innerHTML += `<option value="${p.id}">${p.title} — ₹${p.price}</option>`);
  }
}

function selectPackage(id){
  localStorage.setItem('revv_selected_package', id);
}

function initBookingForm(){
  const form = document.getElementById('bookingForm');
  if(!form) return;
  fillBookingSelects();
  const pre = localStorage.getItem('revv_selected_package');
  if(pre){
    const sel = document.getElementById('packageSelect');
    if(sel) sel.value = pre;
    localStorage.removeItem('revv_selected_package');
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const model = document.getElementById('modelSelect').value;
    const pack = document.getElementById('packageSelect').value;
    const dt = document.getElementById('dateTime').value;
    const addr = document.getElementById('address').value.trim();

    if(!name || !phone || !model || !pack || !dt || !addr){
      showMsg('Please fill all fields','error'); return;
    }

    showMsg('Booking saved! We will contact you shortly.','success');
    form.reset();
  });

  document.getElementById('clearBtn')?.addEventListener('click', ()=> form.reset());
}

function showMsg(txt, type){
  const el = document.getElementById('bookingMsg');
  if(!el) return;
  el.textContent = txt;
  el.style.color = type === 'error' ? 'crimson' : 'green';
  setTimeout(()=> el.textContent = '', 5000);
}

function initWhatsApp(){
  const num = '91XXXXXXXXXX'; // replace with your number
  const btns = document.querySelectorAll('#whatsappBtn, #whatsappBtn2, .floating-whatsapp');
  btns.forEach(b=>{
    if(!b) return;
    b.href = `https://wa.me/${num}`;
    b.target = '_blank';
  });
}

window.addEventListener('load', ()=>{
  populateModels();
  populatePackages();
  fillBookingSelects();
  initBookingForm();
  initWhatsApp();
  document.querySelectorAll('#year,#year2,#year3,#year4,#year5,#year6').forEach(el => el.textContent = new Date().getFullYear());
});
