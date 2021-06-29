const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const themeToggleEL = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const currentTheme = localStorage.getItem('theme');
bodyEl.classList.add(LIGHT);

if (currentTheme) {
  bodyEl.classList.add(currentTheme);
  if (currentTheme === DARK) {
    themeToggleEL.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    bodyEl.classList.replace(LIGHT, DARK);
    localStorage.setItem('theme', DARK);
  } else {
    bodyEl.classList.replace(DARK, LIGHT);
    localStorage.setItem('theme', LIGHT);
  }
}

themeToggleEL.addEventListener('change', switchTheme, false);
