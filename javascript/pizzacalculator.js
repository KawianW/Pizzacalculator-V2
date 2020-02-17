	
	
	var totalSmallPizza = 0;
	var totalMediumPizza = 0;
	var totalLargePizza = 0;
	var totalTopping = 0;
	var pizzaSize;
	var pizzaTopping;
	var totalPrice = 0;

	// deze code geeft aan hoe duur de pizza's zijn.
	const priceSmallPizza 	= 2;
	const priceMediumPizza	= 4;
	const priceLargePizza 	= 6;
	const topping 			= 1;

	document.getElementById('size').addEventListener('change', function(){
		totalPrice = 0;
		if(event.target.value == 'small'){
			totalPrice += priceSmallPizza
		}
		if(event.target.value == 'medium'){
			totalPrice += priceMediumPizza
		}
		if(event.target.value == 'large'){
			totalPrice += priceLargePizza
		}

	})

	document.getElementById('extra').addEventListener('change', function(){
		if(event.target.value !== 'geen'){
			totalPrice += topping;
		}

	})

	


	// deze code gaat kijken of 
	
 
 	// deze code geeft de berekening van wat de klant heeft besteld.
	
 		document.write( totalSmallPizza + ' small ' + ' ' + '€' + priceSmallPizza + "<br>");
		
 		document.write( totalMediumPizza + ' medium ' +' ' + '€' + priceMediumPizza + "<br>" );
		
		document.write( totalLargePizza + ' large ' +' ' + '€' + priceLargePizza + "<br />");

function show() {
	document.getElementById('module').style.display = 'block';
}
