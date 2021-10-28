let player1Points = 100;
let player2Points = 100;
let player1Won = 0;
let player2Won = 0;
let points1 = 1;
let points2 = 0;

function ResetScore() {
  player1Points = 100;
  player2Points = 100;
}

function Winner(name) {
  document.getElementById("winner__text").innerText = "Winner:";
  document.getElementById("winner").innerText = `${name} Won the Match!`;
  document.getElementById("reload").innerText = "Going to Reload in 7 sec";
  setTimeout(() => {
    window.location.reload();
  }, 7000);
}
function fngame() {
  while (player1Points > 0 && player2Points > 0) {
    let random = Math.floor(Math.random() * 6);
    console.log(random);
    if (points1 > points2) {
      debugger;
      player1Points = player1Points - random;
      points2 = 1;
    } else {
      debugger;
      player2Points = player2Points - random;
      points2 = 0;
    }
  }

  if (player1Points <= 0) {
    player1Won = player1Won + 1;
  } else {
    player2Won = player2Won + 1;
  }
  document.getElementById("player__1").innerText = "Player1-Won:";
  document.getElementById("p1_won").innerHTML = player1Won;
  document.getElementById("player__2").innerHTML = "Player2-Won:";
  document.getElementById("p2__won").innerHTML = player2Won;
  ResetScore();
  if (player1Won >= 3) {
    Winner("player1");
  } else if (player2Won >= 3) {
    Winner("player2");
  }
}
