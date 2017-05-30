
 var products = [
 	{ name: "Solid Frame Hacksaw",
 	  description: " Solid Frame Hacksaw allows for a 4.375 inch cutting depth and can handle many cutting applications. If you want comfortable operation and smooth cuts for your pro or DIY jobs, this hand saw is a great choice.",
 	  price: "$12.99",
 	  url:"./img/hacksaw1.jpg"
 	},
 	{ name: "Standard Hacksaw",
 	  description: "The 10 in. Hacksaw is designed for a variety of uses at home and on the job. The frame is made with heavy-duty steel for durability and adjusts to fit both 10 in. and 12 in. standard hacksaw blades. The butcher-style handle is made with a high-impact plastic material and has finger grips for more comfort and control.",
 	  price: "$59.99",
 	  url: "./img/hacksaw2.jpg"
 	},
 	{ name: "General Hacksaw",
 	  description: "General purpose 300mm hacksaw with cast aluminium handle and square section steel frame. Simple wing nut blade tensioner.",
 	  price: "$28.99",
 	  url: "./img/hacksaw3.jpg"
 	},
 	{ name: "High-Tension Hacksaw",
 	  description: "Stanley's Hi-Tension Hacksaw is strong, durable and ergonomic making it ideal of hard to reach places.",
 	  price: "15.65",
 	  url: "./img/hacksaw4.jpg"
 	},
 	{ name: "Low-Profile Hacksaw",
 	  description: "This hacksaw has a durable, one-piece die-cast metal body designed for the ultra-high tension of 330 pounds. It boasts a pre-tensioning mechanism that holds the blade in place for quick and easy blade changes, bringing real convenience to this versatile, useful hand tool.",
 	  price: "$.14.50",
 	  url: "./img/hacksaw5.jpg"
 	},
 	{ name: "Mini Hacksaw",
 	  description: "Ergonomically designed grip with thumb rest for maximum comfort. Handle covers blade to help protect user’s hands.",
 	  price: "$3.99",
 	  url: "./img/hacksaw6.jpg"
 	},
 	{ name: "Rubber Grip Hacksaw",
 	  description:"The 12 inch hacksaw is durable and comfortable. Its full grip, bi-material handle is comfortable and helps protect your knuckles. With robust, all-metal design, compact frame, 225-pounds of blade tension, large tensioning knob and ability to cut at 90° and 180° angels for flush cuts, this is an indispensable tool for your toolbox or workbench.",
 	  price:"$150.00",
 	  url: "./img/hacksaw7.jpg"
 	},
 	{ name: "Bloody Hacksaw",
 	  description: "The Tubular High-Tension Hacksaw features 45° and 90° adjustable blade angles as well as 300lbs of blade tension for flush cuts. The hacksaw can store up to 8 blades and has a large tension knob to make changing blades quick and easy.",
 	  price: "$300.99",
 	  url: "./img/hacksaw8.jpg"
 	}
 ];
// console.log(products[0].name);


var productCards = document.getElementById("productCards");

for (var i = 0; i < products.length; i++) {
	console.log(products[i].name);
	// console.log(reindeer[i]);
	// 
	// "<div id='products" + i + "''>"
	console.log(products.url);
	productCards.innerHTML += "<div id='products" + i + "''>"
		 + "<p>Item: " + products[i].name + "</p>"
		+ "<p>Description: " + products[i].description + "</p>"
		+"<p>Price: " + products[i].price + "</p>"
		+"<img src=" + products[i].url + "></div>";
}
