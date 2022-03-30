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

function countVowels() {

    // Clasify output box
    let outputVowels = document.getElementById('vowelOutput')

    // Pull text from textbox
    var text = document.getElementById('text');
    var textInput = text.value;

    // Convert from uppercase to lowercase
    var lowerCaseinput = textInput.toLowerCase();
    var inputLength = lowerCaseinput.length;

    // Create vowels
    var vowels = ["a", "e", "i", "o", "u", "y"];
    var vowelsLength = vowels.length;

    var sum = 0;

    //check string in text box
    function checking() {

        for (i = 0; i < vowelsLength; i++) {
            var numberoftimeVowelappears = lowerCaseinput.split(vowels[i]).length - 1;
            sum = sum + numberoftimeVowelappears;
        }

        return sum;

    };

    var result = checking();
    console.log(result);
    if (result == 1) {
        outputVowels.innerHTML = "There is " + result + " vowel!"
    // alert("There is " + result + " vowel!")
    } else {
        outputVowels.innerHTML = "There are " + result + " vowels!"
    // alert("There are " + result + " vowels!")
    }
}

function showRick() {
	document.getElementById('rickDiv').innerHTML = "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you.";
    document.getElementById('btnID').style.display = "none";
}