/* ------------------ GENERAL STYLES ------------------ */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #0A1F44;
  color: white;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ------------------ HEADER ------------------ */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  background: #081735;
  position: sticky;
  top: 0;
  z-index: 100;
}

header .logo {
  width: 120px;
}

header nav a {
  margin-left: 20px;
  font-weight: bold;
  color: white;
}

header nav a:hover {
  color: #FFC107;
}

/* ------------------ LOGIN / SIGNUP PAGE ------------------ */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.logo-section .logo {
  width: 200px;
  margin-bottom: 20px;
}

.slogan {
  font-size: 24px;
  margin-bottom: 40px;
  color: #FFC107;
}

.form-section input {
  display: block;
  width: 250px;
  margin: 10px auto;
  padding: 12px;
  border-radius: 8px;
  border: none;
}

.form-section button {
  width: 270px;
  padding: 12px;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  background: #FFC107;
  color: #0A1F44;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}

.form-section button:hover {
  opacity: 0.9;
}

/* ------------------ HOMEPAGE HERO ------------------ */
.hero {
  text-align: center;
  padding: 100px 20px;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #FFC107;
}

.hero p {
  font-size: 20px;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 12px 25px;
  background: #FFC107;
  color: #0A1F44;
  border-radius: 8px;
  font-weight: bold;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

/* ------------------ FEATURES SECTION ------------------ */
.features {
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
  flex-wrap: wrap;
  gap: 20px;
}

.features div {
  text-align: center;
  max-width: 200px;
}

/* ------------------ FOOTER ------------------ */
footer {
  text-align: center;
  padding: 20px;
  background: #081735;
  margin-top: 50px;
}

/* ------------------ CAR BRAND SELECTION ------------------ */
.car-brands {
  text-align: center;
  padding: 50px 20px;
}

.car-brands h2 {
  font-size: 28px;
  color: #FFC107;
  margin-bottom: 30px;
}

.brands-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.brand {
  background: #081735;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
  width: 150px;
  text-align: center;
}

.brand img {
  width: 100px;
  margin-bottom: 10px;
}

.brand p {
  font-weight: bold;
  color: white;
}

.brand:hover {
  transform: scale(1.05);
  background: #0A1F44;
}

/* ------------------ CAR MODEL SELECTION ------------------ */
.car-models {
  text-align: center;
  padding: 50px 20px;
}

.car-models h2 {
  font-size: 28px;
  color: #FFC107;
  margin-bottom: 30px;
}

.models-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.model {
  background: #081735;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  min-width: 150px;
  transition: transform 0.2s;
  font-weight: bold;
  color: white;
}

.model:hover {
  transform: scale(1.05);
  background: #0A1F44;
}

/* ------------------ PACKAGE SELECTION ------------------ */
.packages {
  text-align: center;
  padding: 50px 20px;
}

.packages h2 {
  font-size: 28px;
  color: #FFC107;
  margin-bottom: 30px;
}

.packages-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.package {
  background: #081735;
  padding: 25px;
  border-radius: 12px;
  cursor: pointer;
  min-width: 180px;
  transition: transform 0.2s;
  font-weight: bold;
  color: white;
  text-align: center;
}

.package:hover {
  transform: scale(1.05);
  background: #0A1F44;
}

/* ------------------ MEDIA QUERIES ------------------ */
@media (max-width: 768px) {
  .features {
    flex-direction: column;
    gap: 30px;
  }

  .brands-container, .models-container, .packages-container {
    flex-direction: column;
    gap: 20px;
  }
}
