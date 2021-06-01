/*const body = document.querySelector('body');
console.log(body);
console.log(body.dataset);
const theme = document.querySelector('#theme-switch-toggle');
console.log(theme);

theme.addEventListener('change', onTheme);

function onTheme(evt) {
  if (evt.currentTarget.checked) {
    body.classList.toggle('dark-theme');
    localStorage.setItem('dark', 'dark-theme');
    theme.checked = true;
  }
}

darkTheme();

function darkTheme() {
  const saveTheme = localStorage.getItem('dark');
  if (saveTheme === 'dark-theme') {
  }
}*/

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchInputEl = document.querySelector('#theme-switch-toggle');

themeSwitchInputEl.addEventListener('change', onChangeTheme);


function onChangeTheme(event) {
  document.body.classList.toggle(Theme.DARK);

  if (event.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === Theme.DARK) {
    document.body.classList = savedTheme;
    themeSwitchInputEl.checked = true;
  }
}

currentTheme();