//Skill Variables
var astrogation = 0;
var athletics = 0;
var brawl = 0;
var charm = 0;
var coercion = 0;
var computers = 0;
var cool = 0;
var coordination = 0;
var coreWorlds = 0;
var deception = 0;
var discipline = 0;
var education = 0;
var gunnery = 0;
var leadership = 0;
var lore = 0;
var mechanics = 0;
var medicine = 0;
var melee = 0;
var negotiation = 0;
var outerRim = 0;
var perception = 0;
var pilotingPlanetary = 0;
var pilotingSpace = 0;
var rangedHeavy = 0;
var rangedLight = 0;
var resilience = 0;
var skulduggery = 0;
var stealth = 0;
var streetwise = 0;
var survival = 0;
var underworld = 0;
var vigilance = 0;
var xenology = 0;

//Other Variables
var classSkill = "";
var index = 2;
var iOutput = "";
var skillCounter = 1;
var wOutput = "";

/*It is impossible to get past a 2 right now in any skill with the current version of this program, but I am planning on 
implementing other elements later on to allow it to get to 5. I just set it up this way for convenience later.*/
//Class Skills Variable
function PickingClassSkills(varC){
  classSkill = varC;
  if(classSkill === "astrogation" && skillCounter <= 2) {
    astrogation += 1;
    skillCounter ++;
    if(astrogation === 1) {
      wOutput += "Your Astrogation rank is " + astrogation + ". You have a basic knowledge of the galaxy.\n";
    }
    else if(astrogation === 2) {
      wOutput += "Your Astrogation rank is " + astrogation + ". You have knowledge of the galaxy as a whole.\n";
    }
    else if(astrogation === 3) {
      wOutput += "Your Astrogation rank is " + astrogation + ". You have knowledge of all major sectors and planets.\n";
    }
    else if(astrogation === 4) {
      wOutput += "Your Astrogation rank is " + astrogation + ". You have knowledge of all planets and sectors.\n";
    }
    else if(astrogation === 5) {
      wOutput += "Your Astrogation rank is " + astrogation + ". Your knowledge of the galaxy is unrivalled.\n";
    }
  }
  if(classSkill === "athletics" && skillCounter <= 2) {
    athletics += 1;
    skillCounter ++;
    if(athletics === 1) {
      wOutput += "Your Athletics rank is " + athletics + ". You are somewhat athletic.\n";
    }
    else if(athletics === 2) {
      wOutput += "Your Athletics rank is " + athletics + ". You are able to maneuver with ease.\n";
    }
    else if(athletics === 3) {
      wOutput += "Your Athletics rank is " + athletics + ". You are extremely agile.\n";
    }
    else if(athletics === 4) {
      wOutput += "Your Athletics rank is " + athletics + ". Your speed is so fast, it is hard to keep track of you.\n";
    }
    else if(athletics === 5) {
      wOutput += "Your Athletics rank is " + athletics + ". Your reactions are almost instant.\n";
    }
  }
  if(classSkill === "brawl" && skillCounter <= 2) {
    brawl += 1;
    skillCounter ++;
    if(brawl === 1) {
      wOutput += "Your Brawl rank is " + brawl + ". You know the basics of unarmed combat.\n";
    }
    else if(brawl === 2) {
      wOutput += "Your Brawl rank is " + brawl + ". You are familiar with unarmed combat.\n";
    }
    else if(brawl === 3) {
      wOutput += "Your Brawl rank is " + brawl + ". You are skilled with unarmed combat.\n";
    }
    else if(brawl === 4) {
      wOutput += "Your Brawl rank is " + brawl + ". You are able to incapacitate foes with ease.\n";
    }
    else if(brawl === 5) {
      wOutput += "Your Brawl rank is " + brawl + ". Your hand to hand combat is unrivalled.\n";
    }
  }
  if(classSkill === "charm" && skillCounter <= 2) {
   charm += 1;
    skillCounter ++;
    if(charm === 1) {
      wOutput += "Your Charm rank is " + charm + ". You understand the basics of charming people.\n";
    }
    else if(charm === 2) {
      wOutput += "Your Charm rank is " + charm + ". You understand most social interactions.\n";
    }
    else if(charm === 3) {
      wOutput += "Your Charm rank is " + charm + ". Your personality and looks are very appealing to others.\n";
    }
    else if(charm === 4) {
      wOutput += "Your Charm rank is " + charm + ". People go out of their way to please you.\n";
    }
    else if(charm === 5) {
      wOutput += "Your Charm rank is " + charm + ". You are able to get anything you want from people.\n";
    }
  }
  if(classSkill === "coercion" && skillCounter <= 2) {
    coercion += 1;
    skillCounter ++;
    if(coercion === 1) {
      wOutput += "Your Coercion rank is " + coercion + ". You are not easily swayed.\n";
    }
    else if(coercion === 2) {
      wOutput += "Your Coercion rank is " + coercion + ". You are able to withstand persuasion.\n";
    }
    else if(coercion === 3) {
      wOutput += "Your Coercion rank is " + coercion + ". You are able to resist even torture to divulge information. ";
    }
    else if(coercion === 4) {
      wOutput += "Your Coercion rank is " + coercion + ". It is extremely difficult to convince you to do anything.\n";
    }
    else if(coercion === 5) {
      wOutput += "Your Coercion rank is " + coercion + ". You have an unbreakable willpower.\n";
    }
  } 
  if(classSkill === "computers" && skillCounter <= 2) {
    computers += 1;
    skillCounter ++;
    if(computers === 1) {
      wOutput += "Your Computer rank is " + computers + ". You understand the basics of some devices.\n";
    }
    else if(computers === 2) {
      wOutput += "Your Computer rank is " + computers + ". You understand the basics of most devices.\n";
    }
    else if(computers === 3) {
      wOutput += "Your Computer rank is " + computers + ". You understand the ins and outs of devices.\n";
    }
    else if(computers === 4) {
      wOutput += "Your Computer rank is " + computers + ". You are extremely skilled at finding and using information in devices.\n";
    }
    else if(computers === 5) {
      wOutput += "Your Computer rank is " + computers + ". Your hacking skills are unrivalled";
    }
  } 
  if(classSkill === "cool" && skillCounter <= 2) {
    cool += 1;
    skillCounter ++;
    if(cool === 1) {
      wOutput += "Your Cool rank is " + cool + ". You are kind of cool.\n";
    }
    else if(cool === 2) {
      wOutput += "Your Cool rank is " + cool + ". You are cooler than most people.\n";
    }
    else if(cool === 3) {
      wOutput += "Your Cool rank is " + cool + ". People think that you are cool.\n";
    }
    else if(cool === 4) {
      wOutput += "Your Cool rank is " + cool + ". You know you are the coolest.\n";
    }
    else if(cool === 5) {
      wOutput += "Your Cool rank is " + cool + ". People know you are the coolest.\n";
    }
  }
  if(classSkill === "coordination" && skillCounter <= 2) {
    coordination += 1;
    skillCounter ++;
    if(coordination === 1) {
      wOutput += "Your Coordination rank is " + coordination + ". You are somewhat coordinated.\n";
    }
    else if(coordination === 2) {
      wOutput += "Your Coordination rank is " + coordination + ". You are coordinated.\n";
    }
    else if(coordination === 3) {
      wOutput += "Your Coordination rank is " + coordination + ". You can travel across narrow surfaces with ease.\n";
    }
    else if(coordination === 4) {
      wOutput += "Your Coordination rank is " + coordination + ". You can cross almost any obstacle you meet.\n";
    }
    else if(coordination === 5) {
      wOutput += "Your Coordination rank is " + coordination + ". Your coordination is perfect.\n";
    }
  } 
  if(classSkill === "coreWorlds" && skillCounter <= 2) {
    coreWorlds += 1;
    skillCounter ++;
    if(coreWorlds === 1) {
      wOutput += "Your Core Worlds rank is " + coreWorlds + ". You have a basic understanding of the core worlds.\n";
    }
    else if(coreWorlds === 2) {
      wOutput += "Your Core Worlds rank is " + coreWorlds + ". You understand the behaviors of people from certain core worlds.\n";
    }
    else if(coreWorlds === 3) {
      wOutput += "Your Core Worlds rank is " + coreWorlds + ". You can easily identify someone from the core worlds.\n";
    }
    else if(coreWorlds === 4) {
      wOutput += "Your Core Worlds rank is " + coreWorlds + ". You can identify items from the core worlds.\n";
    }
    else if(coreWorlds === 5) {
      wOutput += "Your Core Worlds rank is " + coreWorlds + ". You can identify anything from the core worlds.\n";
    }
  }
  if(classSkill === "deception" && skillCounter <= 2) {
    deception += 1;
    skillCounter ++;
    if(deception === 1) {
      wOutput += "Your Deception rank is " + deception + ". You know the basics of tricking people.\n";
    }
    else if(deception === 2) {
      wOutput += "Your Deception rank is " + deception + ". You are able to to distract and mislead to get what you want.\n";
    }
    else if(deception === 3) {
      wOutput += "Your Deception rank is " + deception + ". You can deceive people with ease.\n";
    }
    else if(deception === 4) {
      wOutput += "Your Deception rank is " + deception + ". You can convince almost anyone that what you are saying is true.\n";
    }
    else if(deception === 5) {
      wOutput += "Your Deception rank is " + deception + ". It is impossible to distinguish your lies from the truth.\n";
    }
  }
  if(classSkill === "discipline" && skillCounter <= 2) {
    discipline += 1;
    skillCounter ++;
    if(discipline === 1) {
      wOutput += "Your Discipline rank is " + discipline + ". You can somewhat control your emotions.\n";
    }
    else if(discipline === 2) {
      wOutput += "Your Discipline rank is " + discipline + ". You are able to calm yourself in difficult times.\n";
    }
    else if(discipline === 3) {
      wOutput += "Your Discipline rank is " + discipline + ". You are able to distinguish lies from truth with ease.\n";
    }
    else if(discipline === 4) {
      wOutput += "Your Discipline rank is " + discipline + ". It is nearly impossible to get to you.\n";
    }
    else if(discipline === 5) {
      wOutput += "Your Discipline rank is " + discipline + ". You are always in control of your emotions.\n";
    }
  } 
  if(classSkill === "education" && skillCounter <= 2) {
    education += 1;
    skillCounter ++;
    if(education === 1) {
      wOutput += "Your Education rank is " + education + ". You are somewhat educated.\n";
    }
    else if(education === 2) {
      wOutput += "Your Education rank is " + education + ". You are educated.\n";
    }
    else if(education === 3) {
      wOutput += "Your Education rank is " + education + ". You have a higher understanding of science and politics.\n";
    }
    else if(education === 4) {
      wOutput += "Your Education rank is " + education + ". You are an expert in most areas of education.\n";
    }
    else if(education === 5) {
      wOutput += "Your Education rank is " + education + ". You are considered a genius.\n";
    }
  }
  if(classSkill === "gunnery" && skillCounter <= 2) {
    gunnery += 1;
    skillCounter ++;
    if(gunnery === 1) {
      wOutput += "Your Gunnery rank is " + gunnery + ". You know the basics of being a gunner.\n";
    }
    else if(gunnery === 2) {
      wOutput += "Your Gunnery rank is " + gunnery + ". You are proficient with gun emplacements.\n";
    }
    else if(gunnery === 3) {
      wOutput += "Your Gunnery rank is " + gunnery + ". You are a highly skilled gunner.\n";
    }
    else if(gunnery === 4) {
      wOutput += "Your Gunnery rank is " + gunnery + ". You are one of the best shooters in the galaxy.\n";
    }
    else if(gunnery === 5) {
      wOutput += "Your Gunnery rank is " + gunnery + ". Your accuracy and skill as a gunner are unmatched.\n";
    }
  }
  if(classSkill === "leadership" && skillCounter <= 2) {
    leadership += 1;
    skillCounter ++;
    if(leadership === 1) {
      wOutput += "Your Leadership rank is " + leadership + ". Your know the basics of leadership.\n";
    }
    else if(leadership === 2) {
      wOutput += "Your Leadership rank is " + leadership + ". You are able to rally your allies.\n";
    }
    else if(leadership === 3) {
      wOutput += "Your Leadership rank is " + leadership + ". Your can sway crowds with ease.\n";
    }
    else if(leadership === 4) {
      wOutput += "Your Leadership rank is " + leadership + ". Your very presence inspires.\n";
    }
    else if(leadership === 5) {
      wOutput += "Your Leadership rank is " + leadership + ". Your leadership is unrivalled.\n";
    }
  } 
  if(classSkill === "lore" && skillCounter <= 2) {
    lore += 1;
    skillCounter ++;
    if(lore === 1) {
      wOutput += "Your Lore rank is " + lore + ". You have a basic understanding of history.\n";
    }
    else if(lore === 2) {
      wOutput += "Your Lore rank is " + lore + ". You can decipher basic writings old writings.\n";
    }
    else if(lore === 3) {
      wOutput += "Your Lore rank is " + lore + ". You have heard most legends and stories of older times.\n";
    }
    else if(lore === 4) {
      wOutput += "Your Lore rank is " + lore + ". You can decipher almost anything.\n";
    }
    else if(lore === 5) {
      wOutput += "Your Lore rank is " + lore + ". You know everything about the old world.\n";
    }
  }
  if(classSkill === "mechanics" && skillCounter <= 2) {
    mechanics += 1;
    skillCounter ++;
    if(mechanics === 1) {
      wOutput += "Your Mechanics rank is " + mechanics + ". You know the basics of mechanics.\n";
    }
    else if(mechanics === 2) {
      wOutput += "Your Mechanics rank is " + mechanics + ". You are able to repair most devices.\n";
    }
    else if(mechanics === 3) {
      wOutput += "Your Mechanics rank is " + mechanics + ". You can construct new devices from old ones.\n";
    }
    else if(mechanics === 4) {
      wOutput += "Your Mechanics rank is " + mechanics + ". You can repair almost anything.\n";
    }
    else if(mechanics === 5) {
      wOutput += "Your Mechanics rank is " + mechanics + ". You are a master mechanic.\n";
    }
  } 
  if(classSkill === "medicine" && skillCounter <= 2) {
    medicine += 1;
    skillCounter ++;
    if(medicine === 1) {
      wOutput += "Your Medicine rank is " + medicine + ". You know the basics of medicine.\n";
    }
    else if(medicine === 2) {
      wOutput += "Your Medicine rank is " + medicine + ". You can identify most poisons and diseases.\n";
    }
    else if(medicine === 3) {
      wOutput += "Your Medicine rank is " + medicine + ". You can heal most sever wounds.\n";
    }
    else if(medicine === 4) {
      wOutput += "Your Medicine rank is " + medicine + ". You can treat most diseases and poisons.\n";
    }
    else if(medicine === 5) {
      wOutput += "Your Medicine rank is " + medicine + ". You are able to treat the most severe wounds.\n";
    }
  }
  if(classSkill === "melee" && skillCounter <= 2) {
    melee += 1;
    skillCounter ++;
    if(melee === 1) {
      wOutput += "Your Melee rank is " + melee + ". You know the basics of melee combat.\n";
    }
    else if(melee === 2) {
      wOutput += "Your Melee rank is " + melee + ". You are familiar with melee combat.\n";
    }
    else if(melee === 3) {
      wOutput += "Your Melee rank is " + melee + ". You are skilled with melee combat.\n";
    }
    else if(melee === 4) {
      wOutput += "Your Melee rank is " + melee + ". You are able to incapacitate foes with ease.\n";
    }
    else if(melee === 5) {
      wOutput += "Your Melee rank is " + melee + ". Your melee combat is unrivalled.\n";
    }
  }
  if(classSkill === "negotiation" && skillCounter <= 2) {
    negotiation += 1;
    skillCounter ++;
    if(negotiation === 1) {
      wOutput += "Your Negotiation rank is " + negotiation + ". You know the basics of negotiation.\n";
    }
    else if(negotiation === 2) {
      wOutput += "Your Negotiation rank is " + negotiation + ". You are skilled at negotiation.\n";
    }
    else if(negotiation === 3) {
      wOutput += "Your Negotiation rank is " + negotiation + ". You almost always end up with a favorable deal.\n";
    }
    else if(negotiation === 4) {
      wOutput += "Your Negotiation rank is " + negotiation + ". You are a master of negotiating.\n";
    }
    else if(negotiation === 5) {
      wOutput += "Your Negotiation rank is " + negotiation + ". You can negotiate out of impossible situations.\n";
    }
  }
  if(classSkill === "outerRim" && skillCounter <= 2) {
    outerRim += 1;
    skillCounter ++;
    if(outerRim === 1) {
      wOutput += "Your Outer Rim rank is " + outerRim + ". You know the general layout of the Outer Rim.\n";
    }
    else if(outerRim === 2) {
      wOutput += "Your Outer Rim rank is " + outerRim + ". You know the locations of some resources in the Outer Rim.\n";
    }
    else if(outerRim === 3) {
      wOutput += "Your Outer Rim rank is " + outerRim + ". You know the social conducts of people from certain areas in the Outer Rim.\n";
    }
    else if(outerRim === 4) {
      wOutput += "Your Outer Rim rank is " + outerRim + ". You know where identify most items from the Outer Rim.\n";
    }
    else if(outerRim === 5) {
      wOutput += "Your Outer Rim rank is " + outerRim + ". You know everything there is to know about the Outer Rim.\n";
    }
  }
  if(classSkill === "perception" && skillCounter <= 2) {
    perception += 1;
    skillCounter ++;
    if(perception === 1) {
      wOutput += "Your Perception rank is " + perception + ". You can perceive few things.\n";
    }
    else if(perception === 2) {
      wOutput += "Your Perception rank is " + perception + ". You can perceive large details.\n";
    }
    else if(perception === 3) {
      wOutput += "Your Perception rank is " + perception + ". You can perceive small details.\n";
    }
    else if(perception === 4) {
      wOutput += "Your Perception rank is " + perception + ". You know can perceive obscured details.\n";
    }
    else if(perception === 5) {
      wOutput += "Your Perception rank is " + perception + ". You know can perceive anything.\n";
    }
  }
  if(classSkill === "pilotingPlanetary" && skillCounter <= 2) {
    pilotingPlanetary += 1;
    skillCounter ++;
    if(pilotingPlanetary === 1) {
      wOutput += "Your Piloting (Planetary) rank is " + pilotingPlanetary + ". You know the basics of piloting.\n";
    }
    else if(pilotingPlanetary === 2) {
      wOutput += "Your Piloting (Planetary) rank is " + pilotingPlanetary + ". You can pilot most ships.\n";
    }
    else if(pilotingPlanetary === 3) {
      wOutput += "Your Piloting (Planetary) rank is " + pilotingPlanetary + ". You are an ace pilot.\n";
    }
    else if(pilotingPlanetary === 4) {
      wOutput += "Your Piloting (Planetary) rank is " + pilotingPlanetary + ". Ships feel an extension of you.\n";
    }
    else if(pilotingPlanetary === 5) {
      wOutput += "Your Piloting (Planetary) rank is " + pilotingPlanetary + ". You skills as a pilot are unmatched.\n";
    }
  }
  if(classSkill === "pilotingSpace" && skillCounter <= 2) {
    pilotingSpace += 1;
    skillCounter ++;
    if(pilotingSpace === 1) {
      wOutput += "Your Piloting (Space) rank is " + pilotingSpace + ". You know the basics of piloting.\n";
    }
    else if(pilotingSpace === 2) {
      wOutput += "Your Piloting (Space) rank is " + pilotingSpace + ". You can pilot most ships.\n";
    }
    else if(pilotingSpace === 3) {
      wOutput += "Your Piloting (Space) rank is " + pilotingSpace + ". You are an ace pilot.\n";
    }
    else if(pilotingSpace === 4) {
      wOutput += "Your Piloting (Space) rank is " + pilotingSpace + ". Ships feel an extension of you.\n";
    }
    else if(pilotingSpace === 5) {
      wOutput += "Your Piloting (Space) rank is " + pilotingSpace + ". You skills as a pilot are unmatched.\n";
    }
  }
  if(classSkill === "rangedHeavy" && skillCounter <= 2) {
    rangedHeavy += 1;
    skillCounter ++;
    if(rangedHeavy === 1) {
      wOutput += "Your Ranged (Heavy) rank is " + rangedHeavy + ". You know the basics of heavy firearms.\n";
    }
    else if(rangedHeavy === 2) {
      wOutput += "Your Ranged (Heavy) rank is " + rangedHeavy + ". You can account for wind resistance with your firearms.\n";
    }
    else if(rangedHeavy === 3) {
      wOutput += "Your Ranged (Heavy) rank is " + rangedHeavy + ". You are a highly skilled marksman.\n";
    }
    else if(rangedHeavy === 4) {
      wOutput += "Your Ranged (Heavy) rank is " + rangedHeavy + ". You are one of the best shooters in the galaxy.\n";
    }
    else if(rangedHeavy === 5) {
      wOutput += "Your Ranged (Heavy) rank is " + rangedHeavy + ". Your accuracy and skill are unmatched with firearms.\n";
    }
  }
  if(classSkill === "rangedLight" && skillCounter <= 2) {
    rangedLight += 1;
    skillCounter ++;
    if(rangedLight === 1) {
      wOutput += "Your Ranged (Light) rank is " + rangedLight + ". You know the basics of light firearms.\n";
    }
    else if(rangedLight === 2) {
      wOutput += "Your Ranged (Light) rank is " + rangedLight + ". You can account for wind resistance with your firearms.\n";
    }
    else if(rangedLight === 3) {
      wOutput += "Your Ranged (Light) rank is " + rangedLight + ". You are a highly skilled marksman.\n";
    }
    else if(rangedLight === 4) {
      wOutput += "Your Ranged (Light) rank is " + rangedLight + ". You are one of the best shooters in the galaxy.\n";
    }
    else if(rangedLight === 5) {
      wOutput += "Your Ranged (Light) rank is " + rangedLight + ". Your acuaracy and skill are unmatched with firearms.\n";
    }
  }
  if(classSkill === "resilience" && skillCounter <= 2) {
    resilience += 1;
    skillCounter ++;
    if(resilience === 1) {
      wOutput += "Your Resilience rank is " + resilience + ". You become fatigued less easily.\n";
    }
    else if(resilience === 2) {
      wOutput += "Your Resilience rank is " + resilience + ". Toxins affect your body less than normal.\n";
    }
    else if(resilience === 3) {
      wOutput += "Your Resilience rank is " + resilience + ". Your body is unaffected by weather and pollution.\n";
    }
    else if(resilience === 4) {
      wOutput += "Your Resilience rank is " + resilience + ". You are immune to toxins.\n";
    }
    else if(resilience === 5) {
      wOutput += "Your Resilience rank is " + resilience + ". Your body is resistant to almost all affects.\n";
    }
  }
  if(classSkill === "skulduggery" && skillCounter <= 2) {
    skulduggery += 1;
    skillCounter ++;
    if(skulduggery === 1) {
      wOutput += "Your Skulduggery rank is " + skulduggery + ". You know the basics of being a criminal.\n";
    }
    else if(skulduggery === 2) {
      wOutput += "Your Skulduggery rank is " + skulduggery + ". You are a proficient pickpocket.\n";
    }
    else if(skulduggery === 3) {
      wOutput += "Your Skulduggery rank is " + skulduggery + ". You are proficient at stealing undetected.\n";
    }
    else if(skulduggery === 4) {
      wOutput += "Your Skulduggery rank is " + skulduggery + ". You are a master thief.\n";
    }
    else if(skulduggery === 5) {
      wOutput += "Your Skulduggery rank is " + skulduggery + ". Your skills as a criminal are unmatched.\n";
    }
  }
  if(classSkill === "stealth" && skillCounter <= 2) {
    stealth += 1;
    skillCounter ++;
    if(stealth === 1) {
      wOutput += "Your Stealth rank is " + stealth + ". You know the basics of sneaking.\n";
    }
    else if(stealth === 2) {
      wOutput += "Your Stealth rank is " + stealth + ". You are proficient at sneaking.\n";
    }
    else if(stealth === 3) {
      wOutput += "Your Stealth rank is " + stealth + ". You blend into your environment with ease.\n";
    }
    else if(stealth === 4) {
      wOutput += "Your Stealth rank is " + stealth + ". You are a master of stealth.\n";
    }
    else if(stealth === 5) {
      wOutput += "Your Stealth rank is " + stealth + ". You are practically invisible when you want to be.\n";
    }
  }
  if(classSkill === "streetwise" && skillCounter <= 2) {
    streetwise += 1;
    skillCounter ++;
    if(streetwise === 1) {
      wOutput += "Your Streetwise rank is " + streetwise + ". You know the basics of how to act around criminals.\n";
    }
    else if(streetwise === 2) {
      wOutput += "Your Streetwise rank is " + streetwise + ". You know how to act as if you were a criminal.\n";
    }
    else if(streetwise === 3) {
      wOutput += "Your Streetwise rank is " + streetwise + ". You can pick up on subtle body language and attitudes.\n";
    }
    else if(streetwise === 4) {
      wOutput += "Your Streetwise rank is " + streetwise + ". You can easily identify criminals and black market dealers.\n";
    }
    else if(streetwise === 5) {
      wOutput += "Your Streetwise rank is " + streetwise + ". You are a master of fitting in with criminals and dealers.\n";
    }
  }
  if(classSkill === "survival" && skillCounter <= 2) {
    survival += 1;
    skillCounter ++;
    if(survival === 1) {
      wOutput += "Your Survival rank is " + survival + ". You know the basics of survival.\n";
    }
    else if(survival === 2) {
      wOutput += "Your Survival rank is " + survival + ". You are adept at survival.\n";
    }
    else if(survival === 3) {
      wOutput += "Your Survival rank is " + survival + ". You are a master of wilderness.\n";
    }
    else if(survival === 4) {
      wOutput += "Your Survival rank is " + survival + ". You are a master of survival.\n";
    }
    else if(survival === 5) {
      wOutput += "Your Survival rank is " + survival + ". You know the wilderness inside and out.\n";
    }
  }
  if(classSkill === "underworld" && skillCounter <= 2) {
    underworld += 1;
    skillCounter ++;
    if(underworld === 1) {
      wOutput += "Your Underworld rank is " + underworld + ". You know the basics of the underworld.\n";
    }
    else if(underworld === 2) {
      wOutput += "Your Underworld rank is " + underworld + ". You know about some of the criminal activities that happen.\n";
    }
    else if(underworld === 3) {
      wOutput += "Your Underworld rank is " + underworld + ". You know about certain gangs in certain areas.\n";
    }
    else if(underworld === 4) {
      wOutput += "Your Underworld rank is " + underworld + ". You understand criminals and what they will do";
    }
    else if(underworld === 5) {
      wOutput += "Your Underworld rank is " + underworld + ". You know everything about criminals and the underworld.\n";
    }
  }
  if(classSkill === "vigilance" && skillCounter <= 2) {
    vigilance += 1;
    skillCounter ++;
    if(vigilance === 1) {
      wOutput += "Your Vigilance rank is " + vigilance + ". You are somewhat vigilant.\n";
    }
    else if(vigilance === 2) {
      wOutput += "Your Vigilance rank is " + vigilance + ". You are well prepared for some situations.\n";
    }
    else if(vigilance === 3) {
      wOutput += "Your Vigilance rank is " + vigilance + ". You are well prepared for most situations.\n";
    }
    else if(vigilance === 4) {
      wOutput += "Your Vigilance rank is " + vigilance + ". You are ready for anything that can happen.\n";
    }
    else if(vigilance === 5) {
      wOutput += "Your Vigilance rank is " + vigilance + ". You react to any situation almost instantly.\n";
    }
  }
  if(classSkill === "xenology" && skillCounter <= 2) {
    xenology += 1;
    skillCounter ++;
    if(xenology === 1) {
      wOutput += "Your Xenology rank is " + xenology + ". You know the basics of most species.\n";
    }
    else if(xenology === 2) {
      wOutput += "Your Xenology rank is " + xenology + ". You are familiar with most species.\n";
    }
    else if(xenology === 3) {
      wOutput += "Your Xenology rank is " + xenology + ". You know the biology of most species";
    }
    else if(xenology === 4) {
      wOutput += "Your Xenology rank is " + xenology + ". You know the mannerisms of most species.\n";
    }
    else if(xenology === 5) {
      wOutput += "Your Xenology rank is " + xenology + ". You can identify the weaknesses of all species.\n";
    }
  }
  //Resets ALL skills back to 0, and resets skill counter
  if(classSkill === "reset") {
    skillCounter = 1;
    wOutput = "";
    astrogation = 0;
    athletics = 0;
    brawl = 0;
    charm = 0;
    coercion = 0;
    computers = 0;
    cool = 0;
    coordination = 0;
    coreWorlds = 0;
    deception = 0;
    discipline = 0;
    education = 0;
    gunnery = 0;
    leadership = 0;
    lore = 0;
    mechanics = 0;
    medicine = 0;
    melee = 0;
    negotiation = 0;
    outerRim = 0;
    perception = 0;
    pilotingPlanetary = 0;
    pilotingSpace = 0;
    rangedHeavy = 0;
    rangedLight = 0;
    resilience = 0;
    skulduggery = 0;
    stealth = 0;
    streetwise = 0;
    survival = 0;
    underworld = 0;
    vigilance = 0;
    xenology = 0;
    //Resets all checked boxes in HTML
    document.getElementById("deselect1").checked = false;
    document.getElementById("deselect2").checked = false;
    document.getElementById("deselect3").checked = false;
    document.getElementById("deselect4").checked = false;
    document.getElementById("deselect5").checked = false;
    document.getElementById("deselect6").checked = false;
    document.getElementById("deselect7").checked = false;
    document.getElementById("deselect8").checked = false;
    document.getElementById("deselect9").checked = false;
    document.getElementById("deselect10").checked = false;
    document.getElementById("deselect11").checked = false;
    document.getElementById("deselect12").checked = false;
    document.getElementById("deselect13").checked = false;
    document.getElementById("deselect14").checked = false;
    document.getElementById("deselect15").checked = false;
    document.getElementById("deselect16").checked = false;
    document.getElementById("deselect17").checked = false;
    document.getElementById("deselect18").checked = false;
    document.getElementById("deselect19").checked = false;
    document.getElementById("deselect20").checked = false;
    document.getElementById("deselect21").checked = false;
    document.getElementById("deselect22").checked = false;
    document.getElementById("deselect23").checked = false;
    document.getElementById("deselect24").checked = false;
    document.getElementById("deselect25").checked = false;
    document.getElementById("deselect26").checked = false;
    document.getElementById("deselect27").checked = false;
    document.getElementById("deselect28").checked = false;
    document.getElementById("deselect29").checked = false;
    document.getElementById("deselect30").checked = false;
    document.getElementById("deselect31").checked = false;
    document.getElementById("deselect32").checked = false;
    document.getElementById("deselect33").checked = false;
  } 
  document.getElementById("chrspec").innerHTML = wOutput;
}

//Creates an initial statement of how many skills you can choose, and then is removed after picking a skill.
while(skillCounter < index) {
  iOutput = "You have " + ((index + 1) - skillCounter) + " skills remaining.\n";
  index --;
}
document.getElementById("chrspec").innerHTML += iOutput;



