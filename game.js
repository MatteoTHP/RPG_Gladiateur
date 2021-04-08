var players =  []
let targetted
let turnLeft
let current_player
var already_dead = false


class Game {

  constructor(turnLeft = 11) {

      this.turnLeft = turnLeft;
     
  };

  startGame = () => {
    
    player1 = new Fighter();
    player2 = new Paladin();
    player3 = new Monk();
    player4 = new Berzerker();
    player5 = new Assassin();
    player6 = new Wizard();

    current_player = player1

    players.forEach((player) => {
      console.log(`${player.name} hp : ${player.hp}`);
    })
    
    players.push(player1);
    players.push(player2);
    players.push(player3);
    players.push(player4);
    players.push(player5);
    players.push(player6);
    console.log(players);
    
    game.newTurn();
  };

  newTurn = () => {

    if(current_player == player1){
      player1.defense = 0
      this.turnLeft = this.turnLeft - 1
      console.log(`Tours restants : ${this.turnLeft}`);
      console.log();
    }
    if(current_player == player5){
      shadowHit = false
      player5.defense = 0
    }

    if (this.turnLeft == 0){
      console.log();
      console.log(`La partie est terminée !`);

      console.log();
      console.log();

      game = new Game();
      console.log(`game start`);
      game.startGame();
    };

    


    game.playerTarget();
  };

  playerTarget = () => {

    let target = window.prompt( `Current player : ${current_player.name}\n\n1 - ${player1.name}\n2 - ${player2.name}\n3 - ${player3.name}\n4 - ${player4.name}\n5 - ${player5.name}\n6 - ${player6.name}\n\n Who is your target: `);

    if (target == 1) {
      targetted = player1
    }
    else if (target == 2) {
      targetted = player2
    }
    else if (target == 3) {
      targetted = player3
    }
    else if (target == 4) {
      targetted = player4
    }
    else if (target == 5) {
      targetted = player5
    }
    else if (target == 6) {
      targetted = player6
    }
    else{
      game.playerTarget();
    };

    if(targetted.status == "loser"){
      console.log(`You targeted ${targetted.name}'s dead body !`)
      already_dead = true
    }
    else if(targetted == current_player){
      console.log(`You targeted yourself, Are you sure ? Don't do anything stupid ! `)
    }
    else{
      console.log(`You targeted ${targetted.name}`)
    };

    console.log();
    game.playerAttack();
  };

  playerAttack = () => {

    
    let action = window.prompt(`Current player : ${current_player.name}\n\n1 - Attack \n2 - ${current_player.special}\n\n What attack do you use: `);

    if (action == 1) {
     targetted.takeDamage(current_player.dmg);
    }
    else if (action == 2){
      current_player.specialAttack();
    }
    else{
      game.playerAttack();
    };
    
    
    if(targetted == current_player && targetted.status == "loser" && action == 1){
      console.log(`${targetted.name}?  What's wrong ? ${targetted.name} ??? ${targetted.name}!!! (You killed yourself :facepalm:) `)
    }
    else if(targetted == current_player && action == 1){
      console.log(`You Attacked yourself, What's wrong with you ?! `)
    }
    else if (already_dead == true && targetted.status == "loser" && action == 1){
      console.log(`You attacked ${targetted.name}'s dead body! Erk :o `)
    }
    else if(already_dead == false && targetted.status == "loser" && action == 1){
      console.log(`You Attacked ${targetted.name} !`)
      console.log(`${targetted.name} is Dead`)
    }
    else if(targetted == current_player && targetted.status == "loser" && action == 2){
      console.log(`${targetted.name}?  What's wrong ? ${targetted.name} ??? ${targetted.name}!!! (You killed yourself :facepalm:) `)
    }
    else if(targetted == current_player && action == 2){
      console.log(`You used your special attack (${current_player.special}) on yourself ! `)
    }
    else if (already_dead == true && targetted.status == "loser" && action == 2){
      console.log(`You used your special attack (${current_player.special}) on ${targetted.name}'s dead body! Erk :o `)
    }
    else if(already_dead == false && targetted.status == "loser" && action == 2){
      console.log(`You used your special attack (${current_player.special}) on ${targetted.name} !`)
      console.log(`${targetted.name} is Dead`)
    }
    else if(action == 2){
      console.log(`You used your special attack (${current_player.special}) on ${targetted.name} !`)
    }
    else{
      console.log(`You Attacked ${targetted.name} !`)
    };

    game.whoPlays();
  };

  whoPlays = () => {
    
    already_dead = false

    if(current_player == player1){
      current_player = player2
    }
    else if(current_player == player2){
      current_player = player3
    }
    else if(current_player == player3){
      current_player = player4
    }
    else if(current_player == player4){
      current_player = player5
    }
    else if(current_player == player5){
      current_player = player6
    }
    else if(current_player == player6){
      current_player = player1
    }
   
    game.isDead();
  };

  isDead = () => {


    if(current_player.status == "loser"){
      game.whoPlays();
    }
    else if(deads >= 5){
      console.log();
      console.log(`La partie est terminée !`);

      console.log();
      console.log();

      game = new Game();
      console.log(`game start`);
      game.startGame();
    }
    else{
      game.watchStats();
    }

    
  };

  watchStats = () => {
    console.log();
    console.log(`**********`);
    players.forEach((player) => {
      console.log(`${player.name} hp : ${player.hp}`);
    })
    console.log(`**********`);
    console.log();

    game.newTurn();
  };

};

game = new Game();
console.log(`game start`);
game.startGame();

