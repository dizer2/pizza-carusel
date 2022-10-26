let pizza__ingradients = [
	pizza1 = {
		namePizza: '4 cheese',
		ingtedients: 'Signature cream sauce, mozzarella cheese, Parmesan cheese, Gorgonzola cheese',
		prise: 179 + "$",
	
	},
	pizza2 = {
		namePizza: 'Proshuto',
		ingtedients: 'Tomato sauce, Mozzarella cheese, Prosciutto Crudo ham, cherry tomatoes, arugula, Parmesan cheese',
		prise: 169 + "$",
	},
	pizza3 = {
		namePizza: 'Gurme',
		ingtedients: 'Creamy sauce, Mozzarella cheese, smoked chicken fillet, pear, Dor Blue cheese, Parmesan',
		prise: 189 + "$",
	},
	pizza4 = {
		namePizza: 'Chicken Cheese',
		ingtedients: 'Cream sauce, mozzarella cheese, smoked chicken fillet, mushrooms, olives, corn',
		prise: 250 + "$",
	},
	pizza5 = {
		namePizza: 'Vegan',
		ingtedients: 'Signature sauce made from crushed tomatoes, Mozzarella cheese, tomatoes, mushrooms, corn, olives, pickled onions',
		prise: 179 + "$",
	},
	pizza6 = {
		namePizza: 'Margarita',
		ingtedients: 'Signature sauce from crushed tomatoes, Mozzarella cheese, fresh tomatoes, basil',
		prise: 139 + "$",
	},
	pizza7 = {
		namePizza: 'Caesar',
		ingtedients: 'Caesar sauce, Mozzarella cheese, smoked chicken fillet, bacon, cocktail tomato, Parmesan cheese, Iceberg salad',
		prise: 179 + "$",
	},
	pizza8 = {
		namePizza: 'Neapolitan',
		ingtedients: 'Signature cream sauce, mozzarella cheese, ham, bacon, mushrooms',
		prise: 169 + "$",
	},
];




let ang = 0;


