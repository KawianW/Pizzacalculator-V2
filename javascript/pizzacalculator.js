// alert('een small pizza kost €2, een medium pizza kost €4 en eenn Large pizza kost €6.');
// 	var someMore = 'ja'; 
// 	var totalSmallPizza = 0;
// 	var totalMediumPizza = 0;
// 	var totalLargePizza = 0; 

// 	// deze code gaat kijken of 
// 	while(someMore == 'ja'){
// 		var pizzaSize 			= prompt("wat voor afmeting pizza wilt u? keuze uit small medium large");
// 			pizzaSize			= pizzaSize.toLowerCase();
// 		// deze code geeft aan hoeveel pizza's de klant wilt hebben.
// 		var amountPizza			= prompt("Hoeveel pizza's wilt u van " + pizzaSize);

// 		if(pizzaSize == 'small' ){
//             totalSmallPizza = totalSmallPizza + Number( amountPizza);
// 		}	
// 		if(pizzaSize == 'medium' ){
// 			totalMediumPizza = totalMediumPizza + Number( amountPizza);
// 		}	
// 		if(pizzaSize == 'large' ){
// 			totalLargePizza = totalLargePizza + Number( amountPizza);
//         }	
        
// 		someMore = prompt(" zou u er nog meer pizza's willen hebben? ");

// 	}
	
// 	// deze code geeft aan hoe duur de pizza's zijn.
// 	const priceSmallPizza 	= 2* totalSmallPizza;
// 	const priceMediumPizza	= 4* totalMediumPizza;
// 	const priceLargePizza 	= 6* totalLargePizza;
// 	// var totalPrice = totalSmallPizza + totalMediumPizza + totalLargePizza;
	
// 	// deze code geeft de berekening van wat de klant heeft besteld.
	
// 		document.write( totalSmallPizza + ' small ' + ' ' + '€' + priceSmallPizza + "<br>");
		
// 		document.write( totalMediumPizza + ' medium ' +' ' + '€' + priceMediumPizza + "<br>" );
		
// 		document.write( totalLargePizza + ' large ' +' ' + '€' + priceLargePizza + "<br />");

// 		// document.write( 'Totaal prijs' + ' = ' + '€' + totalPrice);


function show() {
	document.getElementById('module').style.display = 'block';
}
