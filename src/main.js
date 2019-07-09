import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Ship,Crew,Planets,SpaceEvents} from "./backend.js";




$(function(){
  let missionEnvoy = new Ship(100,500);
  let spacemonths = 0;
  let spaceyears = 0;
  let planetArray = [];
  let crew1 = new Crew("male",35,"Snitch");
  let crew2 = new Crew("male",25,"Pianist");
  let crew3 = new Crew("female",99,"Witch");
  let crew4 = new Crew("female",17,"Minor");
  let whyGod = new SpaceEvents;
  missionEnvoy.crew = [crew1,crew2,crew3,crew4];
  let pause = 1;


  for (let p = 0; p <= 20; p++) {
    planetArray[p] = new Planets();
    }

  $("#d0").click(function(){
    if (pause === 1) {
      pause = 2;
    } else {
      pause = 1;
    }
    if (pause === 2) {
      clearInterval(timer);
      clearInterval(timer2);
    } else {
      timer = setInterval(logM, 700);
      timer2 = setInterval(logN, 50);
    }
  });



  let timer = setInterval(logM, 1000);

        function logM() {
       missionEnvoy.spaceTime += 1;
       spacemonths += 1;
       $("#a0").html(spacemonths);
      $("#b0").html(spaceyears);
       if (spacemonths >= 12) {
         spacemonths= 0;
         spaceyears += 1;
       }
       randomSpaceEvents(missionEnvoy.spaceTime);
     }

     let timer2 = setInterval(logN, 50);

           function logN() {
          missionEnvoy.distance += 50;
         $("#c0").html(missionEnvoy.distance);
        spaceHappenings(missionEnvoy.distance);
        }




  function spaceHappenings(gamedist) {
    if (gamedist === 120000) {
      whyGod.spaceStation();
    }
    if (gamedist === 240000) {
      whyGod.spaceStation();
    }
    if (gamedist === 360000) {
      whyGod.spaceStation();
    }
    if (gamedist === 600000) {
      whyGod.spaceStation();
    }

    if (gamedist % 80000 === 0) {
      planetEvents();
    }
  }

  function randomSpaceEvents(months) {
    let die1 = Math.floor(Math.random() * 12 + 1);
    if (months % 4 === 0){
      if (die1 === 3 || die1 === 6 || die1 === 9){
        thingsHappen();
      }
    }
  }

  function thingsHappen(){
    let die1 = Math.floor(Math.random() * 9 + 1);
    if (die1 === 1){
      whyGod.gravityWell();
    }
    if (die1 === 2){
      whyGod.astroidBelt();
    }
    if (die1 === 3){
      whyGod.meteors();
    }
    if (die1 === 4){
      whyGod.spacePirates();
    }
    if (die1 === 5){
      whyGod.spaceVirus();
    }
    if (die1 === 6){
      whyGod.spaceMadness();
    }
    if (die1 === 7){
      whyGod.alienEncounter();
    }
    if (die1 === 8){
      whyGod.wormhole();
    }
    if (die1 === 9){
      whyGod.ghostStation();
    }
  }

  function planetEvents(){
    let die1 = Math.floor(Math.random() * 20 + 1);
    alert("You have found a " + planetArray[die1].environment() + " planet");
  }


});
