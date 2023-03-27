//Detecting click press

var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    ButtonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press

document.addEventListener('keydown', function (event) {
  makeSound(event.key);
  ButtonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    case "s":
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case "k":
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case "l":
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    default: console.log(buttonInnerHTML);

  }
}

function ButtonAnimation(currentKey) {
  let activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed', 100);
  });
};
