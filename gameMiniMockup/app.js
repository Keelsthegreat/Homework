//creates an enemy class
class enemyValues {
    constructor(hp = (Math.floor(Math.random() * 4) + 2),fp = (Math.floor(Math.random() * 2) + 1), ac =  (Math.floor(Math.random()) * .4) + .2) {
        this.hp = hp;
        this.fp = fp;
        this.ac = ac;
        this.status = true;
    }
}

//initiate list of enemies,splits innertext into an array
let enemyList = [];

let enemyStats = document.querySelector(".enemyStats")
let enemyAttributes = enemyStats.innerText.split("\n")
let enemyAttributes2 = enemyAttributes[0].split(" ")
let enemyHull = enemyAttributes2[2];
enemyAttributes2 = enemyAttributes[1].split(" ")
let enemyFP = enemyAttributes2[2];
enemyAttributes2 = enemyAttributes[2].split(" ")
let enemyAC = enemyAttributes2[2];
// console.log(enemyAttributes2)

//set original enemy to object and pushes it to total enemies
let newEnemy = new enemyValues(enemyHull,enemyFP,enemyAC);
enemyList.push(newEnemy)

console.log(enemyList);
//makes multiple enemies
function createEnemies() {
    let numEnemies = Math.floor(Math.random()*3);

    for(let i = 1;i<=numEnemies;i++){
        newEnemy = new enemyValues()
        enemyList.push(newEnemy)
    }
}
//calls the function
createEnemies()




console.log(enemyList[0].hp);

//create player
let playerStats = document.querySelector(".playerStats")
let playerAttributes = playerStats.innerText.split("\n")
let playerAttributes2 = playerAttributes[0].split(" ")
let playerHull = playerAttributes2[2];
playerAttributes2 = playerAttributes[1].split(" ")
let playerFP = playerAttributes2[2];
playerAttributes2 = playerAttributes[2].split(" ")
let playerAC = playerAttributes2[2];


playerStats.innerText = `Hull : ${playerHull}\nFirepower : ${playerFP}\nAccuracy : ${playerAC}`; 
// console.log(playerAttributes2[2])

alert("The legendary Galatca appears! Click on Kirby to start the battle!")
//get id of img to set add event listener
let ship = document.querySelector(".playerImage");
let shipStatus = true;
console.log(enemyList.length);

let attackTarget;



ship.addEventListener("click", function(){
    //ship status determines if the game is on
    if(shipStatus==true){
        
        let targetNum = (prompt(`There are ${enemyList.length} Sword Knights!, Which would you like to attack, Kirby?`))-1;
      
        //set prompt for targetting attack command
        console.log(targetNum)
        attackTarget = enemyList[0]
        console.log(attackTarget)
        attackCommand(attackTarget)
        
        //Player and enemy condition
        if(playerHull<=0) {
            alert(" You were defeated!")
            shipStatus=false;
        } else if (attackTarget.hp <= 0){
            alert ("You beat Galacta!")
        } if (playerHull <=0 || attackTarget.hp <=0){
            let playAgain = confirm("Would you like to play again?");
            if(playAgain == true){
                playerHull = 20;
                attackTarget.hp = 50;
                shipStatus = true;
                alert("The legendary Galatca appears! Click on Kirby to start the battle!")
                attackTarget = enemyList
            } else {
                alert('GAME OVER')
            }
        }
        //resets the dom
        playerStats.innerText = `Hull : ${playerHull}\nFirepower : ${playerFP}\nAccuracy : ${playerAC}`; 
        enemyStats.innerText = `Hull : ${attackTarget.hp}\nFirepower : ${attackTarget.fp}\nAccuracy : ${attackTarget.ac}`;
        
    }})
    
//Math damage
function attackCommand(target){
    //missles
    let useStars;
    //player attacks
    if((Math.random())<playerAC){
        if(useStars){
            target.hp-= ((playerFP*1)+3)
            console.log(playerFP)
        }else{
            target.hp-= playerFP;
        }
        alert("Galatca took damage")
    } else {
        alert("You missed!")
    }
    //enemy attacks
    for(let i in enemyList){
        if((Math.random())<enemyList[i].ac && enemyList[i].hp>0){
            playerHull-= enemyList[i].fp;
            alert("You took damage!")
        } else {
            alert(`Galatca's attack missed!`)
        }  
    }
     
}

let audio = new Audio ('galacta.mp3');
audio.play();
 