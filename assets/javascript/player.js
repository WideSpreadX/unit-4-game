let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        //Who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        //Player attacks
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                calcBaseDamage = player.strength * player.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits, numberOfHits];
            return attackValues;
        }
        //Enemy attacks
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits, numberOfHits];
            return attackValues;
        }
        //Get player/enemy health
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health.enemy");
        //Initiate attack
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                alert("Win You Do");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                //Enemy Attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("He hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("Over Game Is");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: 0' + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        }
    }

}


