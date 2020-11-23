const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;



//Midelware -> Instruccion o callback que se va a ejecutar siempre, sin importar la url
app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'abel'
    });
})

app.get('/about', function(req, res) {
    res.render('about');
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})