

let playBtn = document.querySelector('.play');
let instructBtn = document.querySelector('.instruct');
let reloadBtn = document.querySelector('.reload');
let submit = document.querySelector('.submit');

playBtn.onclick = function() {
	play();    //set required parameter
};

instructBtn.onclick = function() {
	playInstruct();   //set required parameter
};

reloadBtn.onclick = function() {
	nextCaptcha();    //set req parameter
};

submit.onclick = function() {

}

document.onload = function() {
	nextCaptcha();    //set req para
	//will obtain an object
	for(int i = 0; i<3; i++) {
		let input = document.createElement('input');
		input.setAttribute('type','radio');
		input.value = //ith choice
		elem = document.getElementById('in');
		elem.appendChild(input);
	}
	
}