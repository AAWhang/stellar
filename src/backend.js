export class Ship {

  constructor(hp,money){
    this.hp = hp;
    this.fuel = 80000;
    this.money = money;
    this.parts = 0;
    this.materials = 0;
    this.weapons = 0;
    this.shield = 0;
    this.crew = [];
    this.food = 100000;
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
      this.health = 100;
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
        return "Inhospitable;"
      }
    };
    this.materials = Math.floor(Math.random() * 100 + 1);;
    this.gravity = Math.floor(Math.random() * 5000 + 1);;
  }
}

export class SpaceEvents {
  gravityWell(fuel){
    alert("gravityWell");
    return fuel - 2000;
  }

  astroidBelt(hp){
    alert("astroidBelt")
    return hp - 200;
  }

  meteors(hp){
    alert("meteors")
    return hp - 200;
  }

  spacePirates(hp,crew){
    alert("spacePirates")
    let death = crew.pop();
    alert(death.occupation + " was killed!");
    return hp - 100;
  }

  spaceVirus(crew){
    alert("spaceVirus")
    for (let i = 0; i <= crew.length; i++) {
      crew[i].health -= 30;
    }
  }

  spaceMadness(crew){
    alert("spaceMadness")
    for (let i = 1; i <= crew.length; i++) {
      crew[i].health -= 40;
    }
  }

  alienEncounter(crew){
    let alien = "";
    let die1 = Math.floor(Math.random() * 6 + 1);
    if (die1 % 2 === 0) {
      alien = "hostile";
      for (let i = 0; i <= crew.length; i++) {
        crew[i].health -= 30;
      }
    } else {
      alien = "friendly";
    }
    alert("you find" + alien + "alien!")

  }

  wormhole(distance){
    let die1 = Math.floor(Math.random() * 600 + 1);
    alert("wormhole")
    return die1 * 1000;
  }

  spaceStation(){
    alert("spaceStation")
  }
  crewGain(){

  }
  foodGain(){

  }
  fuelGain(){

  }
  partsGain(){

  }
  ghostStation(){

  }
}
