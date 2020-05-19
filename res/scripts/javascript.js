var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

var creature = {
  name: "",
  cr: "",
  crIndex: "",
  baseline: "",
  theme: "",

  languages: "",
  senses: "",
  rarity: "",
  align: "",
  size: "",
  speed: "",
  genTraits: "",

  per: "",
  str: "",
  dex: "",
  con: "",
  int: "",
  wis: "",
  cha: "",

  acro: "",
  arca: "",
  athl: "",
  craf: "",
  dece: "",
  dipl: "",
  inti: "",
  medi: "",
  natu: "",
  occu: "",
  perf: "",
  reli: "",
  soci: "",
  stea: "",
  surv: "",
  thie: "",
  lore: "",

  fort: "",
  ref: "",
  will: "",

  ac: "",
  hp: "",
  immunities: "",
  resistances: "",
  weaknesses: "",

  strikeAtk: "",
  strikeDam: ""


};

let abilityModifierScales = [
  [3, 3, 2, 0], //lv-1
  [3, 3, 2, 0], //lv0
  [5, 4, 3, 1], //lv1
  [5, 4, 3, 1], //lv2
  [5, 4, 3, 1], //lv3
  [6, 5, 3, 2], //lv4
  [6, 5, 3, 2], //lv5
  [7, 5, 4, 2], //lv6
  [7, 6, 4, 2], //lv7
  [7, 6, 4, 3], //lv8
  [7, 6, 4, 3], //lv9
  [8, 7, 5, 3], //10
  [8, 7, 5, 3], //11
  [8, 7, 5, 3], //12
  [9, 8, 5, 4], //13
  [9, 8, 5, 4], //14
  [9, 8, 5, 4], //15
  [10, 9, 6, 5], //16
  [10, 9, 6, 5], //17
  [10, 9, 6, 5], //18
  [11, 10, 6, 5], //19
  [11, 10, 7, 6], //20
  [11, 10, 7, 6], //21
  [11, 10, 8, 6], //22
  [11, 10, 8, 6], //23
  [13, 12, 9, 7], //24
];

let perceptionScales = [
  [9, 8, 5, 2, 0], //lv-1
  [10, 9, 6, 3, 1], //lv0
  [11, 10, 7, 4, 2], //lv1
  [12, 11, 8, 5, 3], //lv2
  [14, 12, 9, 6, 4], //lv3
  [15, 14, 11, 8, 6], //lv4
  [17, 15, 12, 9, 7], //lv5
  [18, 17, 14, 11, 8], //lv6
  [20, 18, 15, 12, 10], //lv7
  [21, 19, 16, 13, 11], //lv8
  [23, 21, 18, 15, 12], //lv9
  [24, 22, 19, 16, 14], //10
  [26, 24, 21, 18, 15], //11
  [27, 25, 22, 19, 16], //12
  [29, 26, 23, 20, 18], //13
  [30, 28, 25, 22, 19], //14
  [32, 29, 26, 23, 20], //15
  [33, 30, 28, 25, 22], //16
  [35, 32, 29, 26, 23], //17
  [36, 33, 30, 27, 24], //18
  [38, 35, 32, 29, 26], //19
  [39, 36, 33, 30, 27], //20
  [41, 38, 35, 32, 28], //21
  [43, 39, 36, 33, 30], //22
  [44, 40, 37, 34, 31], //23
  [46, 42, 38, 36, 32], //24
];

let skillsScales = [
  [8, 5, 4, 2], //lv-1
  [9, 6, 5, 3], //lv0
  [10, 7, 6, 4], //lv1
  [11, 8, 7, 5], //lv2
  [13, 10, 9, 7], //lv3
  [15, 12, 10, 8], //lv4
  [16, 13, 12, 10], //lv5
  [18, 15, 13, 12], //lv6
  [20, 17, 15, 13], //lv7
  [21, 18, 16, 14], //lv8
  [23, 20, 18, 16], //lv9
  [25, 22, 19, 17], //10
  [26, 23, 21, 19], //11
  [28, 25, 22, 20], //12
  [30, 27, 24, 22], //13
  [31, 28, 25, 23], //14
  [33, 30, 27, 25], //15
  [35, 32, 28, 26], //16
  [36, 33, 30, 28], //17
  [38, 35, 31, 29], //18
  [40, 37, 33, 31], //19
  [41, 38, 34, 32], //20
  [43, 40, 36, 34], //21
  [45, 42, 37, 35], //22
  [46, 43, 38, 36], //23
  [48, 45, 40, 38], //24
];

