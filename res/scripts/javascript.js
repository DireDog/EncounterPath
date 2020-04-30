var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

var creature = {
  name: "",
  cr: "",
  crIndex:"",
  size: "",
  baseline: "",
  theme: "",
  per: "",
  str: "",
  dex: "",
  con: "",
  int: "",
  wis: "",
  cha: ""
};

let abilityModifierScales = [
  [3,3,2,0], //lv-1
  [3,3,2,0], //lv0
  [5,4,3,1], //lv1
  [5,4,3,1], //lv2
  [5,4,3,1], //lv3
  [6,5,3,2], //lv4
  [6,5,3,2], //lv5
  [7,5,4,2], //lv6
  [7,6,4,2], //lv7
  [7,6,4,3], //lv8
  [7,6,4,3], //lv9
  [8,7,5,3], //10
  [8,7,5,3], //11
  [8,7,5,3], //12
  [9,8,5,4], //13
  [9,8,5,4], //14
  [9,8,5,4], //15
  [10,9,6,5], //16
  [10,9,6,5], //17
  [10,9,6,5], //18
  [11,10,6,5], //19
  [11,10,7,6], //20
  [11,10,7,6], //21
  [11,10,8,6], //22
  [11,10,8,6], //23
  [13,12,9,7], //24
];

let perceptionScales = [
  [9,8,5,2,0], //lv-1
  [10,9,6,3,1], //lv0
  [11,10,7,4,2], //lv1
  [12,11,8,5,3], //lv2
  [14,12,9,6,4], //lv3
  [15,14,11,8,6], //lv4
  [17,15,12,9,7], //lv5
  [18,17,14,11,8], //lv6
  [20,18,15,12,10], //lv7
  [21,19,16,13,11], //lv8
  [23,21,18,15,12], //lv9
  [24,22,19,16,14], //10
  [26,24,21,18,15], //11
  [27,25,22,19,16], //12
  [29,26,23,20,18], //13
  [30,28,25,22,19], //14
  [32,29,26,23,20], //15
  [33,30,28,25,22], //16
  [35,32,29,26,23], //17
  [36,33,30,27,24], //18
  [38,35,32,29,26], //19
  [39,36,33,30,27], //20
  [41,38,35,32,28], //21
  [43,39,36,33,30], //22
  [44,40,37,34,31], //23
  [46,42,38,36,32], //24
];

let skillsScales = [
  [8,5,4,2], //lv-1
  [9,6,5,3], //lv0
  [10,7,6,4], //lv1
  [11,8,7,5], //lv2
  [13,10,9,7], //lv3
  [15,12,10,8], //lv4
  [16,13,12,10], //lv5
  [18,15,13,12], //lv6
  [20,17,15,13], //lv7
  [21,18,16,14], //lv8
  [23,20,18,16], //lv9
  [25,22,19,17], //10
  [26,23,21,19], //11
  [28,25,22,20], //12
  [30,27,24,22], //13
  [31,28,25,23], //14
  [33,30,27,25], //15
  [35,32,28,26], //16
  [36,33,30,28], //17
  [38,35,31,29], //18
  [40,37,33,31], //19
  [41,38,34,32], //20
  [43,40,36,34], //21
  [45,42,37,35], //22
  [46,43,38,36], //23
  [48,45,40,38], //24
];

let acScales = [
  [18,15,14,12], //lv-1
  [19,16,15,13], //lv0
  [19,16,15,13], //lv1
  [21,18,17,15], //lv2
  [22,19,18,16], //lv3
  [24,21,20,18], //lv4
  [25,22,21,19], //lv5
  [27,24,23,21], //lv6
  [28,25,24,22], //lv7
  [30,27,26,24], //lv8
  [31,28,27,25], //lv9
  [33,30,29,27], //10
  [34,31,30,28], //11
  [36,33,32,30], //12
  [37,34,33,31], //13
  [39,36,35,33], //14
  [40,37,36,34], //15
  [42,39,38,36], //16
  [43,40,39,37], //17
  [45,42,41,39], //18
  [46,43,42,40], //19
  [48,45,44,42], //20
  [49,46,45,43], //21
  [51,48,47,45], //22
  [52,49,48,46], //23
  [54,51,50,48], //24
];

let savingThrowScales = [
  [9,8,5,2,0], //lv-1
  [10,9,6,3,1], //lv0
  [11,10,7,4,2], //lv1
  [12,11,8,5,3], //lv2
  [14,12,9,6,4], //lv3
  [15,14,11,8,6], //lv4
  [17,15,12,9,7], //lv5
  [18,17,14,11,8], //lv6
  [20,18,15,12,10], //lv7
  [21,19,16,13,11], //lv8
  [23,21,18,15,12], //lv9
  [24,22,19,16,14], //10
  [26,24,21,18,15], //11
  [27,25,22,19,16], //12
  [29,26,23,20,18], //13
  [30,28,25,22,19], //14
  [32,29,26,23,20], //15
  [33,30,28,25,22], //16
  [35,32,29,26,23], //17
  [36,33,30,27,24], //18
  [38,35,32,29,26], //19
  [39,36,33,30,27], //20
  [41,38,35,32,28], //21
  [43,39,36,33,30], //22
  [44,40,37,34,31], //23
  [46,42,38,36,32], //24
];

