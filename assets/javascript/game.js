//--------------VARIABLES------------
var goodGuy = {
    name: "",
    strength: "",
    speed: "",
    defense: "",
    recovery: ""
};

var badGuy = {
    name: "",
    strength: "",
    speed: "",
    defense: "",
    recovery: ""
};
//-------------TO DO---------------

//------------ ON PAGE LOAD
//---- SHOW GAME STORY
//---- SHOW CONTROLS
//---- SHOW CHARACTER SELECTION PAGE
//------------ WHEN CHARACTER SELCTION PAGE LOADS
//----SHOW CHARACTERS
//CHOOSE CHARACTER
var rebels = ["Yoda", "Luke Skywalker", "Chewbacha", "Han Solo"];
//----SHOW START BUTTON
//------------ WHEN START BUTTON IS CLICKED
//CHOOSE OPPONENT
var darkSide = ["Stormtrooper", "Boba Fett", "Dark Sith", "Darth Vader"];
//----SHOW CHOSEN CHARACTER ON LEFT
//----SHOW VS. IN MIDDLE
//----SHOW BATTLE OPP0NENT ON RIGHT
//------------ WHEN FIGHT BEGINS
//CHOOSE BATTLE GROUND
var battleGround = ["", "", "", ""]
//----USER CLICKS ATTACK (WHEN OPPENENT HIS HIT MINUS CHARACTERS STRENGTH FROM OPPENENT HEALTH)
//------------ YODA
//STRENGTH: 200 - SPEED: 50 - DEFENSE: 100 - RECOVERY: 125
var yoda = {
    name: "Yoda",
    strength: 200,
    speed: 50,
    defense: 100,
    recovery: 125
}
//------------ LUKE SKYWALKER
//STRENGTH: 150 - SPEED: 100 - DEFENSE: 100 - RECOVERY: 150
var luke = {
    name: "Luke Skywalker",
    strength: 150,
    speed: 100,
    defense: 100,
    recovery: 150
}
//------------ CHEWBACHA
//STRENGTH: 200 - SPEED: 75 - DEFENSE: 150 - RECOVERY: 75
var chewy = {
    name: "Chewbacha",
    strength: 200,
    speed: 75,
    defense: 150,
    recovery: 75
}
//------------ HAN SOLO
//STRENGTH: 175 - SPEED: 75 - DEFENSE: 150 - RECOVERY: 50
var solo = {
    name: "Han Solo",
    strength: ,
    speed: ,
    defense: ,
    recovery:
}
//------------ ENEMIES
//------------ BOBA FETT
//STRENGTH: 125 - SPEED: 75 - DEFENSE: 100 - RECOVERY: 100
var fett = {
    name: "Boba Fett",
    strength: 125,
    speed: 75,
    defense: 100,
    recovery: 100
}
//------------ STORMTROOPER
//STRENGTH: 75 - SPEED: 75 - DEFENSE: 100 - RECOVERY: 125
var troop = {
    name: "Stormtrooper",
    strength: 75,
    speed: 75,
    defense: 100,
    recovery: 125
}
//------------ DARK SITH
//STRENGTH: 200 - SPEED: 75 - DEFENSE: 100 - RECOVERY: 100
var sith = {
    name: ,
    strength: ,
    speed: ,
    defense: ,
    recovery:
}
//------------ DARTH VADER
//STRENGTH: 200 - SPEED: 100 - DEFENSE: 100 - RECOVERY: 75
var darth = {
    name: ,
    strength: ,
    speed: ,
    defense: ,
    recovery:
}
//------------ WHEN FIGHT IS OVER
//----IF WIN
//CONTINUE
//----IF LOSE
//GO TO CHARACTER SLECTION PAGE