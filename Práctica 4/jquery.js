// El menu por defecto al cargar la pagina sale desplegado, 
// pero si pasamos por encima de el se pliega y despliega dependiendo de la posicion del cursor
$(document).ready(function() {
    $('ul li:has(ul)').hover(function(e) {
         $(this).find('ul').css({display: "block"});
     },
     function(e) {
         $(this).find('ul').css({display: "none"});
     });
});;


// jquery para que al clicar una img, se muestre un alert con las caracteristicas (inventadas) de la camiseta
$(document).ready(function(){
    $("#rmfc").click(function(){
        alert("Camiseta Real Madrid\nTemporada 2016-2017\nPrecio: 30,25€\n100% Poliester\nCuello de camisa\nManga corta");
    });

    $("#sfc").click(function(){
        alert("Camiseta Sevilla Futbol Cub\nTemporada 2016-2017\nPrecio: 60,99€\n100% Poliester\nCuelo de camisa\nManga corta\nSin publicidad");
    });

    $("#fcb").click(function(){
        alert("Camiseta Futbol Club Barcelona\nTemporada 2016-2017\nPrecio: 83,25€\n100% Poliester\nCuello de pico\nManga corta\nSin publicidad");
    });

    $("#bvb").click(function(){
        alert("Camiseta Borussia Dortmund\nTemporada 2016-2017\nPrecio: 70,15€\n100% Poliester\nCuello redondo\nManga corta");
    });

    $("#jfc").click(function(){
        alert("Camiseta Juventus Futbol Club\nTemporada 2016-2017\nPrecio: 65,15€\n100% Poliester\nCuello redondo\nManga corta");
    });

    $("#vfc").click(function(){
        alert("Camiseta Valencia Futbol Club\nTemporada 2016-2017\nPrecio: 55,75€\n100% Poliester\nCuello redondo\nManga corta\nSin publicidad");
    });

    $("#ath").click(function(){
        alert("Camiseta Athletic Club de Bilbao\nTemporada 2016-2017\nPrecio: 60,15€\n100% Poliester\nCuello de pico\nManga corta");
    });

    $("#acm").click(function(){
        alert("Camiseta AC Milan\nPrecio: 60,15€\nTemporada 2016-2017\n100% Poliester\nCuello de pico\nManga corta");
    });
    
});
