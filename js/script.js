// Car Models
const models = {
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

window.onload = function(){
    const brandTitle=document.getElementById("brandTitle");
    const modelsContainer=document.getElementById("modelsContainer");
    const brand=localStorage.getItem("selectedBrand");
    if(brand && modelsContainer){
        brandTitle.textContent=brand + " Models";
        modelsContainer.innerHTML="";
        models[brand].forEach(m=>{
            const div=document.createElement("div");
            div.className="card";
            div.textContent=m;
            modelsContainer.appendChild(div);
        });
    }
}