let acScales = [
  [18, 15, 14, 12], //lv-1
  [19, 16, 15, 13], //lv0
  [19, 16, 15, 13], //lv1
  [21, 18, 17, 15], //lv2
  [22, 19, 18, 16], //lv3
  [24, 21, 20, 18], //lv4
  [25, 22, 21, 19], //lv5
  [27, 24, 23, 21], //lv6
  [28, 25, 24, 22], //lv7
  [30, 27, 26, 24], //lv8
  [31, 28, 27, 25], //lv9
  [33, 30, 29, 27], //10
  [34, 31, 30, 28], //11
  [36, 33, 32, 30], //12
  [37, 34, 33, 31], //13
  [39, 36, 35, 33], //14
  [40, 37, 36, 34], //15
  [42, 39, 38, 36], //16
  [43, 40, 39, 37], //17
  [45, 42, 41, 39], //18
  [46, 43, 42, 40], //19
  [48, 45, 44, 42], //20
  [49, 46, 45, 43], //21
  [51, 48, 47, 45], //22
  [52, 49, 48, 46], //23
  [54, 51, 50, 48], //24
];

let savingThrowScales = [
  [9, 8, 5, 2, 0], //lv-1
  [10, 9, 6, 3, 1], //lv0
  [11, 10, 7, 4, 2], //lv1
  [12, 11, 8, 5, 3], //lv2
  [14, 12, 9, 6, 4], //lv3
  [15, 14, 11, 8, 6], //lv4
  [17, 15, 12, 9, 7], //lv5
  [18, 17, 14, 11, 8], //lv6
  [20, 18, 15, 12, 10], //lv7
  [21, 19, 16, 13, 11], //lv8
  [23, 21, 18, 15, 12], //lv9
  [24, 22, 19, 16, 14], //10
  [26, 24, 21, 18, 15], //11
  [27, 25, 22, 19, 16], //12
  [29, 26, 23, 20, 18], //13
  [30, 28, 25, 22, 19], //14
  [32, 29, 26, 23, 20], //15
  [33, 30, 28, 25, 22], //16
  [35, 32, 29, 26, 23], //17
  [36, 33, 30, 27, 24], //18
  [38, 35, 32, 29, 26], //19
  [39, 36, 33, 30, 27], //20
  [41, 38, 35, 32, 28], //21
  [43, 39, 36, 33, 30], //22
  [44, 40, 37, 34, 31], //23
  [46, 42, 38, 36, 32], //24
];

let hpScales = [
  [9, 8, 6], //lv-1
  [20, 16, 13], //lv0
  [26, 21, 16], //lv1
  [40, 32, 25], //lv2
  [59, 48, 37], //lv3
  [78, 63, 48], //lv4
  [97, 78, 59], //lv5
  [123, 99, 75], //lv6
  [148, 119, 90], //lv7
  [173, 139, 105], //lv8
  [198, 159, 120], //lv9
  [223, 179, 135], //10
  [248, 199, 150], //11
  [273, 219, 165], //12
  [298, 239, 180], //13
  [323, 259, 195], //14
  [348, 279, 210], //15
  [373, 299, 225], //16
  [398, 319, 240], //17
  [423, 339, 255], //18
  [448, 359, 270], //19
  [473, 379, 285], //20
  [505, 405, 305], //21
  [544, 436, 329], //22
  [581, 466, 351], //23
  [633, 508, 383], //24
];

let strikeAttackBonus = [
  [10, 8, 6, 4], //lv-1
  [10, 8, 6, 4], //lv0
  [11, 9, 7, 5], //lv1
  [13, 11, 9, 7], //lv2
  [14, 12, 10, 8], //lv3
  [16, 14, 12, 9], //lv4
  [17, 15, 13, 11], //lv5
  [19, 17, 15, 12], //lv6
  [20, 18, 16, 13], //lv7
  [22, 20, 18, 15], //lv8
  [23, 21, 19, 16], //lv9
  [25, 23, 21, 17], //10
  [27, 24, 22, 19], //11
  [28, 26, 24, 20], //12
  [29, 27, 25, 21], //13
  [31, 29, 27, 23], //14
  [32, 30, 28, 24], //15
  [34, 32, 30, 25], //16
  [35, 33, 31, 27], //17
  [37, 35, 33, 28], //18
  [38, 36, 34, 29], //19
  [40, 38, 36, 31], //20
  [41, 39, 37, 32], //21
  [43, 41, 39, 33], //22
  [44, 42, 40, 35], //23
  [46, 44, 42, 36], //24
];

