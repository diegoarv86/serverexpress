const express = require('express');
const path = require('path');
const app = express();

const PUBLIC = path.join(__dirname, 'public');

//creamos un middleware que diga cual es el directorio principal  de la pagina estatica
//los middleware se ejecutan antes  del resto del contenido

app.use(express.static(PUBLIC));

//senfile para enviar archivo

app.get('/', (req, res) => res.sendFile(path.join(PUBLIC, 'index.html')));
app.get('/contacta', (req, res) => res.sendFile(path.join(PUBLIC, 'contacta.html')));
app.get('/localizacion', (req, res) => res.sendFile(path.join(PUBLIC, 'localizacion.html')));
app.get('/*splat', (req, res) => res.sendFile(path.join(PUBLIC, '404.html')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>  console.log(`http://localhost:${PORT}`) );