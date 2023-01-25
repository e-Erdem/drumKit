

for(var i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

	makeSound(this.innerHTML);
	
});

document.querySelectorAll(".drum")[i].addEventListener("mouseup", function(event){

	makeOpacitiyLow(event.srcElement.innerHTML);
	
});

}

addEventListener("keydown", function(event){
	
	makeSound(event.key);
	
});

addEventListener("keyup", function(event){
	
	makeOpacitiyLow(event.key);
	
});



function makeSound(key){
	
		switch(key){
		case "w":
			var audio = new Audio('sounds/tom-1.mp3');
			audio.play();
			document.querySelector(".w").classList.toggle("opacity-low");
			break;
		case "a":
			var audio = new Audio('sounds/tom-2.mp3');
			audio.play();
			document.querySelector(".a").classList.toggle("opacity-low");
			break;
		case "s":
			var audio = new Audio('sounds/tom-3.mp3');
			audio.play();
			document.querySelector(".s").classList.toggle("opacity-low");
			break;
		case "d":
			var audio = new Audio('sounds/tom-4.mp3');
			audio.play();
			document.querySelector(".d").classList.toggle("opacity-low");
			break;
		case "j":
			var audio = new Audio('sounds/snare.mp3');
			audio.play();
			document.querySelector(".j").classList.toggle("opacity-low");
			break;
		case "k":
			var audio = new Audio('sounds/crash.mp3');
			audio.play();
			document.querySelector(".k").classList.toggle("opacity-low");
			break;
		case "l":
			var audio = new Audio('sounds/kick-bass.mp3');
			audio.play();
			document.querySelector(".l").classList.toggle("opacity-low");
			break;
		default:
			console.log("Undefined Error...");
		
	}
	
	
	
	
}

function makeOpacitiyLow(key){
	
		switch(key){
		case "w":
			document.querySelector(".w").classList.toggle("opacity-low")
			break;
		case "a":
			document.querySelector(".a").classList.toggle("opacity-low")
			break;
		case "s":
			document.querySelector(".s").classList.toggle("opacity-low")
			break;
		case "d":
			document.querySelector(".d").classList.toggle("opacity-low")
			break;
		case "j":
			document.querySelector(".j").classList.toggle("opacity-low")
			break;
		case "k":
			document.querySelector(".k").classList.toggle("opacity-low")
			break;
		case "l":
			document.querySelector(".l").classList.toggle("opacity-low")
			break;
		default:
			console.log("Undefined Error...");
		
	}
	
	
	
	
}