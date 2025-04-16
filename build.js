const fs = require('fs');
const path = require('path');

// A komponens fájlok elérési útjai
const components = [
  'components/navbar.html',
  'components/hero.html',
  'components/products.html',
  'components/menu.html',
  'components/mission.html',
  'components/about.html',
  'components/rami.html'
];

// Az output fájl, ahova összefűzzük az összes HTML tartalmat
const outputFilePath = 'dist/index.html';

// Az index.html fejlécének és láblécének szövege
const header = `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gladiator</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
`;

const footer = `
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`;

// Fájlok beolvasása és összefűzése
let finalHTML = header;

components.forEach(component => {
  const componentPath = path.join(__dirname, component);
  const content = fs.readFileSync(componentPath, 'utf-8');
  finalHTML += content;
});

finalHTML += footer;

// Az összefűzött HTML fájl mentése
fs.mkdirSync('dist', { recursive: true }); // Létrehozza a 'dist' mappát, ha nem létezik
fs.writeFileSync(outputFilePath, finalHTML);

console.log('A build sikeresen elkészült: ' + outputFilePath);
