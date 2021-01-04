
var buttons = document.querySelectorAll(".drum");

//Buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var button = this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
  });
}

//Keyboard
document.addEventListener("keydown", function(evt) {
  makeSound(evt.key);
  buttonAnimation(evt.key);
});

function makeSound(key) {
  switch(key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
   case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
  case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100); 
}