next.onclick = function() {
	ang+=45;
	if(ang == 405){
		ang = 45;
	  pizza__ctructura.style.transform = "rotate(360deg)";
	}
	pizza__ctructura.style.transform = "rotate(" + ang + "deg)";
	
	console.log(ang)
	const myTimeout2 = setTimeout(myGreeting2, 400);
function myGreeting2() {

	if(ang == 45){
		name__pizza.innerText = pizza__ingradients[1].namePizza;
		ingredient__description.innerText = pizza__ingradients[1].ingtedients;
		prise.innerText = pizza__ingradients[1].prise;
		
	}else if(ang == 90){
		name__pizza.innerText = pizza__ingradients[2].namePizza;
		ingredient__description.innerText = pizza__ingradients[2].ingtedients;
		prise.innerText = pizza__ingradients[2].prise;
	}else if(ang == 135){
		name__pizza.innerText = pizza__ingradients[3].namePizza;
		ingredient__description.innerText = pizza__ingradients[3].ingtedients;
		prise.innerText = pizza__ingradients[3].prise;
	}else if(ang == 180){
		name__pizza.innerText = pizza__ingradients[4].namePizza;
		ingredient__description.innerText = pizza__ingradients[4].ingtedients;
		prise.innerText = pizza__ingradients[4].prise;
	}else if(ang == 225){
		name__pizza.innerText = pizza__ingradients[5].namePizza;
		ingredient__description.innerText = pizza__ingradients[5].ingtedients;
		prise.innerText = pizza__ingradients[5].prise;
	}else if(ang == 270){
		name__pizza.innerText = pizza__ingradients[6].namePizza;
		ingredient__description.innerText = pizza__ingradients[6].ingtedients;
		prise.innerText = pizza__ingradients[6].prise;
	}else if(ang == 315){
		name__pizza.innerText = pizza__ingradients[7].namePizza;
		ingredient__description.innerText = pizza__ingradients[7].ingtedients;
		prise.innerText = pizza__ingradients[7].prise;
	}else if(ang == 360){
		name__pizza.innerText = pizza__ingradients[0].namePizza;
		ingredient__description.innerText = pizza__ingradients[0].ingtedients;
		prise.innerText = pizza__ingradients[0].prise;
	}
	
	if(ang == 0){
		name__pizza.innerText = pizza__ingradients[0].namePizza;
		ingredient__description.innerText = pizza__ingradients[0].ingtedients;
		prise.innerText = pizza__ingradients[0].prise;
	
	} else if(ang == -45){
		name__pizza.innerText = pizza__ingradients[7].namePizza;
		ingredient__description.innerText = pizza__ingradients[7].ingtedients;
		prise.innerText = pizza__ingradients[7].prise;
		
	}else if(ang == -90){
		name__pizza.innerText = pizza__ingradients[6].namePizza;
		ingredient__description.innerText = pizza__ingradients[6].ingtedients;
		prise.innerText = pizza__ingradients[6].prise;

	}else if(ang == -135){
		name__pizza.innerText = pizza__ingradients[5].namePizza;
		ingredient__description.innerText = pizza__ingradients[5].ingtedients;
		prise.innerText = pizza__ingradients[5].prise;
	}else if(ang == -180){
		name__pizza.innerText = pizza__ingradients[4].namePizza;
		ingredient__description.innerText = pizza__ingradients[4].ingtedients;
		prise.innerText = pizza__ingradients[4].prise;
	}else if(ang == -225){
		name__pizza.innerText = pizza__ingradients[3].namePizza;
		ingredient__description.innerText = pizza__ingradients[3].ingtedients;
		prise.innerText = pizza__ingradients[3].prise;
	}else if(ang == -270){
		name__pizza.innerText = pizza__ingradients[2].namePizza;
		ingredient__description.innerText = pizza__ingradients[2].ingtedients;
		prise.innerText = pizza__ingradients[2].prise;
	}else if(ang == -315){
		name__pizza.innerText = pizza__ingradients[1].namePizza;
		ingredient__description.innerText = pizza__ingradients[1].ingtedients;
		prise.innerText = pizza__ingradients[1].prise;
	}else if(ang == -360){
		name__pizza.innerText = pizza__ingradients[0].namePizza;
		ingredient__description.innerText = pizza__ingradients[0].ingtedients;
		prise.innerText = pizza__ingradients[0].prise;
	}

}
	
	
	
	
}
previous.onclick = function() {
	ang-=45;
	if(ang == -405){
		ang = -45;
	  pizza__ctructura.style.transform = "rotate(360deg)";
	}
	pizza__ctructura.style.transform = "rotate(" + ang + "deg)";
	console.log(ang)
	const myTimeout6 = setTimeout(myGreeting6, 400);
	function myGreeting6() {
	
	if(ang == 0){
		name__pizza.innerText = pizza__ingradients[0].namePizza;
		ingredient__description.innerText = pizza__ingradients[0].ingtedients;
		prise.innerText = pizza__ingradients[0].prise;
	
	}else if(ang == 45){
		name__pizza.innerText = pizza__ingradients[1].namePizza;
		ingredient__description.innerText = pizza__ingradients[1].ingtedients;
		prise.innerText = pizza__ingradients[1].prise;
		
	}else if(ang == 90){
		name__pizza.innerText = pizza__ingradients[2].namePizza;
		ingredient__description.innerText = pizza__ingradients[2].ingtedients;
		prise.innerText = pizza__ingradients[2].prise;

	}else if(ang == 135){
		name__pizza.innerText = pizza__ingradients[3].namePizza;
		ingredient__description.innerText = pizza__ingradients[3].ingtedients;
		prise.innerText = pizza__ingradients[3].prise;
	}else if(ang == 180){
		name__pizza.innerText = pizza__ingradients[4].namePizza;
		ingredient__description.innerText = pizza__ingradients[4].ingtedients;
		prise.innerText = pizza__ingradients[4].prise;
	}else if(ang == 225){
		name__pizza.innerText = pizza__ingradients[5].namePizza;
		ingredient__description.innerText = pizza__ingradients[5].ingtedients;
		prise.innerText = pizza__ingradients[5].prise;
	}else if(ang == 270){
		name__pizza.innerText = pizza__ingradients[6].namePizza;
		ingredient__description.innerText = pizza__ingradients[6].ingtedients;
		prise.innerText = pizza__ingradients[6].prise;
	}else if(ang == 315){
		name__pizza.innerText = pizza__ingradients[7].namePizza;
		ingredient__description.innerText = pizza__ingradients[7].ingtedients;
		prise.innerText = pizza__ingradients[7].prise;
	}else if(ang == 360){
		name__pizza.innerText = pizza__ingradients[0].namePizza;
		ingredient__description.innerText = pizza__ingradients[0].ingtedients;
		prise.innerText = pizza__ingradients[0].prise;
	}







	if(ang == 0){
		name__pizza.innerText = pizza__ingradients[0].namePizza;
		ingredient__description.innerText = pizza__ingradients[0].ingtedients;
		prise.innerText = pizza__ingradients[0].prise;
	
	}else if(ang == -45){
		name__pizza.innerText = pizza__ingradients[7].namePizza;
		ingredient__description.innerText = pizza__ingradients[7].ingtedients;
		prise.innerText = pizza__ingradients[7].prise;
		
	}else if(ang == -90){
		name__pizza.innerText = pizza__ingradients[6].namePizza;
		ingredient__description.innerText = pizza__ingradients[6].ingtedients;
		prise.innerText = pizza__ingradients[6].prise;

	}else if(ang == -135){
		name__pizza.innerText = pizza__ingradients[5].namePizza;
		ingredient__description.innerText = pizza__ingradients[5].ingtedients;
		prise.innerText = pizza__ingradients[5].prise;
	}else if(ang == -180){
		name__pizza.innerText = pizza__ingradients[4].namePizza;
		ingredient__description.innerText = pizza__ingradients[4].ingtedients;
		prise.innerText = pizza__ingradients[4].prise;
	}else if(ang == -225){
		name__pizza.innerText = pizza__ingradients[3].namePizza;
		ingredient__description.innerText = pizza__ingradients[3].ingtedients;
		prise.innerText = pizza__ingradients[3].prise;
	}else if(ang == -270){
		name__pizza.innerText = pizza__ingradients[2].namePizza;
		ingredient__description.innerText = pizza__ingradients[2].ingtedients;
		prise.innerText = pizza__ingradients[2].prise;
	}else if(ang == -315){
		name__pizza.innerText = pizza__ingradients[1].namePizza;
		ingredient__description.innerText = pizza__ingradients[1].ingtedients;
		prise.innerText = pizza__ingradients[1].prise;
	}else if(ang == -360){
		name__pizza.innerText = pizza__ingradients[0].namePizza;
		ingredient__description.innerText = pizza__ingradients[0].ingtedients;
		prise.innerText = pizza__ingradients[0].prise;
	}






}
	
	
}

console.log(ang)
if(ang == 0){
	name__pizza.innerText = pizza__ingradients[0].namePizza;
	ingredient__description.innerText = pizza__ingradients[0].ingtedients;
	prise.innerText = pizza__ingradients[0].prise;

}



