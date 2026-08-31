//your JS code here. If required.
let currentAudio = null;

function playSound(sound){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
	currentAudio = new Audio("./sound"+sound+".mp3");
	currentAudio.play();
}

doucment.getElementById("applause").addEventListener("click", function(){
	playSound("applause");
});

document.getElementById("boo").addEventListener("click", function() {
	playSound("boo");
});

document.getElementById("gasp").addEventListener("click", function() {
	playSound("gasp");
});

document.getElementById("tada").addEventListener("click", function() {
	playSound("tada");
});

document.getElementById("victory").addEventListener("click", function() {
	playSound("victory");
});

document.getElementById("wrong").addEventListener("click", function() {
	playSound("wrong");
});

document.getElementById("stop").addEventListener("click", function(){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
});