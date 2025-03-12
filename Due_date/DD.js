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

document.getElementById("dueDateForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const lmp = new Date(document.getElementById("lmp").value);


  const dueDate = new Date(lmp);
  dueDate.setDate(dueDate.getDate() + 280); 


  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDueDate = dueDate.toLocaleDateString(undefined, options);


  const dueDateElement = document.getElementById("dueDate");
  const tipsElement = document.getElementById("tips");

  if (dueDateElement && tipsElement) {
    dueDateElement.textContent = formattedDueDate;

    
    tipsElement.innerHTML = isBangla
      ? `
        <h3>গর্ভাবস্থার পরামর্শ</h3>
        <ul>
          <li><strong>নিয়মিত চেকআপ:</strong> আপনার ডাক্তারের সাথে নিয়মিত চেকআপ করুন।</li>
          <li><strong>সুষম খাদ্য:</strong> ফল, শাকসবজি, এবং প্রোটিন সমৃদ্ধ খাবার খান।</li>
          <li><strong>পর্যাপ্ত বিশ্রাম:</strong> প্রতিদিন পর্যাপ্ত ঘুমান এবং বিশ্রাম নিন।</li>
          <li><strong>হালকা ব্যায়াম:</strong> হাঁটা বা প্রসবপূর্ব যোগব্যায়াম করুন।</li>
          <li><strong>ধূমপান ও মদ্যপান এড়িয়ে চলুন:</strong> এটি শিশুর স্বাস্থ্যের জন্য ক্ষতিকর।</li>
        </ul>
      `
      : `
        <h3>Pregnancy Tips</h3>
        <ul>
          <li><strong>Regular Checkups:</strong> Visit your doctor for regular prenatal checkups.</li>
          <li><strong>Balanced Diet:</strong> Eat fruits, vegetables, and protein-rich foods.</li>
          <li><strong>Get Enough Rest:</strong> Sleep and rest adequately every day.</li>
          <li><strong>Light Exercise:</strong> Walk or do prenatal yoga.</li>
          <li><strong>Avoid Smoking and Alcohol:</strong> These are harmful to your baby's health.</li>
        </ul>
      `;
  }
});

function updateLanguage() {
  const dueDateElement = document.getElementById("dueDate");
  const tipsElement = document.getElementById("tips");

  if (dueDateElement.textContent !== "-") {
    document.getElementById("dueDateForm").dispatchEvent(new Event("submit"));
  }
}