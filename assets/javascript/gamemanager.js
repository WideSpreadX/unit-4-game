let gameManager = {
    //
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    //Create our player
    resetPlayer: function (classType) {
        switch (classType) {
            //Switches characters within my interface class
            case "Yoda":
                player = new Player(classType, 200, 175, 50, 200, 150);
                break;
            case "Luke":
                player = new Player(classType, 200, 150, 100, 150, 100);
                break;
            case "Chewy":
                player = new Player(classType, 200, 175, 125, 150, 75);
                break;
            case "Solo":
                player = new Player(classType, 200, 125, 175, 150, 100);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="./assets/images/player/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agaility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    //
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Fight!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //Create Enemy

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        console.log(chooseRandomEnemy);

        switch (chooseRandomEnemy) {
            case 0:
                enemy = new Enemy("darth", 200, 300, 200, 125, 125);;
                break;
            case 1:
                enemy = new Enemy("fett", 200, 300, 200, 150, 75);;
                break;
            default:
                console.log("No enemy chosen");
                break;

        }
        getHeader.innerHTML = '<p>Attack!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="./assets/images/enemies/' + enemy.enemyType + '.png" class="img-avatar"<div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agaility + '</p><p>Speed: ' + enemy.speed + '</p></div>';

    }
}
$(".character-box").on("click", function () {
    let type = $(this).data("character");
    gameManager.setGameStart(type)
})