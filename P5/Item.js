var Item = function Item(imagen){
	this.image = imagen;
	this.titulo = "Punta Cana";
	this.price = 0.00;
};

// Get random price in range min, max
Item.prototype.getPrice = function(){
	var min = 120;
	var max = 500;
	return (Math.random() * (max - min) + min).toFixed(2);
}

exports.Item = Item;
