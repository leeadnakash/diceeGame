

var randomNumber1 = Math.ceil(Math.random()*6);

var randomNumber2 = Math.ceil(Math.random()*6)

if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerText = "Draw!"
}

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerText = "🎉 Player 1 Wins!"
}

if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerText = "Player 2 Wins! 🎉"
}

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