let hpScales = [
  [9,8,6], //lv-1
  [20,16,13], //lv0
  [26,21,16], //lv1
  [40,32,25], //lv2
  [59,48,37], //lv3
  [78,63,48], //lv4
  [97,78,59], //lv5
  [123,99,75], //lv6
  [148,119,90], //lv7
  [173,139,105], //lv8
  [198,159,120], //lv9
  [223,179,135], //10
  [248,199,150], //11
  [273,219,165], //12
  [298,239,180], //13
  [323,259,195], //14
  [348,279,210], //15
  [373,299,225], //16
  [398,319,240], //17
  [423,339,255], //18
  [448,359,270], //19
  [473,379,285], //20
  [505,405,305], //21
  [544,436,329], //22
  [581,466,351], //23
  [633,508,383], //24
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
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  //if (n == 1 && !validateForm()) return false;
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
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
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
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

//=======================================================================
function creatureNameUpdate(){
  creature.name = document.getElementById("creatureNameIn").value;
  document.getElementById("creatureNameOut").value = creature.name;
}

function creatureCRupdate() {
  var crElement = document.getElementById('creatureCRin');
  var crName = crElement.options[crElement.selectedIndex].getAttribute('name');
  creature.cr = "CREATURE " + crName;
  document.getElementById("creatureCRout").value = creature.cr;
  creature.crIndex = document.getElementById('creatureCRin').value;
}

function creModPERupdate() {
  var mod = document.getElementById('creModPERin').value;
  creature.per = perceptionScales[creature.crIndex][mod];
  document.getElementById('creModPERout').value = creature.per;
}

function creModSTRupdate() {
  var mod = document.getElementById('creModSTRin').value;
  creature.str = abilityModifierScales[creature.crIndex][mod];
  document.getElementById('creModSTRout').value = creature.str;
}

function creModDEXupdate() {
  var mod = document.getElementById('creModDEXin').value;
  creature.dex = abilityModifierScales[creature.crIndex][mod];
  document.getElementById('creModDEXout').value = creature.dex;
}

function creModCONupdate() {
  var mod = document.getElementById('creModCONin').value;
  creature.con = abilityModifierScales[creature.crIndex][mod];
  document.getElementById('creModCONout').value = creature.con;
}

function creModINTupdate() {
  var mod = document.getElementById('creModINTin').value;
  creature.int = abilityModifierScales[creature.crIndex][mod];
  document.getElementById('creModINTout').value = creature.int;
}

function creModWISupdate() {
  var mod = document.getElementById('creModWISin').value;
  creature.wis = abilityModifierScales[creature.crIndex][mod];
  document.getElementById('creModWISout').value = creature.wis;
}

function creModCHAupdate() {
  var mod = document.getElementById('creModCHAin').value;
  creature.cha = abilityModifierScales[creature.crIndex][mod];
  document.getElementById('creModCHAout').value = creature.cha;
}

/* add traits to out put form */
function creatureTraitsUpdate(newTrait, newTraitId){
  /*get the element the user inputed information into */
  var element = document.getElementById(newTrait);
  var name = element.options[element.selectedIndex].getAttribute('name');
  var nameLen = name.length;
  console.log(nameLen);

  /* type set is not monospace so trim some white space from ends of long strings */
  for (i = nameLen; i >= 10; i = i - 10){
    nameLen = nameLen - 2;
    console.log("loop:"+ nameLen);
  }
  /*so that out will look something like '12em' ect*/
  nameLen = nameLen + 'em';
  console.log(nameLen);

  /*actually make the new element to be added and set its Attributes*/
  var input = document.createElement("INPUT");
  input.setAttribute('type', 'text');
  input.setAttribute('value', name);
  input.setAttribute('id', newTraitId);
  input.style.width = nameLen;
  /*where the new element will go*/
  inputElement = document.getElementById('col-traits');
  inputElement.appendChild(input);

  /*test if element allready exists to handle later user edits*/
  var elInputExists = document.getElementById(newTraitId);
  if(typeof(elInputExists) != 'undefined' && elInputExists != null){
    inputElement.replaceChild(input, elInputExists);
    creature.size = input.value;
  }else if(typeof(elInputExists) == 'undefined' && elInputExists == null){
    inputElement.appendChild(input);
    creature.size = input.value;
  }else{
    console.log("error in creatureTraitUpdate()");
  }
}
