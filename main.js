function bot(){
var botWeapon = Math.random();
if (botWeapon <.33) {
return "rock"
}
else if (botWeapon <.66) {
  return "scissors"
}
else {
  return "paper"
}
}

function player(playerWeapon){
  var botWeapon = bot();
  if (botWeapon === playerWeapon){
  return "draw"
}else if (playerWeapon === "rock" && botWeapon === "scissors" ||
playerWeapon === "paper"
&& botWeapon === "rock" || playerWeapon === "scissors"
&& botWeapon === "paper")
{return "win"}
else
{  return "lose"
}
}

//What does the user do?
chooses a weapon

//What does the user expect to happen?
the computer will play a weapon simultaneously

//What can the user see?
the result

Rock, Paper and Scissors
Function rps (num, num2){
var weapon = “rock”
var num = math.Random();
if (num < .33)
{weapon = (“scissors’);
If (num <.66){
Weapon = (“paper”);
} if(weapon==chosenWeapon){
Console.log()
}
Rps(1, 2);
