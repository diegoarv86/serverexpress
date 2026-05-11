const express = require('express');

const app = express();

//creamos un middleware que diga cual es el directorio principal  de la pagina estatica
//los middleware se ejecutan antes  del resto del contenido

app.use(express.static('public'));

//senfile para enviar archivo

app.get('/contacta',(req,res) =>{
    res.sendFile(`${__dirname}/public/contacta.html`);
});

app.get('/localizacion',(req,res) =>{
    res.sendFile(`${__dirname}/public/localizacion.html`);
});

app.get('/*splat',(req,res) =>{
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(8080,()=>{console.log('http://localhost:8080')});