// Add event listener for keyboard presses
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

// Add event listener for button clicks
const buttons = document.querySelectorAll(".drum");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    makeSound(button.textContent);
    animateButton(button); // Apply the button color change
  });
});

// Play sounds and handle key/button presses
function makeSound(key) {
  let sound;

  switch (key) {
    case "w":
      sound = new Audio("./sounds/crash.mp3");
      break;
    case "a":
      sound = new Audio("./sounds/kick-bass.mp3");
      break;
    case "s":
      sound = new Audio("./sounds/snare.mp3");
      break;
    case "d":
      sound = new Audio("./sounds/tom-1.mp3");
      break;
    case "j":
      sound = new Audio("./sounds/tom-2.mp3");
      break;
    case "k":
      sound = new Audio("./sounds/tom-3.mp3");
      break;
    case "l":
      sound = new Audio("./sounds/tom-4.mp3");
      break;
    default:
      console.log("Invalid key: " + key);
      return; // Exit the function if an invalid key is pressed
  }

  sound.play();

  // Find the corresponding button and animate it
  const activeButton = document.querySelector(`.drum.${key}`);
  if (activeButton) {
    animateButton(activeButton);
  }
}

// Function to change button color for a short time
function animateButton(button) {
  button.style.color = "#FABC3F";
  setTimeout(() => {
    button.style.color = "";
  }, 500);
}
