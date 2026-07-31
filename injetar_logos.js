const fs = require('fs');

const dsg = 'data:image/png;base64,' + fs.readFileSync('dsg.png').toString('base64');
const logo = 'data:image/png;base64,' + fs.readFileSync('logo.png').toString('base64');
const cgeo = 'data:image/png;base64,' + fs.readFileSync('3cgeo.png').toString('base64');

const htmlContent = fs.readFileSync('index.html', 'utf8');

const scriptToAdd = `
    const B64_DSG = "${dsg}";
    const B64_LOGO = "${logo}";
    const B64_3CGEO = "${cgeo}";
`;

// Insere as constantes no script do index.html
const updatedHtml = htmlContent.replace('<script>', '<script>\n' + scriptToAdd);

fs.writeFileSync('index.html', updatedHtml);
console.log('Logos Base64 injetadas com sucesso em index.html!');
