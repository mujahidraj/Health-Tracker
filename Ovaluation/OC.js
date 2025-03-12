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


document.getElementById("periodForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const lmp = new Date(document.getElementById("lmp").value);
  const cycleLength = parseInt(document.getElementById("cycleLength").value);


  const nextPeriod = new Date(lmp);
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);


  const ovulationDate = new Date(lmp);
  ovulationDate.setDate(ovulationDate.getDate() + (cycleLength - 14));
  const fertileStart = new Date(ovulationDate);
  fertileStart.setDate(fertileStart.getDate() - 5);
  const fertileEnd = new Date(ovulationDate);
  fertileEnd.setDate(fertileEnd.getDate() + 1);


  const pregnancyTestDay = new Date(ovulationDate);
  pregnancyTestDay.setDate(pregnancyTestDay.getDate() + 14);

  const dueDate = new Date(lmp);
  dueDate.setDate(dueDate.getDate() + 280);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatDate = (date) => date.toLocaleDateString(undefined, options);


  document.getElementById("nextPeriod").textContent = formatDate(nextPeriod);
  document.getElementById("fertileWindow").textContent = `${formatDate(fertileStart)} - ${formatDate(fertileEnd)}`;
  document.getElementById("ovulationDate").textContent = formatDate(ovulationDate);
  document.getElementById("pregnancyTestDay").textContent = formatDate(pregnancyTestDay);
  document.getElementById("dueDate").textContent = formatDate(dueDate);


  const tipsElement = document.getElementById("tips");
  tipsElement.innerHTML = isBangla
    ? `
      <h3>স্বাস্থ্য পরামর্শ</h3>
      <ul>
        <li><strong>নিয়মিত চেকআপ:</strong> আপনার ডাক্তারের সাথে নিয়মিত চেকআপ করুন।</li>
        <li><strong>সুষম খাদ্য:</strong> ফল, শাকসবজি, এবং প্রোটিন সমৃদ্ধ খাবার খান।</li>
        <li><strong>পর্যাপ্ত বিশ্রাম:</strong> প্রতিদিন পর্যাপ্ত ঘুমান এবং বিশ্রাম নিন।</li>
        <li><strong>হালকা ব্যায়াম:</strong> হাঁটা বা যোগব্যায়াম করুন।</li>
        <li><strong>ধূমপান ও মদ্যপান এড়িয়ে চলুন:</strong> এটি স্বাস্থ্যের জন্য ক্ষতিকর।</li>
      </ul>
    `
    : `
      <h3>Health Tips</h3>
      <ul>
        <li><strong>Regular Checkups:</strong> Visit your doctor for regular checkups.</li>
        <li><strong>Balanced Diet:</strong> Eat fruits, vegetables, and protein-rich foods.</li>
        <li><strong>Get Enough Rest:</strong> Sleep and rest adequately every day.</li>
        <li><strong>Light Exercise:</strong> Walk or do yoga.</li>
        <li><strong>Avoid Smoking and Alcohol:</strong> These are harmful to your health.</li>
      </ul>
    `;
});


function updateLanguage() {
  const nextPeriodElement = document.getElementById("nextPeriod");
  const tipsElement = document.getElementById("tips");

  if (nextPeriodElement.textContent !== "-") {
    document.getElementById("periodForm").dispatchEvent(new Event("submit"));
  }
}