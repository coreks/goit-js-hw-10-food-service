const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const LIGHT = Theme.LIGHT;
const DARK = Theme.DARK;

// localStorage.setItem('theme', JSON.stringify(LIGHT));
// localStorage.setItem('theme', JSON.stringify(DARK));

const checkboxEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');
bodyEl.classList.add('light-theme');

checkboxEl.addEventListener('change', onCheckboxClick);

function onCheckboxClick(e) {
  if (e.currentTarget.checked) {
    return (
      bodyEl.classList.replace('light-theme', 'dark-theme'), localStorage.setItem('theme', DARK)
    );
  }
  return (
    bodyEl.classList.replace('dark-theme', 'light-theme'), localStorage.setItem('theme', LIGHT)
  );
}

// console.log(JSON.stringify(Theme.LIGHT));
