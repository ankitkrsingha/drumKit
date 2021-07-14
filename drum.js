var drumObj = document.querySelectorAll('.drum');
// for (var i = 0; i < drumObj.length; i++) {
//   drumObj[i].addEventListener("click", function() {
//     makeSound(this.innerHTML);

//     btnAnimation(this.innerHTML);
//   });
// }

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
})

document.addEventListener("keyup", function(event) {
  document.querySelector("."+event.key).classList.remove('pressed');
})

function makeSound(key) {
  switch (key) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;
    case 's':
      var crash = new Audio('sounds/snare.mp3');
      crash.play();
      break;
    case 'd':
      var crash = new Audio('sounds/tom-1.mp3');
      crash.play();
      break;
    case 'j':
      var crash = new Audio('sounds/tom-2.mp3');
      crash.play();
      break;
    case 'k':
      var crash = new Audio('sounds/tom-3.mp3');
      crash.play();
      break;
    case 'l':
      var crash = new Audio('sounds/tom-4.mp3');
      crash.play();
      break;
    default: console.log(this.innerHTML)
  }
}

function btnAnimation (currentKey){
  var activeBtn = document.querySelector("."+currentKey);
  activeBtn.classList.add('pressed');
}
