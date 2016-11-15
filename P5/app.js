var express = require('express');
var Item = require('./Item.js').Item;
var app = express();

// Configure jade to be our rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Enable boostrap from npm as a served static directory
app.use("/libs",express.static('node_modules/bootstrap/dist'));

// Our CSS and JS files
app.use("/public",express.static('public'));


/*
// Use 500px API to get random pictures for our products
var API500px = require('500px');
var api500px = new API500px("YecP85RjzG08DN0MqvgFa0N780dNaDmJX6iTPbYp");
var pics = [
    new Item("http://www.camisetasfutbolbaratases.com/images/La_Liga/Camiseta_Barcelona_primera_equipacion_2016_2017_baratas.jpg", "FC Barcelon", "83,25"),
    new Item("http://www.camisetasfutbolbaratases.com/images/La_Liga/Camiseta_Sevilla_primera_equipacion_2016_2017_baratas.jpg", "Sevilla FC", "60,99"),
    new Item("http://www.camisetasfutbolbaratases.com/images/La_Liga/Camiseta_Real_Madrid_primera_equipacion_2016_2017_baratas.jpg", "Real Madrid CF", "30,25"),
    new Item("http://www.camisetasfutbolbaratases.com/images/Bundesliga/Camiseta_Dortmund_primera_equipacion_2016_2017_baratas.jpg", "Borussia Dortmund", "70,15"),
    new Item("http://www.camisetasfutbolbaratases.com/images/Serie_A/Camiseta_Juventus_primera_equipacion_2016_2017_baratas.jpg", "Juventus FC", "65,15"),
    new Item("http://www.camisetasfutbolbaratases.com/images/La_Liga/Camiseta_Valencia_primera_equipacion_2016_2017_baratas.jpg", "Valencia CF", "55,75"),
    new Item("http://www.camisetasfutbolbaratases.com/images/Ligue_1/Camiseta_Athletic_Bilbao_primera_equipacion_2016_2017_baratas.jpg", "Athletic club de Bilbao", "60,15"),
    new Item("http://www.camisetasfutbolbaratases.com/images/Serie_A/Camiseta_AC_Milan_primera_equipacion_2016_2017_baratas.jpg", "AC Milan", "60,15"),
//  new Item("http://www.camisetasfutbolbaratases.com/images/La_Liga/Camiseta_Atletico_Madrid_primera_equipacion_2016_2017_baratas.jpg", "Atlético de Madrid", "70,99")
];
*/

// Use 500px API to get random pictures for our products
var API500px = require('500px');
var api500px = new API500px("YecP85RjzG08DN0MqvgFa0N780dNaDmJX6iTPbYp");

api500px.photos.searchByTerm('Punta Cana', {'sort': 'created_at', 'rpp': '10','image_size':200},  function(error, results) {
	// Do something
	pics = results.photos.map(function(a){
		// Compose object to be used in show items template
		return new Item(a.image_url);
	});
});

// Render frontpage
app.get('/', function (req, res) {
    res.render('portada',{
        pics: pics
    });
});


// Server start
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
