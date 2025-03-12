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


document.getElementById("bpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const systolic = parseFloat(document.getElementById("systolic").value);
  const diastolic = parseFloat(document.getElementById("diastolic").value);


  let bpCategory;
  if (systolic < 90 || diastolic < 60) {
    bpCategory = "Low Blood Pressure";
  } else if (systolic < 120 && diastolic < 80) {
    bpCategory = "Normal";
  } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
    bpCategory = "Elevated";
  } else if (systolic >= 130 && systolic <= 139 || diastolic >= 80 && diastolic <= 89) {
    bpCategory = "Hypertension Stage 1";
  } else if (systolic >= 140 || diastolic >= 90) {
    bpCategory = "Hypertension Stage 2";
  } else if (systolic > 180 || diastolic > 120) {
    bpCategory = "Hypertensive Crisis";
  }

  const bpValueElement = document.getElementById("bpValue");
  const bpCategoryElement = document.getElementById("bpCategory");
  const tipsElement = document.getElementById("tips");

  if (bpValueElement && bpCategoryElement && tipsElement) {
    bpValueElement.textContent = `${systolic}/${diastolic} mmHg`;
    bpCategoryElement.textContent = bpCategory;

    tipsElement.innerHTML = isBangla
      ? `
        <h3>স্বাস্থ্য পরামর্শ</h3>
        <ul>
          <li><strong>লবণ কম খান:</strong> প্রতিদিন 5 গ্রামের কম লবণ খান।</li>
          <li><strong>নিয়মিত ব্যায়াম:</strong> সপ্তাহে কমপক্ষে 150 মিনিট ব্যায়াম করুন।</li>
          <li><strong>স্বাস্থ্যকর খাদ্য:</strong> ফল, শাকসবজি, এবং পুরো শস্য খান।</li>
          <li><strong>ওজন নিয়ন্ত্রণ:</strong> স্বাস্থ্যকর ওজন বজায় রাখুন।</li>
          <li><strong>ধূমপান ত্যাগ করুন:</strong> ধূমপান উচ্চ রক্তচাপ বাড়ায়।</li>
        </ul>
      `
      : `
        <h3>Health Tips</h3>
        <ul>
          <li><strong>Reduce Salt Intake:</strong> Consume less than 5g of salt per day.</li>
          <li><strong>Exercise Regularly:</strong> Aim for at least 150 minutes of exercise per week.</li>
          <li><strong>Eat Healthy:</strong> Include fruits, vegetables, and whole grains in your diet.</li>
          <li><strong>Maintain a Healthy Weight:</strong> Keep your weight in check.</li>
          <li><strong>Quit Smoking:</strong> Smoking increases blood pressure.</li>
        </ul>
      `;
  }
});


function updateLanguage() {
  const bpValueElement = document.getElementById("bpValue");
  const bpCategoryElement = document.getElementById("bpCategory");
  const tipsElement = document.getElementById("tips");

  if (bpValueElement.textContent !== "-") {
    document.getElementById("bpForm").dispatchEvent(new Event("submit"));
  }
}