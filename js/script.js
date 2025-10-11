// Welcome Modal
const welcomeModal = document.getElementById("welcomeModal");
const closeWelcome = document.getElementById("closeWelcome");
if(!localStorage.getItem("visited")){
    welcomeModal.style.display="flex";
    localStorage.setItem("visited","true");
}
closeWelcome?.addEventListener("click",()=>welcomeModal.style.display="none");

// Auth Modal
const authModal = document.getElementById("authModal");
document.getElementById("openAuth")?.addEventListener("click",()=>authModal.style.display="flex");
document.getElementById("closeAuth")?.addEventListener("click",()=>authModal.style.display="none");

// Register/Login Logic
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");

registerBtn?.addEventListener("click",()=>{
    const name=document.getElementById("regName").value;
    const email=document.getElementById("regEmail").value;
    const phone=document.getElementById("regPhone").value;
    const address=document.getElementById("regAddress").value;
    const password=document.getElementById("regPassword").value;
    if(name && email && phone && password){
        const user={name,email,phone,address,password};
        localStorage.setItem(email,JSON.stringify(user));
        alert("Account Created!");
        authModal.style.display="none";
    } else alert("Fill all required fields!");
});

loginBtn?.addEventListener("click",()=>{
    const email=document.getElementById("loginEmail").value;
    const password=document.getElementById("loginPassword").value;
    const data=localStorage.getItem(email);
    if(data){
        const user=JSON.parse(data);
        if(user.password===password){
            alert("Login Successful! Welcome "+user.name);
            authModal.style.display="none";
        } else alert("Wrong password!");
    } else alert("Email not registered!");
});

// Car Models
const models={ 
    "Toyota":["Corolla","Camry","Fortuner","Innova","Yaris"],
    "Honda":["City","Civic","Jazz","CR-V","WR-V"],
    "Hyundai":["i20","i10","Creta","Verna","Venue"],
    "Mahindra":["XUV700","Thar","Scorpio","Bolero","Marazzo"],
    "Nissan":["Magnite","Kicks","GT-R","Sunny","X-Trail"],
    "Tata":["Nexon","Harrier","Tiago","Altroz","Safari"],
    "Renault":["Kiger","Duster","Triber","Kwid","Captur"],
    "BMW":["3 Series","5 Series","X1","X5","X6"],
    "Mercedes":["C-Class","E-Class","GLA","GLE","S-Class"]
};

function selectBrand(brand){
    localStorage.setItem("selectedBrand",brand);
    window.location.href="models.html";
}

window.onload=function(){
    const brandTitle=document.getElementById("brandTitle");
    const modelsContainer=document.getElementById("modelsContainer");
    const brand=localStorage.getItem("selectedBrand");
    if(brand && modelsContainer){
        brandTitle.textContent=brand+" Models";
        modelsContainer.innerHTML="";
        models[brand].forEach(m=>{
            const div=document.createElement("div");
            div.className="card";
            div.textContent=m;
            modelsContainer.appendChild(div);
        });
    }
}
