//All return true or false statements are for a later version of this that I am currently working on.

//Class Skill Variables
var csAstrogation = false;
var csAthletics = false;
var csBrawl = false;
var csCharm = false;
var csCoercion = false;
var csComputers = false;
var csCool = false;
var csCoordination = false;
var csCoreWorlds = false;
var csDeception = false;
var csDiscipline = false;
var csEducation = false;
var csGunnery = false;
var csLeadership = false;
var csLore = false;
var csMechanics = false;
var csMedicine = false;
var csMelee = false;
var csNegotiation = false;
var csOuterRim = false;
var csPerception = false;
var csPilotingPlanetary = false;
var csPilotingSpace = false;
var csRangedHeavy = false;
var csRangedLight = false;
var csResilience = false;
var csSkulduggery = false;
var csStealth = false;
var csStreetwise = false;
var csSurvival = false;
var csUnderworld = false;
var csVigilance = false;
var csXenology = false;

//Other Variables
var career = "";
var specialization = "";

//Specialization and Career Function
function PickingaSpecialization(varB) {
  specialization = varB;
  if(specialization === "Assassain") {
    csMelee = true;
    csRangedHeavy = true;
    csSkulduggery = true;
    csStealth = true;
  }
 else if(specialization === "Gadgeteer") {
    csBrawl = true;
    csCoercion = true;
    csMechanics = true;
    csRangedLight = true;      
  }
  else if(specialization === "Survivalist") {
    csXenology = true;
    csPerception = true;
    csResilience = true;
    csSurvival = true;
  }
  else if(specialization === "Doctor") {
    csCool = true;
    csEducation = true;
    csMedicine = true;
    csResilience = true;
  } 
  else if(specialization === "Politico") {
    csCharm = true;
    csCoercion = true;
    csDeception = true;
    csCoreWorlds = true;
  }
  else if(specialization === "Scholar") {
    csOuterRim = true;
    csUnderworld = true;
    csXenology = true;
    csPerception = true;
  }
  else if(specialization === "Fringer") {
    csAthletics = true;
    csMedicine = true;
    csPilotingPlanetary = true;
    csSurvival = true;
  }
  else if(specialization === "Scout") {
    csDeception = true;
    csCoreWorlds = true;
    csUnderworld = true;
    csNegotiation = true;
  }
  else if(specialization === "Trader") {
    csDeception = true;
    csCoreWorlds = true;
    csUnderworld = true;
    csNegotiation = true;
  }
  else if(specialization === "Bodyguard") {
    csGunnery = true;
    csPerception = true;
    csPilotingPlanetary = true;
    csRangedHeavy = true;
  }
  else if(specialization === "Marauder") {
    csCoercion = true;
    csMelee = true;
    csResilience = true;
    csSurvival = true;
  }
  else if(specialization === "Mercenary") {
    csDiscipline = true;
    csGunnery = true;
    csLeadership = true;
    csRangedHeavy = true;
  }
  else if(specialization === "Pilot") {
    csAstrogation = true;
    csGunnery = true;
    csPilotingPlanetary = true;
    csPilotingSpace = true;
  }
  else if(specialization === "Scoundrel") {
    csCharm = true;
    csCool = true;
    csDeception = true;
    csRangedLight = true;
  }
  else if(specialization === "Thief") {
    csComputers = true;
    csSkulduggery = true;
    csStealth = true;
    csVigilance = true;
  }
  else if(specialization === "Mechanic") {
    csBrawl = true;
    csMechanics = true;
    csPilotingSpace = true;
    csSkulduggery = true;
  }
  else if(specialization === "Outlaw Tech") {
    csEducation = true;
    csUnderworld = true;
    csMechanics = true;
    csStreetwise = true;
  }
  else if(specialization === "Slicer") {
    csComputers = true;
    csEducation = true;
    csUnderworld = true;
    csStealth = true;
  }
  if(specialization === "Assassain" || specialization === "Gadgeteer" || specialization === "Survivalist") {
    career = "Bounty Hunter";
    csAthletics = true;
    csBrawl = true;
    csPerception = true;
    csPilotingPlanetary = true;
    csPilotingSpace = true;
    csRangedHeavy = true;
    csStreetwise = true;
    csVigilance = true;
  }
  if(specialization === "Doctor" || specialization === "Politico" || specialization === "Scholar") {
    career = "Colonist";
    csCharm = true;
    csDeception = true;
    csCoreWorlds = true;
    csEducation = true;
    csLore = true;
    csLeadership = true;
    csNegotiation = true;
    csStreetwise = true;
  }
  if(specialization === "Fringer" || specialization === "Scout" || specialization === "Trader") {
    career = "Explorer";
    csAstrogation = true;
    csCool = true;
    csLore = true;
    csOuterRim = true;
    csXenology = true;
    csPerception = true;
    csPilotingSpace = true;
    csSurvival = true;
  }
  if(specialization === "Bodyguard" || specialization === "Marauder" || specialization === "Mercenary") {
    career = "Hired Gun";
    csAthletics = true;
    csBrawl = true;
    csDiscipline = true;
    csMelee = true;
    csPilotingPlanetary = true;
    csRangedLight = true;
    csResilience = true;
    csVigilance = true;
  }
  if(specialization === "Pilot" || specialization === "Scoundrel" || specialization === "Thief") {
    career = "Smuggler";
    csCoordination = true;
    csDeception = true;
    csUnderworld = true;
    csPerception = true;
    csPilotingSpace = true;
    csSkulduggery = true;
    csStreetwise = true;
    csVigilance = true;
  }
  if(specialization === "Mechanic" || specialization === "Outlaw Tech" || specialization === "Slicer") {
    career = "Technician";
    csAstrogation = true;
    csComputers = true;
    csCoordination = true;
    csDiscipline = true;
    csOuterRim = true;
    csMechanics = true;
    csPerception = true;
    csPilotingPlanetary = true;
  }
  document.getElementById("chrcar").innerHTML = "\nYou have chosen the " + career + " career, and the " + specialization + " specialization.";
}