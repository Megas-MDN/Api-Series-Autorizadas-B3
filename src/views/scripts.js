document.getElementById('home').href = document.URL;
document.getElementById('url').value = document.URL + 'search?';
const btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', (e) => {
  e.preventDefault();
});
