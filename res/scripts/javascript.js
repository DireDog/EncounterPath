var currentTab = 0; // Current tab is set to be the first tab (0)
var creatureCR;
var creatureSTR;
showTab(currentTab); // Display the current tab

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
  var name = document.getElementById("creatureNameIn").value;
  document.getElementById("creatureNameOut").value = name;
}

function creatureCRupdate() {
  creatureCR = document.getElementById("creatureCRin").value;
  document.getElementById("creatureCRout").value = creatureCR;
}

function creModSTRupdate() {
  var mod = document.getElementById('creModSTRin').value;
  creatureSTR = abilityModifierScales[creatureCR][mod];
  document.getElementById('creatureMODout').value = creatureSTR;
}
