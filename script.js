document.addEventListener('DOMContentLoaded', function(event) {
  const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let cardOne = null;
let cardTwo = null;
let selectedColors = [];
let cardOneClass;
let cardTwoClass;
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if (selectedColors.indexOf(event.target.className) !== -1) {
    return;
  }
  // if card one and card two are both selected, do nothing
  if (cardOne && cardTwo) {
    return;
  } else
    // otherwise, select background of card one if it has no value
    if (cardOne === null) {
      cardOne = event.target;
      cardOneClass = cardOne.className;
      cardOne.style.backgroundColor = cardOneClass;
      console.log(`'CardOne is ${cardOneClass}'`);
    } else if (event.target !== cardOne) {
      cardTwo = event.target;
      cardTwoClass = cardTwo.className;
      cardTwo.style.backgroundColor = cardTwoClass;
      console.log(`'CardTwo is ${cardTwoClass}'`);
      if (cardOneClass === cardTwoClass) {
        cardOne = null;
        cardTwo = null;
        selectedColors.push(cardTwoClass);
      } else {
        setTimeout(function () {
          cardOne.style.backgroundColor = 'white';
          cardTwo.style.backgroundColor = 'white';
          cardOne = null;
          cardTwo = null;
        }, 1000);
      }
    }
}


// when the DOM loads
createDivsForColors(shuffledColors);

});
/* */