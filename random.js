function changeCSS() {
	document.getElementById('cssButton').style.backgroundColor = "#FFCB9A";
}
function makeStars(min, max) {
	
	let minimum = parseInt(document.getElementById("min").value);
	let maximum = parseInt(document.getElementById("max").value);
	let number = Math.random() * (maximum - minimum) + minimum;
	document.getElementById('star-random').innerHTML = number;
	let stars = document.getElementById('stars');
	for (i = 1; i <= number; i++) {
		let element = document.createElement("div")
		element.classList.add("star");
		let space = document.createTextNode("space")
		element.appendChild(space);
		stars.appendChild(element);
	}
}