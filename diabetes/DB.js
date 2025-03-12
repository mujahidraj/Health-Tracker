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

document.getElementById("hba1cForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const hba1c = parseFloat(document.getElementById("hba1c").value);


  const eag = (28.7 * hba1c - 46.7).toFixed(1);


  const eagValueElement = document.getElementById("eagValue");
  const tipsElement = document.getElementById("tips");

  if (eagValueElement && tipsElement) {
    eagValueElement.textContent = eag;


    tipsElement.innerHTML = isBangla
      ? `
        <h3>স্বাস্থ্য পরামর্শ</h3>
        <ul>
          <li><strong>রক্তে শর্করা নিয়ন্ত্রণ:</strong> নিয়মিত রক্তে শর্করা পরীক্ষা করুন এবং ডাক্তারের পরামর্শ অনুসরণ করুন।</li>
          <li><strong>সুষম খাদ্য:</strong> কম গ্লাইসেমিক সূচকযুক্ত খাবার খান, যেমন শাকসবজি, ফল এবং পুরো শস্য।</li>
          <li><strong>নিয়মিত ব্যায়াম:</strong> সপ্তাহে কমপক্ষে 150 মিনিট ব্যায়াম করুন।</li>
          <li><strong>ওজন নিয়ন্ত্রণ:</strong> স্বাস্থ্যকর ওজন বজায় রাখুন।</li>
          <li><strong>ধূমপান ও মদ্যপান এড়িয়ে চলুন:</strong> এটি রক্তে শর্করার মাত্রা বাড়াতে পারে।</li>
        </ul>
      `
      : `
        <h3>Health Tips</h3>
        <ul>
          <li><strong>Monitor Blood Sugar:</strong> Regularly check your blood sugar levels and follow your doctor's advice.</li>
          <li><strong>Balanced Diet:</strong> Eat low-glycemic index foods like vegetables, fruits, and whole grains.</li>
          <li><strong>Exercise Regularly:</strong> Aim for at least 150 minutes of exercise per week.</li>
          <li><strong>Maintain a Healthy Weight:</strong> Keep your weight in check.</li>
          <li><strong>Avoid Smoking and Alcohol:</strong> These can increase blood sugar levels.</li>
        </ul>
      `;
  }
});

function updateLanguage() {
  const eagValueElement = document.getElementById("eagValue");
  const tipsElement = document.getElementById("tips");

  if (eagValueElement.textContent !== "-") {
    document.getElementById("hba1cForm").dispatchEvent(new Event("submit"));
  }
}