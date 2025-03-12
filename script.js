document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  const closeSidebar = document.getElementById('closeSidebar');
  const sidebarLinks = document.querySelectorAll('#sidebar a');
  const mainSections = document.querySelectorAll('main section');
  const themeToggle = document.getElementById('themeToggle');
  const languageToggle = document.getElementById('languageToggle');


  menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });


  closeSidebar.addEventListener('click', function () {
    sidebar.classList.remove('active');
  });

 
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      mainSections.forEach(section => {
        section.classList.remove('active');
      });

     
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }

      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
      }
    });
  });


  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });


  languageToggle.addEventListener('click', function () {
    const isBengali = languageToggle.textContent.includes('বাংলা');
    languageToggle.textContent = isBengali ? '🌐 English' : '🌐 বাংলা';
    alert(isBengali ? 'Switched to English' : 'Switched to Bengali');
  });
});