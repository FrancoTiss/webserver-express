const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express hbs egine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'fRaNco tiSSeRa'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

/* app.get('/', (req, res) => {

    //res.send('Hello World');
    let salida = {
        nombre: 'Franco',
        edad: 27,
        url: req.url
    }

    res.send(salida);

}); */

app.listen(port, () => console.log(`Escuchando peticiones del puerto ${ port }`));