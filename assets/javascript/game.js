let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "yoda":
                player = new player(classType, 200, 200, 50, 125, 100);
                break;
            case "luke":
                player = new player(classType, 200, 150, 100, 100, 150);
                break;
            case "chewy":
                player = new player(classType, 200, 200, 75, 150, 75);
                break;
            case "solo":
                player = new player(classType, 200, 175, 75, 150, 50);
                break;

        }
        let getInterface = document.querySelector(".char-select");
        getInterface.innerHTML = '<img src="./assets/images/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType
            + '<h/3><p class="health-player">Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Defense: ' + player.defense + '</p><p>Recovery: ' + player.recovery + '</p></div>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Create Enemy
        let enemy00 = new Enemy("Darth Vader", 200, 175, 100, 125, 75);
        let enemy01 = new Enemy("Stormtrooper", 200, 75, 125, 125, 75);
        let enemy02 = new Enemy("Boba Fett", 200, 125, 175, 100, 50);
        let enemy03 = new Enemy("Dark Sith", 200, 175, 100, 125, 75);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
        //Choose Random Enemy
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="./assets/images/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + ''
            + < div > <h3>' + enemy.enemyType + '</h3> <p class="char-select">
                class="health-enemy">Health: ' + enemy.health + '</p> <p>Strength: ' +
        enemy.strength + '</p> <p>Speed: ' + enemy.speed + '</p></div >;

    }
}

let player;
function Player(classType, health, speed, strength, defense, recovery) {
    this.classType = classType;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.defense = defense;
    this.recovery = recovery;
}
let PlayerMoves = {
    calcAttack: function () {
        //Who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // Player Attacks
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.health > 0) {
                calcBaseDamage = player.strength * player.health / 1000;
            } else {
                calcBaseDamage - player.strength * player.speed / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.speed / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        // Enemy Attack
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.health > 0) {
                calcBaseDamage = enemy.strength * enemy.health / 1000;
            } else {
                calcBaseDamage - enemy.strength * enemy.speed / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.speed / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        //Initiate attack
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                alert("Over, Game is... Win, You do!");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                // Enemy Attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You loose! Refresh browser to play again.");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = 'Health ' + player.health;
                }
            }
        }
    }
}
let goodGuy;
function goodGuy(classType, health, speed, strength, defense, recovery) {
    this.classType = classType;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.defense = defense;
    this.recovery = recovery;
}
let badGuy;
function badGuy(classType, health, speed, strength, defense, recovery) {
    this.classType = classType;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.defense = defense;
    this.recovery = recovery;
}
//mine
/*
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
console.log(rebels);
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
    strength: 175,
    speed: 75,
    defense: 150,
    recovery: 50
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
    name: "Dark Sith",
    strength: 200,
    speed: 75,
    defense: 100,
    recovery: 100
}
//------------ DARTH VADER
//STRENGTH: 200 - SPEED: 100 - DEFENSE: 100 - RECOVERY: 75
var darth = {
    name: "Darth Vader",
    strength: 200,
    speed: 100,
    defense: 100,
    recovery: 75
}
    //======================FIGHT TIME========================
    //=======Variable Attributes Subtracting From Eachother================================
    /*for*/
    //(rebels() - darkSide()) - lifeRemain === life(?)

//------------ WHEN FIGHT IS OVER
//----IF WIN
//CONTINUE
//----IF LOSE
//GO TO CHARACTER SLECTION PAGE