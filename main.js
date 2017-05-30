








var productCards = document.getElementById("productCards");

for (var i = 0; i < reindeer.length; i++) {
	// console.log(colors[i]);
	// console.log(reindeer[i]);
	// 
	
	productCards.innerHTML += "<div id=product" + i> + 
		"<p>Item: " + products[i].name + "</p>"
		+ "<p>Cost: " + products[i].description + "</p>" 
		+ "<p>Item: " + products[i].price + "</p>" 
		+ "<img src='" + products[i].url + "'</p>"
}