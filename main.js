async function loadComponent(id, path) {
    try {
      const res = await fetch(path);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(`Nem sikerült betölteni a(z) ${path} fájlt`, err);
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar', 'components/navbar.html');
    loadComponent('hero', 'components/hero.html');
    loadComponent('products', 'components/products.html');
    loadComponent('menu', 'components/menu.html');
    loadComponent('mission', 'components/mission.html');
    loadComponent('about', 'components/about.html');
    loadComponent('rami', 'components/rami.html');
  });

  fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });