const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// console.log(JSON.stringify(Theme));

// const LIGHT = Theme.LIGHT;
// const DARK = Theme.DARK;

// // localStorage.setItem('theme', JSON.stringify(LIGHT));
// // localStorage.setItem('theme', JSON.stringify(DARK));

const checkboxEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');
// bodyEl.classList.add('light-theme');

// checkboxEl.addEventListener('change', onCheckboxClick);

// function onCheckboxClick(e) {
//   if (e.currentTarget.checked) {
//     return (
//       bodyEl.classList.replace('light-theme', 'dark-theme'), localStorage.setItem('theme', DARK)
//     );
//   }
//   return (
//     bodyEl.classList.replace('dark-theme', 'light-theme'), localStorage.setItem('theme', LIGHT)
//   );
// }

// console.log(JSON.stringify(Theme.LIGHT));

// const changeThemeToDark = () => {
//   bodyEl.classList.remove('light-theme');
//   bodyEl.classList.add('dark-theme');
//   localStorage.setItem('theme', 'dark-theme');
// };

// const changeThemeToLight = () => {
//   bodyEl.classList.remove('dark-theme');
//   bodyEl.classList.add('light-theme');
//   localStorage.setItem('theme', 'light-theme');
// };

// checkboxEl.addEventListener('change', e => {
//   if (e.currentTarget.checked) {
//     changeThemeToDark();
//   } else {
//     changeThemeToLight();
//   }
// });

let theme = localStorage.getItem('theme');
if (theme) bodyEl.classList.add('theme', theme);
checkboxEl.checked = theme === 'dark - theme' ? true : false;
checkboxEl.addEventListener('change', function () {
  if (this.checked) {
    bodyEl.classList.remove('light-theme');
    bodyEl.classList.add('dark-theme');
    window.localStorage.setItem('theme', 'dark-theme');
  } else {
    bodyEl.classList.remove('dark-theme');
    bodyEl.classList.add('light-theme');
    window.localStorage.setItem('theme', 'light-theme');
  }
});
