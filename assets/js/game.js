var playerName = window.prompt("what is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//can console log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("welcome to robot gladiators");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subctracting the amount set in the playerAttack var.
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died! ");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died! ");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player chooses to skip
    } else if (promptFight === 'skip' || promptFight === 'SKIP') {
        // confirm player wants to skip
        var confirmSkip = window.confirm("are you sure you'd like to quit?");

        // if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by runnning fight() again
        else {
            fight();
        }
    } else {
        window.alert("you need to chose a valid option. Try again!");
    }
};



fight();