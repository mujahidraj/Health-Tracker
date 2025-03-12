let isBangla = false; 
let isDarkMode = false; 


document.getElementById("toggleTheme").addEventListener("click", function () {
  isDarkMode = !isDarkMode; 
  document.body.classList.toggle("dark-mode", isDarkMode);
  document.body.classList.toggle("light-mode", !isDarkMode);
  this.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});


document.getElementById("toggleLanguage").addEventListener("click", function () {
  isBangla = !isBangla; 
  this.textContent = isBangla ? "English" : "বাংলা"; 
  updateLanguage(); 
});


document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const feet = parseFloat(document.getElementById("feet").value);
  const inches = parseFloat(document.getElementById("inches").value);
  const weight = parseFloat(document.getElementById("weight").value);


  const heightInMeters = (feet * 12 + inches) * 0.0254;


  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);


  const bmiValueElement = document.getElementById("bmiValue");
  const bmiStateElement = document.getElementById("bmiState");
  const tipsElement = document.getElementById("tips");

  if (bmiValueElement && bmiStateElement && tipsElement) {
    bmiValueElement.textContent = bmi;

 
    if (bmi < 18.5) {
      bmiStateElement.textContent = isBangla ? "ওজন কম" : "Underweight";
      tipsElement.innerHTML = isBangla
        ? `
          <h3>স্বাস্থ্য পরামর্শ (ওজন কম)</h3>
          <ul>
            <li><strong>ক্যালোরি বৃদ্ধি করুন:</strong> আপনার শরীরের চেয়ে বেশি ক্যালোরি গ্রহণ করুন। বাদাম, বীজ, অ্যাভোকাডো এবং পুরো শস্য জাতীয় উচ্চ ক্যালোরিযুক্ত খাবার অন্তর্ভুক্ত করুন।</li>
            <li><strong>প্রোটিন সমৃদ্ধ খাবার খান:</strong> মাছ, মাংস, ডিম, দুধ, ডাল এবং শিম জাতীয় প্রোটিন সমৃদ্ধ খাবার খান।</li>
            <li><strong>শক্তি প্রশিক্ষণ:</strong> ওজন উত্তোলনের মতো ব্যায়াম করুন যাতে পেশী গঠন হয়।</li>
            <li><strong>ঘন ঘন খান:</strong> দিনে ২-৩ বড় খাবারের পরিবর্তে ৫-৬ ছোট খাবার খান।</li>
            <li><strong>স্ন্যাক্স:</strong> বাদাম, শুকনো ফল, দই এবং স্মুদি খান।</li>
            <li><strong>পুষ্টিবিদের পরামর্শ নিন:</strong> ওজন বাড়াতে সমস্যা হলে একজন পুষ্টিবিদের সাথে পরামর্শ করুন।</li>
          </ul>
        `
        : `
          <h3>Health Tips for Underweight</h3>
          <ul>
            <li><strong>Increase Caloric Intake:</strong> Consume more calories than your body burns. Include calorie-dense foods like nuts, seeds, avocados, and whole grains.</li>
            <li><strong>Eat Protein-Rich Foods:</strong> Include lean meats, fish, eggs, dairy, beans, and legumes to build muscle mass.</li>
            <li><strong>Strength Training:</strong> Engage in resistance exercises like weightlifting to gain muscle instead of fat.</li>
            <li><strong>Eat Frequently:</strong> Have 5-6 small meals throughout the day instead of 2-3 large ones.</li>
            <li><strong>Healthy Snacks:</strong> Snack on nuts, dried fruits, yogurt, and smoothies between meals.</li>
            <li><strong>Consult a Dietitian:</strong> If you're struggling to gain weight, seek professional advice.</li>
          </ul>
        `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiStateElement.textContent = isBangla ? "সাধারণ ওজন" : "Normal Weight";
      tipsElement.innerHTML = isBangla
        ? `
          <h3>স্বাস্থ্য পরামর্শ (সাধারণ ওজন)</h3>
          <ul>
            <li><strong>সুষম খাদ্য গ্রহণ করুন:</strong> ফল, শাকসবজি, পুরো শস্য, প্রোটিন এবং স্বাস্থ্যকর চর্বি খান।</li>
            <li><strong>সক্রিয় থাকুন:</strong> সপ্তাহে কমপক্ষে ১৫০ মিনিট মাঝারি ব্যায়াম করুন (যেমন হাঁটা বা সাইকেল চালানো)।</li>
            <li><strong>পানি পান করুন:</strong> দিনে প্রচুর পানি পান করুন।</li>
            <li><strong>প্রক্রিয়াজাত খাবার এড়িয়ে চলুন:</strong> চিনিযুক্ত স্ন্যাক্স, ফাস্ট ফুড এবং প্রক্রিয়াজাত খাবার সীমিত করুন।</li>
            <li><strong>পরিমাণ নিয়ন্ত্রণ করুন:</strong> অতিরিক্ত খাওয়া এড়াতে খাবারের পরিমাণ নিয়ন্ত্রণ করুন।</li>
            <li><strong>নিয়মিত চেকআপ:</strong> নিয়মিত স্বাস্থ্য পরীক্ষা করুন।</li>
          </ul>
        `
        : `
          <h3>Health Tips for Normal Weight</h3>
          <ul>
            <li><strong>Maintain a Balanced Diet:</strong> Eat a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.</li>
            <li><strong>Stay Active:</strong> Aim for at least 150 minutes of moderate exercise (like walking or cycling) per week.</li>
            <li><strong>Hydrate:</strong> Drink plenty of water throughout the day.</li>
            <li><strong>Avoid Processed Foods:</strong> Limit intake of sugary snacks, fast food, and processed meals.</li>
            <li><strong>Monitor Portion Sizes:</strong> Avoid overeating by being mindful of portion sizes.</li>
            <li><strong>Regular Checkups:</strong> Visit your doctor for regular health screenings.</li>
          </ul>
        `;
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiStateElement.textContent = isBangla ? "ওজন বেশি" : "Overweight";
      tipsElement.innerHTML = isBangla
        ? `
          <h3>স্বাস্থ্য পরামর্শ (ওজন বেশি)</h3>
          <ul>
            <li><strong>ক্যালোরি কমান:</strong> আপনার শরীরের চেয়ে কম ক্যালোরি গ্রহণ করুন।</li>
            <li><strong>পুরো খাবার খান:</strong> ফল, শাকসবজি, প্রোটিন এবং পুরো শস্য খান।</li>
            <li><strong>চিনিযুক্ত পানীয় এড়িয়ে চলুন:</strong> সোডা, এনার্জি ড্রিংক এবং চিনিযুক্ত জুস এড়িয়ে চলুন।</li>
            <li><strong>নিয়মিত ব্যায়াম করুন:</strong> কার্ডিও (যেমন দৌড়ানো, সাঁতার) এবং শক্তি প্রশিক্ষণ করুন।</li>
            <li><strong>প্রোগ্রেস ট্র্যাক করুন:</strong> খাদ্য ডায়েরি বা অ্যাপ ব্যবহার করে ক্যালোরি এবং কার্যকলাপ ট্র্যাক করুন।</li>
            <li><strong>সাপোর্ট নিন:</strong> ওজন কমানোর গ্রুপে যোগ দিন বা একজন পুষ্টিবিদের সাথে কাজ করুন।</li>
          </ul>
        `
        : `
          <h3>Health Tips for Overweight</h3>
          <ul>
            <li><strong>Reduce Caloric Intake:</strong> Eat fewer calories than your body burns to lose weight gradually.</li>
            <li><strong>Choose Whole Foods:</strong> Focus on fruits, vegetables, lean proteins, and whole grains.</li>
            <li><strong>Limit Sugary Drinks:</strong> Avoid sodas, energy drinks, and sugary juices.</li>
            <li><strong>Exercise Regularly:</strong> Incorporate cardio (like running, swimming) and strength training into your routine.</li>
            <li><strong>Track Your Progress:</strong> Keep a food diary or use an app to monitor your calorie intake and activity levels.</li>
            <li><strong>Get Support:</strong> Join a weight-loss group or work with a dietitian for guidance.</li>
          </ul>
        `;
    } else {
      bmiStateElement.textContent = isBangla ? "স্থূলতা" : "Obese";
      tipsElement.innerHTML = isBangla
        ? `
          <h3>স্বাস্থ্য পরামর্শ (স্থূলতা)</h3>
          <ul>
            
            <li><strong>পেশাদার পরামর্শ নিন:</strong> একজন ডাক্তার বা পুষ্টিবিদের সাথে পরামর্শ করুন।</li>
            <li><strong>স্বাস্থ্যকর খাদ্য গ্রহণ করুন:</strong> পুরো, অপ্রক্রিয়াজাত খাবার খান এবং উচ্চ ক্যালোরিযুক্ত খাবার এড়িয়ে চলুন।</li>
            <li><strong>শারীরিক কার্যকলাপ বাড়ান:</strong> হাঁটা বা সাঁতার কাটার মতো কম প্রভাবের ব্যায়াম দিয়ে শুরু করুন এবং ধীরে ধীরে তীব্রতা বাড়ান।</li>
            <li><strong>বাস্তবসম্মত লক্ষ্য নির্ধারণ করুন:</strong> ধীরে ধীরে ওজন কমানোর লক্ষ্য রাখুন (সপ্তাহে ১-২ পাউন্ড)।</li>
            <li><strong>আচরণগত পরিবর্তন:</strong> অতিরিক্ত খাওয়ার কারণগুলি চিহ্নিত করুন এবং স্বাস্থ্যকর অভ্যাস গড়ে তুলুন।</li>
            <li><strong>চিকিৎসা সহায়তা:</strong> কিছু ক্ষেত্রে, ডাক্তার ওষুধ বা সার্জারির পরামর্শ দিতে পারেন।</li>
          </ul>
        `
        : `
          <h3>Health Tips for Obese</h3>
          <ul>
            <li><strong>Consult a Professional:</strong> Work with a doctor or dietitian to create a personalized weight-loss plan.</li>
            <li><strong>Adopt a Healthy Diet:</strong> Focus on whole, unprocessed foods and avoid high-calorie, low-nutrient options.</li>
            <li><strong>Increase Physical Activity:</strong> Start with low-impact exercises like walking or swimming, and gradually increase intensity.</li>
            <li><strong>Set Realistic Goals:</strong> Aim for gradual weight loss (1-2 pounds per week).</li>
            <li><strong>Behavioral Changes:</strong> Identify triggers for overeating and develop healthier coping mechanisms.</li>
            <li><strong>Medical Interventions:</strong> In some cases, medications or surgery may be recommended by a healthcare provider.</li>
          </ul>
        `;
    }
  }
});


function updateLanguage() {
  const bmiStateElement = document.getElementById("bmiState");
  const tipsElement = document.getElementById("tips");

  if (bmiStateElement.textContent !== "-") {
    document.getElementById("bmiForm").dispatchEvent(new Event("submit"));
  }
}