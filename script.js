const hamburger = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const languageDropdown = document.querySelector('.language-switcher');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Закрываем языковое меню при клике вне его области
document.addEventListener('click', (e) => {
  if (!languageDropdown.contains(e.target)) {
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown) {
      dropdown.classList.remove('active');
    }
  }
});

// Открытие/закрытие языкового меню
languageDropdown.addEventListener('click', (e) => {
  e.stopPropagation();
  const dropdown = document.querySelector('.language-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('active');
  }
});


// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Заголовок по словам
  const headerSpans = document.querySelectorAll('.animated-header span');
  headerSpans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.3}s`;
  });

  // Кнопка "Читать больше"
  const readMoreBtn = document.querySelector('.read-more-btn');
  const textBlocks = document.querySelectorAll('.hero-subtext, .hero-details');

  readMoreBtn.addEventListener('click', () => {
    textBlocks.forEach(block => block.classList.toggle('expanded'));
    if (readMoreBtn.textContent === '...') {
      readMoreBtn.textContent = 'Свернуть';
    } else {
      readMoreBtn.textContent = '...';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.animated-header');
  const texts = [
    'Добро пожаловать в мир Shirin!',
    'Вкус известный каждому.',
    'Здесь вы можете узнать больше о нас и нашем продукте.',
  ];

  let currentIndex = 0;

  // Функция для смены текста
  function changeText() {
    header.innerHTML = ''; // Очищаем текущий текст
    const spanElements = texts[currentIndex].split(' ').map((word) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.opacity = 0;
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(30px)';
      span.style.transition = 'all 0.6s ease';
      return span;
    });

    // Добавляем слова поочередно с задержкой
    spanElements.forEach((span, i) => {
      setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = 'translateY(0)';
      }, i * 100); // Задержка между словами
      header.appendChild(span); // Добавляем слово в заголовок
      header.appendChild(document.createTextNode(' ')); // Пробел между словами
    });

    // Меняем индекс и запускаем следующий текст
    currentIndex = (currentIndex + 1) % texts.length; // Зацикливаем
    setTimeout(changeText, 4000); // Интервал между сменой текстов
  }

  changeText(); // Запуск функции
});
