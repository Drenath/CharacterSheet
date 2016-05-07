//Species Variables
var species = "";
var startingAgility = 0;
var startingBrawn = 0;
var startingCunning = 0;
var startingExperience = 0;
var startingIntellect = 0;
var startingPresence = 0;
var startingWillpower = 0;
var strainThreshold = 0;
var woundThreshold = 0;

//Other Variables
var stats = "";

//Species Function
function PickingaSpecies(varA) {
  species = varA;
  if(species === "Bothan") {
    startingAgility = 2;
    startingBrawn = 1;
    startingCunning = 3;
    startingExperience = 100; 
    startingIntellect = 2;
    startingPresence = 2;
    startingWillpower = 2;
    strainThreshold = 11 + startingWillpower;
    woundThreshold = 10 + startingBrawn;
  }
  else if(species === "Droid") {
    startingAgility = 1;
    startingBrawn = 1;
    startingCunning = 1;
    startingExperience = 175; 
    startingIntellect = 1;
    startingPresence = 1;
    startingWillpower = 1;
    strainThreshold = 10 + startingWillpower;
    woundThreshold = 10 + startingBrawn;
  }
  else if(species === "Gand") {
    startingAgility = 2;
    startingBrawn = 2;
    startingCunning = 2;
    startingExperience = 100;
    startingIntellect = 2;
    startingPresence = 1;
    startingWillpower = 3;
    strainThreshold = 10 + startingWillpower;
    woundThreshold = 10 + startingBrawn;
  }
  else if(species === "Human") {
    startingAgility = 2;
    startingBrawn = 2;
    startingCunning = 2;
    startingExperience = 110; 
    startingIntellect = 2;
    startingPresence = 2;
    startingWillpower = 2;
    strainThreshold = 10 + startingWillpower; 
    woundThreshold = 10 + startingBrawn;
  }
  else if(species === "Rodian") {
    startingAgility = 2;
    startingBrawn = 3;
    startingCunning = 2;
    startingExperience = 100; 
    startingIntellect = 2;
    startingPresence = 2;
    startingWillpower = 1;
    strainThreshold = 10 + startingWillpower;
    woundThreshold = 10 + startingBrawn;
  }
  else if(species === "Trandoshan") {
    startingAgility = 1;
    startingBrawn = 3;
    startingCunning = 2;
    startingExperience = 90; 
    startingIntellect = 2;
    startingPresence = 2;
    startingWillpower = 2;
    strainThreshold = 9 + startingWillpower;
    woundThreshold = 12 + startingBrawn;
  }
  else if(species === "Twilek") {
    startingAgility = 2;
    startingBrawn = 1;
    startingCunning = 2;
    startingExperience = 100; 
    startingIntellect = 2;
    startingPresence = 3;
    startingWillpower = 2;
    strainThreshold = 11 + startingWillpower;
    woundThreshold = 10 + startingBrawn;
  }
  else if(species === "Wookiee") {
    startingAgility = 2;
    startingBrawn = 3;
    startingCunning = 2;
    startingExperience = 90; 
    startingIntellect = 2;
    startingPresence = 2;
    startingWillpower = 1;
    strainThreshold = 8 + startingWillpower;
    woundThreshold = 14 + startingBrawn;
  }
  //Stats variable set in case if I want to call upon it at any other point.
  stats = "\nBrawn: " + startingBrawn + "\nAgility: " + startingAgility + "\nCunning: " + startingCunning + 
           "\nIntellect: " + startingIntellect + "\nPresence: " + startingPresence + "\nWillpower: " + 
           startingWillpower + "\nStrain Threshold: " + strainThreshold + "\nWound Threshold: " + woundThreshold +
           "\nExperience: " + startingExperience;

  document.getElementById("chrsts").innerHTML = "Your species is " + species + stats;
}





