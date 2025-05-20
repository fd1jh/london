// Переключатель темы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});

// Загрузка сохраненной темы из localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.checked = true;
  }

  // Скрываем приветственную страницу при переходе на другие разделы
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const placeId = this.getAttribute('data-place');

      // Скрыть все места
      document.querySelectorAll('.place').forEach(place => {
        place.classList.remove('visible');
        place.classList.add('hidden');
      });

      // Скрыть приветственную страницу, если она видна
      const welcomePage = document.getElementById('welcome');
      if (welcomePage) {
        welcomePage.classList.remove('visible');
        welcomePage.classList.add('hidden');
      }

      // Показать выбранное место или приветственную страницу
      if (placeId) {
        const selectedPlace = document.getElementById(placeId);
        if (selectedPlace) {
          selectedPlace.classList.remove('hidden');
          selectedPlace.classList.add('visible');
        }
      } else {
        if (welcomePage) {
          welcomePage.classList.remove('hidden');
          welcomePage.classList.add('visible');
        }
      }
    });
  });
});