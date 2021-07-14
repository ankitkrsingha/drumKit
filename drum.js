var crash;
var drumObj = document.querySelectorAll('.drum');
for (var i = 0; i < drumObj.length; i++) {
  drumObj[i].addEventListener("click", function(event) {
    makeSound(this.innerHTML);
    btnAnimation(this.innerHTML);
    setTimeout(function() {
      event.toElement.classList.remove('pressed');
    }, 100);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
})

document.addEventListener("keyup", function(event) {
  document.querySelector("." + event.key).classList.remove('pressed');
})

function makeSound(key) {
  switch (key) {
    case 'w':
      crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;
    case 's':
      crash = new Audio('sounds/snare.mp3');
      crash.play();
      break;
    case 'd':
      crash = new Audio('sounds/tom-1.mp3');
      crash.play();
      break;
    case 'j':
      crash = new Audio('sounds/tom-2.mp3');
      crash.play();
      break;
    case 'k':
      crash = new Audio('sounds/tom-3.mp3');
      crash.play();
      break;
    case 'l':
      crash = new Audio('sounds/tom-4.mp3');
      crash.play();
      break;
    default:
      console.log(this.innerHTML)
  }
}

function btnAnimation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add('pressed');
}
