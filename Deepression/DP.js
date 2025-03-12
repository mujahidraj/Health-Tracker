let isBangla = false; // Default language is English
let isDarkMode = false; // Default theme is light mode

// Theme toggle button
document.getElementById("themeToggle").addEventListener("click", function () {
  isDarkMode = !isDarkMode; // Toggle theme
  document.body.classList.toggle("dark-mode", isDarkMode);
  document.body.classList.toggle("light-mode", !isDarkMode);
  this.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Language toggle button
document.getElementById("languageToggle").addEventListener("click", function () {
  isBangla = !isBangla; // Toggle language
  this.textContent = isBangla ? "English" : "বাংলা"; // Update button text
  updateLanguage(); // Update content based on language
});

// PHQ-9 form submission
document.getElementById("phq9Form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const q1 = parseInt(document.getElementById("q1").value);
  const q2 = parseInt(document.getElementById("q2").value);
  const q3 = parseInt(document.getElementById("q3").value);
  const q4 = parseInt(document.getElementById("q4").value);
  const q5 = parseInt(document.getElementById("q5").value);
  const q6 = parseInt(document.getElementById("q6").value);
  const q7 = parseInt(document.getElementById("q7").value);
  const q8 = parseInt(document.getElementById("q8").value);
  const q9 = parseInt(document.getElementById("q9").value);

  // Calculate PHQ-9 score
  const phq9Score = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9;

  // Determine depression severity
  let depressionSeverity;
  if (phq9Score >= 0 && phq9Score <= 4) {
    depressionSeverity = "Minimal or None";
  } else if (phq9Score >= 5 && phq9Score <= 9) {
    depressionSeverity = "Mild";
  } else if (phq9Score >= 10 && phq9Score <= 14) {
    depressionSeverity = "Moderate";
  } else if (phq9Score >= 15 && phq9Score <= 19) {
    depressionSeverity = "Moderately Severe";
  } else if (phq9Score >= 20 && phq9Score <= 27) {
    depressionSeverity = "Severe";
  }

  // Display PHQ-9 score and severity
  const phq9ScoreElement = document.getElementById("phq9Score");
  const depressionSeverityElement = document.getElementById("depressionSeverity");
  const tipsElement = document.getElementById("tips");

  if (phq9ScoreElement && depressionSeverityElement && tipsElement) {
    phq9ScoreElement.textContent = phq9Score;
    depressionSeverityElement.textContent = depressionSeverity;

    // Provide recommendations based on severity
    tipsElement.innerHTML = isBangla
      ? `
        <h3>সুপারিশ</h3>
        <ul>
          <li><strong>পেশাদার সাহায্য নিন:</strong> যদি আপনার স্কোর 10 বা তার বেশি হয়, একজন মানসিক স্বাস্থ্য পেশাদারের সাথে পরামর্শ করুন।</li>
          <li><strong>নিয়মিত ব্যায়াম:</strong> সপ্তাহে কমপক্ষে 150 মিনিট ব্যায়াম করুন।</li>
          <li><strong>সামাজিক সমর্থন:</strong> বন্ধু এবং পরিবারের সাথে সময় কাটান।</li>
          <li><strong>স্বাস্থ্যকর খাদ্য:</strong> ফল, শাকসবজি, এবং পুরো শস্য খান।</li>
          <li><strong>নিয়মিত ঘুম:</strong> প্রতিদিন 7-9 ঘন্টা ঘুমান।</li>
        </ul>
      `
      : `
        <h3>Recommendations</h3>
        <ul>
          <li><strong>Seek Professional Help:</strong> If your score is 10 or higher, consult a mental health professional.</li>
          <li><strong>Exercise Regularly:</strong> Aim for at least 150 minutes of exercise per week.</li>
          <li><strong>Social Support:</strong> Spend time with friends and family.</li>
          <li><strong>Eat Healthy:</strong> Include fruits, vegetables, and whole grains in your diet.</li>
          <li><strong>Regular Sleep:</strong> Get 7-9 hours of sleep daily.</li>
        </ul>
      `;
  }
});

// Function to update language
function updateLanguage() {
  const phq9ScoreElement = document.getElementById("phq9Score");
  const depressionSeverityElement = document.getElementById("depressionSeverity");
  const tipsElement = document.getElementById("tips");

  if (phq9ScoreElement.textContent !== "-") {
    document.getElementById("phq9Form").dispatchEvent(new Event("submit"));
  }
}