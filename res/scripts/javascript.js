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

function creatureSizeUpdate(){
  var sizeElement = document.getElementById('creatureSizeIn');
  var sizeName = sizeElement.options[sizeElement.selectedIndex].getAttribute('name');
  var input = document.createElement("INPUT");
  input.setAttribute('type','text');
  input.setAttribute('value',sizeName);
  input.setAttribute('id','creatureSize');
  inputElement = document.getElementById('cre-trait-out');
  inputElement.appendChild(input);

  var elInputExists = document.getElementById("creatureSize");
  if(typeof(elInputExists) != 'undefined' && elInputExists != null){
    inputElement.replaceChild(input, elInputExists);
  }else if(typeof(elInputExists) == 'undefined' && elInputExists == null){
    inputElement.appendChild(input);
  }else{
    console.log("error in creatureSizeUpdate()");
  }
}
