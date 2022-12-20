console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log(alert("Form has been submitted successfully!"));
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const compliment = document.querySelector('img')
compliment.addEventListener('mouseover', function() { window.alert('You are doing just great, sweetie.') })