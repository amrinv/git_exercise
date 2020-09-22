// ----- Variable Declaration -----
const resetButton = document.querySelector("#reset-button");
const shootButtonOne = document.querySelector("#teamone-shoot-button");
const shootButtonTwo = document.querySelector("#teamtwo-shoot-button");
let teamOneShot = document.querySelector("#teamone-numshots"); //span Team1 Shots
let teamTwoShot = document.querySelector("#teamtwo-numshots"); //span Team2 Shots
let goalOfTeam1 = document.querySelector("#teamone-numgoals"); // Team1 Goal
let goalOfTeam2 = document.querySelector("#teamtwo-numgoals"); //Team2 Goal
let numResets = document.querySelector("#num-resets");

// ----- For Audio ------

//---- shoot for Team 1 -----
let leftShot = 0;
let goal1 = 0;
let team1Audio = document.getElementById("team1-shoot-audio");
shootButtonOne.addEventListener("click", function () {
  team1Audio.play();
  let randomVar = Math.floor(Math.random() * 5) + 1;
  leftShot++;
  teamOneShot.innerHTML = leftShot;
  if (randomVar == 5) {
    alert(
      "Shot Successfull🎊! Team1 did a great job, Won by " +
        randomVar +
        " kills, Great Shot!"
    );
    goal1++;
    goalOfTeam1.innerHTML = goal1;
    console.log("Your Random Number is " + randomVar);

    console.log("Your Shot is " + leftShot + " and Goal is " + goal1);
  } else {
    alert(
      "Oops Failed! You did " + randomVar + " kills, Better Luck next time!"
    );
    console.log("Random Number for Team1 is ==> " + randomVar);
  }
});
//---- Shoot for Team2 ----
let rightShot = 0;
let goal2 = 0;
let team2Audio = document.getElementById("team2-shoot-audio");
shootButtonTwo.addEventListener("click", function () {
  team2Audio.play();
  let randomVarTeam2 = Math.floor(Math.random() * 5) + 1;
  rightShot++;
  teamTwoShot.innerHTML = rightShot;
  if (randomVarTeam2 == 5) {
    alert(
      "Shot Successful🎊! Team 2 did a great job. Won by " +
        randomVarTeam2 +
        " kills. Great Shot!"
    );
    goal2++;
    goalOfTeam2.innerHTML = goal2;
    console.log("Random Number for Team2 is ==> " + randomVarTeam2);

    // console.log(
    //   "Shot Successfull! Team 2 Won by " +
    //     rightShot +
    //     " Shots and " +
    //     goal2 +
    //     " Goal."
    // );
  } else {
    alert(
      "Oops Failed! Team2 did " +
        randomVarTeam2 +
        " kills, Better Luck next time!"
    );
    console.log("Random Number for Team2 is ==> " + randomVarTeam2);
  }
});

//------- RESET Button -----------
let reset = 0;
let resetAudio = document.getElementById("reset-audio");
resetButton.addEventListener("click", function () {
  resetAudio.play();
  reset++;
  console.log(reset + " resets.");
  numResets.innerHTML = reset;
  leftShot = 0;
  goal1 = 0;
  rightShot = 0;
  goal2 = 0;
  teamOneShot.innerHTML = leftShot;
  goalOfTeam1.innerHTML = goal1;
  teamTwoShot.innerHTML = rightShot;
  goalOfTeam2.innerHTML = goal2;

  // if (goalOfTeam1 > goalOfTeam2) {
  //   alert("team1 Wins");
  // } else {
  //   alert("Team 2 Wins");
  // }
});
