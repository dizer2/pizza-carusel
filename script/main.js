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

let slide = 1;
let rotateControl = 0;
let ang = 0;



next.onclick = function() {
	rotateControl = rotateControl+45;
    slide++;
    if(slide > 8){
        slide = 1;
    }
    $("#pizza__ctructura").css(`transform`, `rotate(${rotateControl}deg)`);

	myGreeting2();
}

previous.onclick = function() {
	rotateControl = rotateControl-45;
    slide--;
    if(slide < 1){
        slide = 8;
    }
    $("#pizza__ctructura").css(`transform`, `rotate(${rotateControl}deg)`);
	myGreeting2();

}

const myTimeout2 = setTimeout(myGreeting2, 400);
function myGreeting2() {

	if(slide == 2){
		name__pizza.innerText = pizza__ingradients[1].namePizza;
		ingredient__description.innerText = pizza__ingradients[1].ingtedients;
		prise.innerText = pizza__ingradients[1].prise;
		
	}else if(slide == 3){
		name__pizza.innerText = pizza__ingradients[2].namePizza;
		ingredient__description.innerText = pizza__ingradients[2].ingtedients;
		prise.innerText = pizza__ingradients[2].prise;
	}else if(slide == 4){
		name__pizza.innerText = pizza__ingradients[3].namePizza;
		ingredient__description.innerText = pizza__ingradients[3].ingtedients;
		prise.innerText = pizza__ingradients[3].prise;
	}else if(slide == 5){
		name__pizza.innerText = pizza__ingradients[4].namePizza;
		ingredient__description.innerText = pizza__ingradients[4].ingtedients;
		prise.innerText = pizza__ingradients[4].prise;
	}else if(slide == 6){
		name__pizza.innerText = pizza__ingradients[5].namePizza;
		ingredient__description.innerText = pizza__ingradients[5].ingtedients;
		prise.innerText = pizza__ingradients[5].prise;
	}else if(slide == 7){
		name__pizza.innerText = pizza__ingradients[6].namePizza;
		ingredient__description.innerText = pizza__ingradients[6].ingtedients;
		prise.innerText = pizza__ingradients[6].prise;
	}else if(slide == 8){
		name__pizza.innerText = pizza__ingradients[7].namePizza;
		ingredient__description.innerText = pizza__ingradients[7].ingtedients;
		prise.innerText = pizza__ingradients[7].prise;
	}else if(slide == 1){
		name__pizza.innerText = pizza__ingradients[0].namePizza;
		ingredient__description.innerText = pizza__ingradients[0].ingtedients;
		prise.innerText = pizza__ingradients[0].prise;
		

	}

}
$('#main2').hide();

dishes.onclick = function() {
	$('#main2').hide();
	$('.main').show();
}

main.onclick = function() {
	login__log.classList.remove('login__log__animated');
	input__name.value = '';
	input__password.value = '';
}

home.onclick = function() {

	if ("username" in localStorage && "userpassword" in localStorage) {
	  $('#main2').show();
	  $('.main').hide();
	  $('#loginUser').text(localStorage.username);
	  $('#passwordUser').text(localStorage.userpassword);
	} else {
		login__log.classList.add('login__log__animated');
	}

}


button__signUp.onclick = function() {
let names = input__name.value;
let password = input__password.value;
let controlNumber = password.length;
let controlLogin = names.length;


if(controlLogin < 4){
	$(".name__titel").text(`Your login is too short`);
    $(".name__titel").css(`color`, `orange`);


}else{
	$(".name__titel").text(`Login`);
    $(".name__titel").css(`color`, `#fff`);
	localStorage.username = names;
}

if(controlNumber < 8){
	$(".pass__titel").text(`Your password is too short`);
    $(".pass__titel").css(`color`, `orange`);
	localStorage.userpassword = 'none';

}else{
	$(".pass__titel").text(`Password`);
	$(".pass__titel").css(`color`, `#fff`);
	localStorage.userpassword = password;
}


if(controlLogin >= 4 && controlNumber >= 8){
	login__log.classList.remove('login__log__animated');
	$('#main2').show();
	$('.main').hide();
	$('#loginUser').text(localStorage.username);
	$('#passwordUser').text(localStorage.userpassword);

}




	



}






// nameInfo.innerText = localStorage.username
