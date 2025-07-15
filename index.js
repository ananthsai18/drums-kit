let noOfDrums = document.querySelectorAll(".drum").length;
for (let i = 0; i < noOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let music = this.innerHTML;
    makeSound(music);
    buttonAnimation(music);
  });
}

document.addEventListener("keydown", function (event) {
  keyPressed = event.key;

  makeSound(keyPressed.toLowerCase());
  buttonAnimation(keyPressed);
});

function makeSound(z) {
  switch (z) {
    case "w":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
