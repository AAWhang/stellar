export class Ship {

  constructor(hp,money){
    this.hp = hp;
    this.fuel = 80000;
    this.fuelcap = 100000;
    this.money = money;
    this.parts = 20;
    this.materials = 0;
    this.ammo = 0;
    this.shield = 1000;
    this.crew = [];
    this.food = 10000;
    this.foodcap = 10000;
    this.speed = 0;
    this.distance = 0;
    this.spaceTime = 0;
  }
}


export class Crew {
    constructor(gender,age,occupation) {
      this.gender = gender;
      this.age = age;
      this.occupation = occupation;
      this.health = 300;
    }
}

export class Planets {
  constructor() {
    this.environment = function(){
      let die1 = Math.floor(Math.random() * 6 + 1);
      if (die1 % 2 === 0) {
        if (die1 === 2) {
          this.lifeforms = "friendly";
          this.trading = "true";
        } else {
          this.lifeforms = "hostile";
          this.trading = "false";
        }
        return "Hospitable";
      } else {
        this.lifeforms = "none";
        this.trading = "false";
        return "Inhospitable";
      }
    };
    this.materials = Math.floor(Math.random() * 100 + 1);
    this.gravity = Math.floor(Math.random() * 5000 + 1);
  }
}

export class SpaceEvents {
  gravityWell(fuel){
    return fuel - 2000;
  }

  astroidBelt(hp){
    return hp - 200;
  }

  meteors(hp){
    return hp - 200;
  }

  spacePirates(hp,crew){
    crew.pop();
    return hp - 100;
  }

  spaceVirus(crew){
    for (let i = 0; i <= crew.length; i++) {
      crew[i].health -= 30;
    }
  }

  spaceMadness(crew){

    for (let i = 1; i < crew.length; i++) {
      crew[i].health -= 40;
    }
  }

  alienEncounter(crew){
    let alien = "";
    let die1 = Math.floor(Math.random() * 6 + 1);
    if (die1 % 2 === 0) {
      alien = "hostile";
      for (let i = 0; i < crew.length; i++) {
        crew[i].health -= 30;
      }
    } else {
      alien = "friendly";
    }
  }

  wormhole(distance){
    let choice = prompt("Wormhole detected, enter? y/n?");
    if (choice === "y") {
      let die1 = Math.floor(Math.random() * 600 + 1);
      return die1 * 1000;
    } else {
      return distance;
    }
  }

  spaceStation(ship) {
    alert("spaceStation");
    ship.money += ship.materials * 100;
    ship.materials = 0;
    let buyFood = parseInt(prompt("How much food"));
    let buyParts = parseInt(prompt("How much Parts"));
    let buyFuel = parseInt(prompt("How much fuel"));
    let buyAmmo = parseInt(prompt("How much Ammo"));
    let total = (buyFood * 50) + (buyParts * 100) + (buyFuel * 10) + (buyAmmo * 50);
    while (total > ship.money || ship.foodcap < ship.food + buyFood || ship.fuelCap < ship.fuel + buyFuel || buyFood === undefined || buyParts === undefined) {
        alert("Get serious");
        buyFood = parseInt(prompt("How much food"));
        buyParts = parseInt(prompt("How much Parts"));
        buyFuel = parseInt(prompt("How much fuel"));
        buyAmmo = parseInt(prompt("How much Ammo"));
        total = (buyFood * 50) + (buyParts * 100) + (buyFuel * 10) + (buyAmmo * 50);
      }
    let repaircost = 1000 - ship.hp;
    let repairReply = prompt("Repairing will take" + repaircost / 100 + " ship parts, proceed?? y/n");
    if (repairReply === "y") {
      ship.hp = 1000;
      ship.parts -= repaircost / 100;
    }

    ship.fuel += buyFuel;
    ship.parts += buyParts;
    ship.food += buyFood;
    ship.ammo += buyAmmo;
    ship.money -= total;
    return ship;
  }


  ghostStation(ship) {
    let choice = prompt("Would you like to explore Ghost Station? y/n?");
    if (choice === "y") {
    let die1 = Math.floor(Math.random() * 2);
    if (die1 === 1) {
      ship.fuel += 5000;
      console.log(ship.fuel);
    }
    die1 = Math.floor(Math.random() * 2);
    if (die1 === 1) {
      ship.money += 5000;
      console.log(ship.money);
    }
    die1 = Math.floor(Math.random() * 2);
    if (die1 === 1) {
      ship.parts += 5000;
      console.log(ship.parts);
    }
    die1 = Math.floor(Math.random() * 2);
    if (die1 === 1) {
      ship.materials += 5000;
      console.log(ship.materials);
    }
    die1 = Math.floor(Math.random() * 2);
    if (die1 === 1) {
      ship.weapons += 5000;
      console.log(ship.weapons);
    }
    die1 = Math.floor(Math.random() * 2);
    if (die1 === 1) {
      ship.food += 5000;
      console.log(ship.food);
    }
    die1 = Math.floor(Math.random() * 2);
    die1 = 1;
    if (die1 === 1) {
      for (let i = 0; i < ship.crew.length; i++) {
        ship.crew[i].health -= 30;
        alert(ship.crew[i].health);
      }
    }
  } else {
    alert("You left the station alone");
  }


  }
}
