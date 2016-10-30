var segundos = 0;
var minutos = 1;
var llamada;
var ceromin='';
var ceroseg='';

$(document).ready(function() {

    var Pala = function(x_start, y_end){
        this.color_pala = "#336699";
        this.position = {x:x_start, y:70};
        this.size = {w:5, h:24};
        this.y_end = y_end;	
    };

    Pala.prototype.render = function(ctx){
	ctx.fillStyle = this.color_pala;
	ctx.fillRect(	this.position.x,
			this.position.y,
			this.size.w,
			this.size.h);
    };

    Pala.prototype.goUp = function(){
        if(this.position.y >= 15) this.position.y -= 5;
    };

    Pala.prototype.goDown = function(){
        if(this.position.y+this.size.h <= this.y_end) this.position.y += 5;
    };

    Pala.prototype.setKeys = function(keyUp, keyDown){
        var _this = this;
        $(window).keydown(function(event) {
            if ( event.which == keyUp ) {
                _this.goUp()
            }else if( event.which == keyDown ){
                _this.goDown();
            }
        });
    }

    var Bola = function(start_pos_x, start_pos_y, angle){
        this.position = {x:start_pos_x, y:start_pos_y};
        this.color_bola = "#FF0000";
        this.size = 2;
        this.angle =  angle;
    }

    Bola.prototype.render = function(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color_bola;
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, false);
        ctx.fill();
    }

	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");
	var pala_L = new Pala(1, canvas.height);
	var pala_R= new Pala(295, canvas.height);
	pala_L.setKeys(81,65);
	pala_R.setKeys(87,83);
	var bola = new Bola(canvas.width/2, canvas.height/2, 70);
	var izq = 0;
	var der = 0;

    function updateBola() {

        if (bola.position.y < 19) {
            bola.angle = (Math.PI / 180.0) - bola.angle;

        } else if (bola.position.y + bola.size > canvas.height-5) {
            bola.angle = (Math.PI / 180.0) - bola.angle;
        }

        if ((bola.position.x > pala_L.position.x)&&(bola.position.x < pala_L.position.x+pala_L.size.w) &&
            (bola.position.y+bola.size > pala_L.position.y)&&(bola.position.y < pala_L.position.y+pala_L.size.h)){
            var angle = ((bola.position.y + bola.size/2) - (pala_L.position.y + pala_L.size.h/2)) / (pala_L.size.h/2 + bola.size/2);
            bola.angle = Math.PI/180 * (80*angle);

        } else if ((bola.position.x+bola.size < pala_R.position.x+pala_R.size.w) &&
            (bola.position.x+bola.size > pala_R.position.x) &&
            (bola.position.y+bola.size > pala_R.position.y) &&
            (bola.position.y < pala_R.position.y+pala_R.size.h)){
            var angle = ((pala_R.position.y + pala_R.size.h/2) - (bola.position.y + bola.size/2)) / (pala_R.size.h/2 + bola.size/2);
            bola.angle = Math.PI/180 * (180 + 80*angle);
        }

        if (bola.position.x + bola.size < 0){
            cambiaMarcador('der');
            bola = new Bola(150, 100, 65);
        } else if (bola.position.x > canvas.width){
            cambiaMarcador('izq');
            bola = new Bola(150, 100, 20);
        }

        bola.position.x += 7 * Math.cos(bola.angle);
        bola.position.y += 7 * Math.sin(bola.angle);
    }

    function cambiaMarcador(lado){
        if (lado == 'izq') {
            izq ++;
        } else {
            der ++;
        }
    }

	//Declaración de las imagenes
	var img1 = new Image();
	img1.src = "http://as00.epimg.net/img/comunes/fotos/fichas/deportistas/p/piq/large/16430.png";

	var img2 = new Image();
	img2.src = "http://i841.photobucket.com/albums/zz332/Chessdj/VLC.png";

	function renderCampo(ctx){
		ctx.fillStyle = "#31B404";
		ctx.fillRect(0,15,600,400);

		// Dibujar Imagenes
		ctx.drawImage(img1, 50,50,50,50);
		ctx.drawImage(img2, 205,50,50,50);
		ctx.fillStyle = "#000000";
        	ctx.fillText(izq, 110, 10);
        	ctx.fillText(der, 185, 10);
		ctx.clearRect(150,0,1,300);

	
	}


	function render() {
		updateBola();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		renderCampo(ctx);
		pala_L.render(ctx);
		pala_R.render(ctx);
		bola.render(ctx);

	}

	setInterval(render, 100);
});

	function cuentaAtras(){
  		devolvercero(minutos,segundos);
  		segundos = segundos % 60;
  		document.getElementById("reloj").innerHTML=ceromin+minutos+':'+ceroseg+segundos;
  
  		if (minutos ===0 && segundos ===0){
   			alert ("GAME OVER");
    			clearTimeOut(llamada);
  		}	

  		if (segundos ==0){
    			minutos --;
    			segundos+=60;   
  		}   
  		segundos --;
  		var llamada = setTimeout(cuentaAtras,1000);
	}
   
	function devolvercero(minutos,segundos){
  		if (minutos<10){
    			ceromin='0';
  	}

  		if (segundos<10){
    			ceroseg='0';
  		}else {
    			ceroseg='';
  	}

  	return ceroseg;
  	return ceromin;
	}
