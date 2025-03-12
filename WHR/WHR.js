let isBangla = false; 
let isDarkMode = false;


document.getElementById("themeToggle").addEventListener("click", function () {
  isDarkMode = !isDarkMode; 
  document.body.classList.toggle("dark-mode", isDarkMode);
  document.body.classList.toggle("light-mode", !isDarkMode);
  this.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});


document.getElementById("languageToggle").addEventListener("click", function () {
  isBangla = !isBangla; 
  this.textContent = isBangla ? "English" : "বাংলা";
  updateLanguage(); 
});


document.getElementById("whrForm").addEventListener("submit", function (e) {
  e.preventDefault();

 
  const waist = parseFloat(document.getElementById("waist").value);
  const hip = parseFloat(document.getElementById("hip").value);
  const gender = document.getElementById("gender").value;


  const whr = (waist / hip).toFixed(2);


  let healthRisk;
  if (gender === "male") {
    if (whr < 0.9) healthRisk = "Low Risk";
    else if (whr >= 0.9 && whr <= 0.99) healthRisk = "Moderate Risk";
    else healthRisk = "High Risk";
  } else {
    if (whr < 0.8) healthRisk = "Low Risk";
    else if (whr >= 0.8 && whr <= 0.89) healthRisk = "Moderate Risk";
    else healthRisk = "High Risk";
  }

  const whrValueElement = document.getElementById("whrValue");
  const healthRiskElement = document.getElementById("healthRisk");
  const tipsElement = document.getElementById("tips");

  if (whrValueElement && healthRiskElement && tipsElement) {
    whrValueElement.textContent = whr;
    healthRiskElement.textContent = healthRisk;

 
    tipsElement.innerHTML = isBangla
      ? `
        <h3>স্বাস্থ্য পরামর্শ</h3>
        <ul>
          <li><strong>ওজন নিয়ন্ত্রণ:</strong> স্বাস্থ্যকর ওজন বজায় রাখুন।</li>
          <li><strong>নিয়মিত ব্যায়াম:</strong> সপ্তাহে কমপক্ষে 150 মিনিট ব্যায়াম করুন।</li>
          <li><strong>সুষম খাদ্য:</strong> ফল, শাকসবজি, প্রোটিন এবং পুরো শস্য খান।</li>
        </ul>
      `
      : `
        <h3>Health Tips</h3>
        <ul>
          <li><strong>Weight Management:</strong> Maintain a healthy weight.</li>
          <li><strong>Regular Exercise:</strong> Aim for at least 150 minutes of exercise per week.</li>
          <li><strong>Balanced Diet:</strong> Eat fruits, vegetables, proteins, and whole grains.</li>
        </ul>
      `;
  }
});


function updateLanguage() {
  const whrValueElement = document.getElementById("whrValue");
  const healthRiskElement = document.getElementById("healthRisk");
  const tipsElement = document.getElementById("tips");

  if (whrValueElement.textContent !== "-") {
    document.getElementById("whrForm").dispatchEvent(new Event("submit"));
  }
}