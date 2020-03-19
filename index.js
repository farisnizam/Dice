// add event listener to play button
document.querySelector(".playBtn").addEventListener("click", function () {
  findWinner();
});

// detect keyboard press
document.addEventListener("keypress", function (event) {
  switch (event.key) {

    case "Enter":
      findWinner();
      break;
      
    default:
      break;

  }
});


function findWinner () {
  // generate random number for dice 1 and dice 2
  var randomNumber1 = Math.floor(Math.random() * 6 + 1); // 1-6
  var randomNumber2 = Math.floor(Math.random() * 6 + 1); // 1-6

  // change player 1 dice
  var randomDiceImage1 = "dice" + randomNumber1;
  var randomImageSource1 = "images/" + randomDiceImage1 + ".png";
  document.querySelector("img.img1").setAttribute("src", randomImageSource1);

  // change player 2 dice
  var randomDiceImage2 = "dice" + randomNumber2;
  var randomImageSource2 = "images/" + randomDiceImage2 + ".png";
  document.querySelector("img.img2").setAttribute("src", randomImageSource2);

  // check who wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}


