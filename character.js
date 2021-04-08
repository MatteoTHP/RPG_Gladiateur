
let player1;
let player2;
let player3;
let player4;
let player5;
let player6;
let deads = 0;
let defense = 0
let attack = 0
let shadowHit

class Character {

  constructor(hp, mana, dmg, name, special, status = "playing", defense = 0, attack = 0) {
      this.hp = hp;
      this.mana = mana;
      this.dmg = dmg;
      this.name = name;
      this.special = special;
      this.status = status;
      this.defense = defense;
      this.attack = attack;
  }

  takeDamage = (damage) => {
    
    if (shadowHit == true){this.defense = damage}
    if (this.hp > 0){
      console.log(`${this.hp}`);
      this.hp = this.hp - (damage - this.defense + current_player.attack) 
      console.log(`- ${(damage - this.defense + current_player.attack)}`);
    }
   
    if (this.hp <= 0){
      this.status = "loser"
      deads = deads + 1
      this.hp = 0
    }

  }

}

class Fighter extends Character {
  constructor(hp = 12, mana = 40,  dmg = 4 , name = "Grace", special = "Dark vision", defense, attack) {
    super(hp, mana, dmg, name, special, defense, attack);
    
  }
  specialAttack = () =>{
    targetted.takeDamage(5);
    current_player.defense = 2
    current_player.mana = current_player.mana - 20 
  }
}
class Paladin extends Character {
  constructor(hp = 16, mana = 160, dmg = 3, name = "Ulder", special = "Healing Light", defense, attack) {
    super(hp, mana, dmg, name, special, defense, attack);
      
  }
  specialAttack = () =>{
    targetted.takeDamage(4);
    current_player.hp = current_player.hp + 5
    current_player.mana = current_player.mana - 40
  }
}
class Monk extends Character {
  constructor(hp = 8, mana = 200, dmg = 2, name = "Moana", special = "Heal", defense, attack) {
    super(hp, mana, dmg, name, special, defense, attack);
      
  }
  specialAttack = () =>{
    targetted.hp = targetted.hp + 8
    current_player.mana = current_player.mana - 25
  }
}
class Berzerker extends Character {
  constructor(hp = 8, mana = 0, dmg = 4, name = "Draven", special = "Rage", defense, attack) {
    super(hp, mana, dmg, name, special, defense, attack);
      
  }
  specialAttack = () =>{
    current_player.attack = current_player.attack + 2
    current_player.hp = current_player.hp -1
    console.log(`${this.name}'s rage now gives him + ${current_player.attack} damage`);
  }
}
class Assassin extends Character {
  constructor(hp = 6, mana = 20, dmg = 6, name = "Carl", special = "Shadow Hit", defense, attack) {
    super(hp, mana, dmg, name, special, defense, attack);
      
  }
  specialAttack = () =>{
    targetted.takeDamage(7);
    current_player.mana = current_player.mana - 20
    if (targetted.hp > 0){
      current_player.hp = current_player.hp - 7
    }
    shadowHit = true
  }
}
class Wizard extends Character {
  constructor(hp = 10, mana = 200, dmg = 2, name = "Wizardo-kun", special = "Fireball no jutsu", defense, attack) {
    super(hp, mana, dmg, name, special, defense, attack);
      
  }
  specialAttack = () =>{
    targetted.takeDamage(7);
    current_player.mana = current_player.mana - 25
  }
}


