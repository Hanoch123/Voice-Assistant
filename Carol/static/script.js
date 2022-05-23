const btn = document.getElementById('btn');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
	console.log('You can speak now!');
}

recognition.onresult = function(event){
	var text = event.results[0][0].transcript;
	console.log(text);
	document.getElementById('result').innerHTML = text;
	read(text);
}

function read(text){
	var speech = new SpeechSynthesisUtterance();
	speech.text = text;
	if(text.includes('Carol')){
		if(text.includes('what is the time')){
			speech.text = 'It is ' + new Date().getHours() + "" + new Date().getMinutes() + "right now!";
		}
		else if(text.includes('hi') | text.includes('hello') | text.includes('hey')){
			var greetings = [
				'Hola',
				'Namasthe',
				'Konichiwa',
				'Hello There!',
				'Hi, This is Carol. How may i help you?',
			]
			greet = greetings[Math.floor(Math.random() * greetings.length)];
			speech.text = greet;
		}
	}
	window.speechSynthesis.speak(speech);
}
