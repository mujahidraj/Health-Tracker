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


document.getElementById("tdeeForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const age = parseFloat(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const feet = parseFloat(document.getElementById("feet").value);
  const inches = parseFloat(document.getElementById("inches").value);
  const activity = parseFloat(document.getElementById("activity").value);


  const heightInCm = (feet * 12 + inches) * 2.54;


  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * heightInCm - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * heightInCm - 5 * age - 161;
  }


  const tdee = Math.round(bmr * activity);


  const tdeeValueElement = document.getElementById("tdeeValue");
  const tipsElement = document.getElementById("tips");

  if (tdeeValueElement && tipsElement) {
    tdeeValueElement.textContent = tdee;


    tipsElement.innerHTML = isBangla
      ? `
        <h3>স্বাস্থ্য পরামর্শ</h3>
        <ul>
          <li><strong>ক্যালোরি গ্রহণ:</strong> আপনার TDEE অনুযায়ী ক্যালোরি গ্রহণ করুন।</li>
          <li><strong>সুষম খাদ্য:</strong> ফল, শাকসবজি, প্রোটিন এবং পুরো শস্য খান।</li>
          <li><strong>নিয়মিত ব্যায়াম:</strong> সপ্তাহে কমপক্ষে 150 মিনিট ব্যায়াম করুন।</li>
        </ul>
      `
      : `
        <h3>Health Tips</h3>
        <ul>
          <li><strong>Caloric Intake:</strong> Consume calories according to your TDEE.</li>
          <li><strong>Balanced Diet:</strong> Eat fruits, vegetables, proteins, and whole grains.</li>
          <li><strong>Regular Exercise:</strong> Aim for at least 150 minutes of exercise per week.</li>
        </ul>
      `;
  }
});


function updateLanguage() {
  const tdeeValueElement = document.getElementById("tdeeValue");
  const tipsElement = document.getElementById("tips");

  if (tdeeValueElement.textContent !== "-") {
    document.getElementById("tdeeForm").dispatchEvent(new Event("submit"));
  }
}