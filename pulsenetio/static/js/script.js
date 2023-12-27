// Cacheing theme 

const body = document.body;
const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

function toggleDarkMode() {
  if (body.classList.contains('light')){
    body.classList.toggle('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  else{
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
}