let strikeDamage = [
  ['1d6+1', '1d4+1', '1d4', '1d4'], //lv-1
  ['1d6+3', '1d6+2', '1d4+2', '1d4+1'], //lv0
  ['1d8+4', '1d6+3', '1d6+2', '1d4+2'], //lv1
  ['1d12+4', '1d10+4', '1d8+4', '1d6+3'], //lv2
  ['1d12+8', '1d10+6', '1d8+6', '1d6+5'], //lv3
  ['2d10+7', '2d8+5', '2d6+5', '2d4+4'], //lv4
  ['2d12+7', '2d8+7', '2d6+6', '2d4+6'], //lv5
  ['2d12+10', '2d8+9', '2d6+8', '2d4+7'], //lv6
  ['2d12+12', '2d10+9', '2d8+8', '2d6+6'], //lv7
  ['2d12+15', '2d10+11', '2d8+9', '2d6+8'], //lv8
  ['2d12+17', '2d10+13', '2d8+11', '2d6+9'], //lv9
  ['2d12+20', '2d12+13', '2d10+11', '2d6+10'], //10
  ['2d12+22', '2d12+15', '2d10+12', '2d8+10'], //11
  ['3d12+19', '3d10+14', '3d8+12', '3d6+10'], //12
  ['3d12+21', '3d10+16', '3d8+14', '3d6+11'], //13
  ['3d12+24', '3d10+18', '3d8+15', '3d6+13'], //14
  ['3d12+26', '3d12+17', '3d10+14', '3d6+14'], //15
  ['3d12+29', '3d12+18', '3d10+15', '3d6+15'], //16
  ['3d12+31', '3d12+19', '3d10+16', '3d6+16'], //17
  ['3d12+34', '3d12+20', '3d10+17', '3d6+17'], //18
  ['4d12+29', '4d10+20', '4d8+17', '4d6+14'], //19
  ['4d12+32', '4d10+22', '4d8+19', '4d6+15'], //20
  ['4d12+34', '4d10+24', '4d8+20', '4d6+17'], //21
  ['4d12+37', '4d10+26', '4d8+22', '4d6+18'], //22
  ['4d12+39', '4d12+24', '4d10+20', '4d6+19'], //23
  ['4d12+42', '4d12+26', '4d10+22', '4d6+21'], //24
];

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("buildForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var tabEls, elTags, i, valid = true;
  tabEls = document.getElementsByClassName("tab");
  elTags = tabEls[currentTab].getElementsByTagName("select");

  //A loop that checks every input field in the current tab:
  for (i = 0; i < elTags.length; i++) {
    // If a field is empty...
    if (elTags[i].value == "") {
      // add an "invalid" class to the field:
      elTags[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }

  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, stepEls = document.getElementsByClassName("step");
  for (i = 0; i < stepEls.length; i++) {
    stepEls[i].className = stepEls[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  stepEls[n].className += " active";

  //remove finish from step if you go back
  if (stepEls[n].className == "step finish active") {
    stepEls[n].className = stepEls[n].className.replace(" finish", "");
  }
}

function simpleTextUpdate(textIn, textOut, attr) {
  creature[attr] = textIn.value;
  //textOut.value = creature[attr];
}

function crUpdate() {
  var crElement = document.getElementById('crIn');
  var crName = crElement.options[crElement.selectedIndex].getAttribute('name');
  creature.cr = "CREATURE " + crName;
  document.getElementById("crOut").value = creature.cr;
  creature.crIndex = document.getElementById('crIn').value;
}


function blUpdate(newBl) {
  var element = document.getElementById(newBl);
  var name = element.options[element.selectedIndex].getAttribute('name');
  creature.baseline = name;
}


function themeUpdate(newTheme) {
  var element = document.getElementById(newTheme);
  var name = element.options[element.selectedIndex].getAttribute('name');
  creature.theme = name;
}

function perUpdate() {
  var mod = document.getElementById('perIn').value;
  creature.per = perceptionScales[creature.crIndex][mod];
  document.getElementById('perOut').value = creature.per;
}


function abilityModUpdate(modIn, modOut, stat) {
  var mod = modIn.value;
  creature[stat] = abilityModifierScales[creature.crIndex][mod];
  modOut.value = creature[stat];
}


function traitsUpdate(newTrait, newTraitId, parent) {
  /*get the element the user inputed information into */
  var element = document.getElementById(newTrait);
  var name = element.options[element.selectedIndex].getAttribute('name');
  var nameLen = name.length;
  creature[newTraitId] = name;

  /* type set is not monospace so trim some white space from ends of long strings */
  if (nameLen >= 10) {
    for (i = nameLen; i >= 10; i = i - 10) {
      nameLen = nameLen - 2;
      /*console.log("loop:" + nameLen);*/
    }
    /*so that out will look something like '12em' ect*/
  } else if (nameLen <= 2) {
    nameLen = nameLen + 1;
  }
  nameLen = nameLen + 'em';

  /*actually make the new element to be added and set its Attributes*/
  var input = document.createElement("INPUT");
  input.setAttribute('type', 'text');
  input.setAttribute('value', name);
  input.setAttribute('id', newTraitId);
  input.style.width = nameLen;

  /*where the new element will go*/
  inputElement = document.getElementById(parent);
  /*inputElement.appendChild(input);*/
  inputElement.appendChild(input);

  /*test if element allready exists to handle later user edits*/
  var elInputExists = document.getElementById(newTraitId);
  if (typeof(elInputExists) != 'undefined' && elInputExists != null) {
    inputElement.replaceChild(input, elInputExists);
  } else if (typeof(elInputExists) == 'undefined' && elInputExists == null) {
    inputElement.appendChild(input);
  } else {
    console.log("error in traitUpdate()");
  }
}

function genTraitUpdate(newTrait, parent) {
  var element = document.getElementById(newTrait);
  var text = element.value;
  var textLen = "";
  var numTraits = "";

  creature.genTraits = text.split(",");
  numTraits = creature.genTraits.length;

  console.log(numTraits);

  /* type set is not monospace so trim some white space from ends of long strings */
  /*
  if (textLen >= 10) {
    for (i = textLen; i >= 10; i = i - 10) {
      textLen = textLen - 2;
    }
    /*so that out will look something like '12em' ect*/
  /*
    } else if (textLen <= 2) {
      textLen = textLen + 1;
    }

    textLen = textLen + 'em';
    */
  /*
    var input = document.createElement("INPUT");
    input.setAttribute('type', 'text');
    input.setAttribute('value', text);
    input.setAttribute('class', 'redTrait');
    input.style.width = textLen;
    /*where the new element will go*/
  /*
   inputElement = document.getElementById(parent);
   inputElement.appendChild(input);

   element.value = "";
   */
}

function redTraitRemove() {
  var element = document.getElementById('redT');
  element.removeChild(element.lastChild);
}

function skillUpdate(skillEl, skillName) {
  var skillSelect = document.getElementById(skillEl).value;
  var skillVal = skillsScales[creature.crIndex][skillSelect];
  var skillStr;

  if (skillName == 'acro') {
    creature.acro = 'Acrobatics +' + skillVal + ', ';
  } else if (skillName == 'arca') {
    creature.arca = 'Arcana +' + skillVal + ', ';
  } else if (skillName == 'athl') {
    creature.athl = 'Athletics +' + skillVal + ', ';
  } else if (skillName == 'craf') {
    creature.craf = 'Crafting +' + skillVal + ', ';
  } else if (skillName == 'dece') {
    creature.dece = 'Deception +' + skillVal + ', ';
  } else if (skillName == 'dipl') {
    creature.dipl = 'Diplomacy +' + skillVal + ', ';
  } else if (skillName == 'inti') {
    creature.inti = 'Intimidation +' + skillVal + ', ';
  } else if (skillName == 'medi') {
    creature.medi = 'Medicine +' + skillVal + ', ';
  } else if (skillName == 'natu') {
    creature.natu = 'Nature +' + skillVal + ', ';
  } else if (skillName == 'occu') {
    creature.occu = 'Occultism +' + skillVal + ', ';
  } else if (skillName == 'perf') {
    creature.perf = 'Performance +' + skillVal + ', ';
  } else if (skillName == 'reli') {
    creature.reli = 'Religion +' + skillVal + ', ';
  } else if (skillName == 'soci') {
    creature.soci = 'Society +' + skillVal + ', ';
  } else if (skillName == 'stea') {
    creature.stea = 'Stealth +' + skillVal + ', ';
  } else if (skillName == 'surv') {
    creature.surv = 'Survival +' + skillVal + ', ';
  } else if (skillName == 'thie') {
    creature.thie = 'Thievery +' + skillVal + ', ';
  } else {
    console.log('skill statment error');
  }

  skillStr = creature.acro + creature.arca + creature.athl + creature.craf + creature.dece + creature.dipl + creature.inti + creature.medi + creature.natu + creature.occu + creature.perf + creature.reli + creature.soci + creature.stea + creature.surv + creature.thie;

  document.getElementById('skillOut').value = skillStr;
}

function loreUpdate(loreNameIn, loreSelectIn) {
  var index = loreNameIn[loreNameIn.length - 1]; //the element ID number
  var loreElement = document.getElementById(loreNameIn);
  var loreElementVal = loreElement.value; //get user input
  if (loreElementVal != "") {
    index++; //new elemnt will be one greater than old element
    var newLoreId = 'loreId' + index;
    var newLoreElement = document.getElementById(newLoreId); // the new element to be created if not already exist
    if (!newLoreElement) { //if donst exist
      //row
      newLoreElement = document.createElement("div");
      newLoreElement.setAttribute('class', 'row loreEntry' + index);
      newLoreElement.setAttribute('id', 'loreRowId' + index);
      inputElement = document.getElementById('loreContainer');
      inputElement.appendChild(newLoreElement);
      //col
      newLoreElement = document.createElement("div");
      newLoreElement.setAttribute('class', 'col-12');
      newLoreElement.setAttribute('id', 'loreColId' + index);
      inputElement = document.getElementById('loreRowId' + index);
      inputElement.appendChild(newLoreElement);
      //label
      newLoreElement = document.createElement("label");
      newLoreElement.setAttribute('type', 'text');
      newLoreElement.setAttribute('id', 'loreLabelId' + index);
      inputElement = document.getElementById('loreColId' + index);
      inputElement.appendChild(newLoreElement);
      document.getElementById('loreLabelId' + index).innerHTML = "Lore Skill:";
      inputElement.appendChild(document.createTextNode (" "));
      //span
      newLoreElement = document.createElement("SPAN");
      newLoreElement.setAttribute('id', 'loreSpanId' + index);
      newLoreElement.setAttribute('class', 'loreSpan' + index);
      //newLoreElement.style.whiteSpace = "nowrap";
      inputElement = document.getElementById('loreColId' + index);
      inputElement.appendChild(newLoreElement);
      //input box
      newLoreElement = document.createElement("INPUT");
      newLoreElement.setAttribute('placeholder', 'New Lore Skill');
      newLoreElement.setAttribute('id', newLoreId);
      newLoreElement.setAttribute('onchange', 'loreUpdate(' + '"' + newLoreId + '"' + ') ');
      newLoreElement.style.width = '40%';
      inputElement = document.getElementById('loreSpanId' + index);
      inputElement.appendChild(newLoreElement);
      inputElement.appendChild(document.createTextNode (" "));
      //select box
      newLoreElement = document.createElement("SELECT");
      //Create array of options to be added
      var skillArrayName = ["Select","Extream", "High", "Moderate", "low"];
      var skillArrayValue = ["","0", "1", "2", "3"];
      //Create and append select list
      newLoreElement = document.createElement("select");
      newLoreElement.setAttribute('id', 'loreSelect' + index);
      newLoreElement.setAttribute('class', 'custom-select select-height-adjust');
      inputElement = document.getElementById('loreSpanId' + index);
      inputElement.appendChild(newLoreElement);

      //Create and append the options
      inputElement = document.getElementById('loreSelect' + index);

      for (var i = 0; i < skillArrayName.length; i++) {
        var option = document.createElement("option");
        option.value = skillArrayValue[i];
        option.text = skillArrayName[i];
        inputElement.appendChild(option);
      }
      //create delete button
      newLoreElement = document.createElement("button");
      //newLoreElement.setAttribute('class', 'glyphicon glyphicon-remove  loreDelBtn' + index);
      newLoreElement.innerHTML = 'remove';
      newLoreElement.setAttribute('id', 'loreDelId' + index);
      newLoreElement.setAttribute('onclick', 'loreDeleteRow('+index+')');
      newLoreElement.setAttribute('type', 'button');
      inputElement = document.getElementById('loreSpanId' + index);
      inputElement.appendChild(newLoreElement);

    }
  }
  loreEntryUpdate();
}

function loreEntryUpdate() {
  var maxIndex = 0, index = 0, text = "", value="", modifier="";
  while (document.getElementById('loreRowId' + maxIndex)){
    maxIndex++;
    console.log(maxIndex);
  }
  maxIndex--;//while will one time to meny
  console.log(maxIndex);

  for (index = 0; index < (maxIndex-1); index++) {
    console.log(index);
    text = document.getElementById('loreLabelId' + index).value;
    value = document.getElementById('loreSelect' + index).value;
    modifier = abilityModifierScales[creature.crIndex][value];


    creature.lore = creature.lore + text + ' ' + '+' + modifier + ' ';
    console.log(creature.lore);
  }


}

function loreDeleteRow(index){
  //console.log(index);
  var removeEl = document.getElementById('loreRowId' + index);
  //console.log('loreRowId' + index);
  var parent = document.getElementById('loreContainer');
  //console.log(parent);
  removeEl.remove();
  console.log('removed index: '+index);
  //fix ID number
  index = index+1;//as index should now be removed
  console.log('index: '+index);
  //get maximum id number
  var maxIndex = index;
  while (document.getElementById('loreRowId' + maxIndex)){
    maxIndex++;
  }
  maxIndex = maxIndex - 1;//while loop runs one time to meny
 //update IDs of all elements and function calls
 for (index; index < (maxIndex-1); index++) {
   console.log('top loop index: '+index);
   //row
   adjustElement = document.getElementById('loreRowId' + index);
   adjustElement.setAttribute('id', 'loreRowId' + (index - 1));
   //col
   adjustElement = document.getElementById('loreColId' + index);
   adjustElement.setAttribute('id', 'loreColId' + (index - 1));
   //label
   adjustElement = document.getElementById('loreLabelId' + index);
   adjustElement.setAttribute('id', 'loreLabelId' + (index - 1));
   //span
   adjustElement = document.getElementById('loreSpanId' + index);
   adjustElement.setAttribute('id', 'loreSpanId' + (index - 1));
   //input
   adjustElement = document.getElementById('loreId' + index);
   adjustElement.setAttribute('id', 'loreId' + (index - 1));
   adjustElement.setAttribute('onchange', 'loreUpdate(' + '"' + 'loreId' + index - 1 + '"' + ') ');
   //select
   adjustElement = document.getElementById('loreSelect' + index);
   adjustElement.setAttribute('id', 'loreSelect' + (index - 1));
   //remove
   adjustElement = document.getElementById('loreDelId' + index);
   adjustElement.setAttribute('id', 'loreDelId' + index - 1);
   adjustElement.setAttribute('onclick', 'loreDeleteRow('+(index-1)+')');
 }
}

function acUpdate() {
  var mod = document.getElementById('acId').value;
  creature.ac = acScales[creature.crIndex][mod];
  document.getElementById('acOutId').value = creature.ac;
}

function saveUpdate(saveIn, saveOut, saveName) {
  var mod = saveIn.value;
  creature[saveName] = savingThrowScales[creature.crIndex][mod];
  saveOut.value = creature[saveName];
}

function hpUpdate() {
  var mod = document.getElementById('hpId').value;
  creature.hp = hpScales[creature.crIndex][mod];
  document.getElementById('hpOutId').value = creature.hp;
}

function debug() {
  console.log('name: ' + creature.name);
  console.log('baseline: ' + creature.baseline);
  console.log('theme: ' + creature.theme);
  console.log('languages: ' + creature.languages);
  console.log('senses: ' + creature.senses);
  console.log('rarity: ' + creature.rarity);
  console.log('align: ' + creature.align);
  console.log('size: ' + creature.size);
  console.log('traits: ' + creature.genTraits);
  console.log('speed: ' + creature.speed);
  console.log('cr: ' + creature.cr);
  console.log('crIndex: ' + creature.crIndex);
  console.log('per: ' + creature.per);
  console.log('str: ' + creature.str);
  console.log('dex: ' + creature.dex);
  console.log('con: ' + creature.con);
  console.log('int: ' + creature.int);
  console.log('wis: ' + creature.wis);
  console.log('cha: ' + creature.cha);
  console.log('acro: ' + creature.acro);
  console.log('arca: ' + creature.arca);
  console.log('athl: ' + creature.athl);
  console.log('craf: ' + creature.craf);
  console.log('dece: ' + creature.dece);
  console.log('dipl: ' + creature.dipl);
  console.log('inti: ' + creature.inti);
  console.log('medi: ' + creature.medi);
  console.log('natu: ' + creature.natu);
  console.log('occu: ' + creature.occu);
  console.log('perf: ' + creature.perf);
  console.log('reli: ' + creature.reli);
  console.log('soci: ' + creature.soci);
  console.log('stea: ' + creature.stea);
  console.log('surv: ' + creature.surv);
  console.log('thie: ' + creature.thie);
  console.log('lore: ' + creature.lore);
}
