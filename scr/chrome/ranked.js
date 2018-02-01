/*

  Copyright (C) Aaron Beetstra 2018

*/

var players = [
  "p1",
  "p2",
  "p3",
  "p4",
  "p5",
  "p6",
  "p7",
  "p8",
  "p9",
  "p10",
  "p11",
  "p12",
  "p13",
  "p14",
  "p15"
];

var names = [
  "name1",
  "name2",
  "name3",
  "name4",
  "name5",
  "name6",
  "name7",
  "name8",
  "name9",
  "name10",
  "name11",
  "name12",
  "name13",
  "name14",
  "name15"
];

var roles = [
  "town-invest",
  "town-invest2",
  "town-protective",
  "town-killing",
  "town-support",
  "town-random",
  "town-random2",
  "town-random3",
  "maf-random",
  "maf-random2",
  "neutral-evil",
  "neutral-killing"
];

var unique = [
  "mayor",
  "retri",
  "vet"
]

function saveData(key, value) {
  var temp = {};
  temp[key] = value;
  chrome.storage.sync.set(temp, function() {
    console.log('Settings saved');
  });
}

function setElementValue(id, value) {
  document.getElementById("name1").value = value.data;
}

function getSavedDate(key, callback) {
  chrome.storage.sync.get(key, callback);
}

function setNameInputActions() {
  document.getElementById('name1').addEventListener('change', () => {
    saveData("p1", document.getElementById("name1").value);
  });
  document.getElementById('name2').addEventListener('change', () => {
    saveData("p2", document.getElementById("name2").value);
  });
  document.getElementById('name3').addEventListener('change', () => {
    saveData("p3", document.getElementById("name3").value);
  });
  document.getElementById('name4').addEventListener('change', () => {
    saveData("p4", document.getElementById("name4").value);
  });
  document.getElementById('name5').addEventListener('change', () => {
    saveData("p5", document.getElementById("name5").value);
  });
  document.getElementById('name6').addEventListener('change', () => {
    saveData("p6", document.getElementById("name6").value);
  });
  document.getElementById('name7').addEventListener('change', () => {
    saveData("p7", document.getElementById("name7").value);
  });
  document.getElementById('name8').addEventListener('change', () => {
    saveData("p8", document.getElementById("name8").value);
  });
  document.getElementById('name9').addEventListener('change', () => {
    saveData("p9", document.getElementById("name9").value);
  });
  document.getElementById('name10').addEventListener('change', () => {
    saveData("p10", document.getElementById("name10").value);
  });
  document.getElementById('name11').addEventListener('change', () => {
    saveData("p11", document.getElementById("name11").value);
  });
  document.getElementById('name12').addEventListener('change', () => {
    saveData("p12", document.getElementById("name12").value);
  });
  document.getElementById('name13').addEventListener('change', () => {
    saveData("p13", document.getElementById("name13").value);
  });
  document.getElementById('name14').addEventListener('change', () => {
    saveData("p14", document.getElementById("name14").value);
  });
  document.getElementById('name15').addEventListener('change', () => {
    saveData("p15", document.getElementById("name15").value);
  });
}

function setRoleInputActions() {
  document.getElementById('town-invest').addEventListener('change', () => {
    saveData("town-invest", document.getElementById('town-invest').value);
  });
  document.getElementById('town-invest2').addEventListener('change', () => {
    saveData("town-invest2", document.getElementById('town-invest2').value);
  });
  document.getElementById('town-protective').addEventListener('change', () => {
    saveData("town-protective", document.getElementById('town-protective').value);
  });
  document.getElementById('town-killing').addEventListener('change', () => {
    saveData("town-killing", document.getElementById('town-killing').value);
  });
  document.getElementById('town-support').addEventListener('change', () => {
    saveData("town-support", document.getElementById('town-support').value);
  });
  document.getElementById('town-random').addEventListener('change', () => {
    saveData("town-random", document.getElementById('town-random').value);
  });
  document.getElementById('town-random2').addEventListener('change', () => {
    saveData("town-random2", document.getElementById('town-random2').value);
  });
  document.getElementById('town-random3').addEventListener('change', () => {
    saveData("town-random3", document.getElementById('town-random3').value);
  });
  document.getElementById('maf-random').addEventListener('change', () => {
    saveData("maf-random", document.getElementById('maf-random').value);
  });
  document.getElementById('maf-random2').addEventListener('change', () => {
    saveData("maf-random2", document.getElementById('maf-random2').value);
  });
  document.getElementById('neutral-evil').addEventListener('change', () => {
    saveData("neutral-evil", document.getElementById('neutral-evil').value);
  });
  document.getElementById('neutral-killing').addEventListener('change', () => {
    saveData("neutral-killing", document.getElementById('neutral-killing').value);
  });
}

function colorSchemeSetup() {
  if(document.getElementById('mk2').checked) {
    console.log('Hello world! non default!');
  }
  else {
    setDefaultColors();
  }
}

function playerNamesSetup() {
  getSavedDate(players, function(object) {
    for (var i = 0; i < 15; i++) {
      if (object[players[i]] != undefined) {
        document.getElementById(names[i]).value = object[players[i]];
      }
    }
  });
}

function playerRolesSetup() {
  getSavedDate(roles, function(object) {
    for (var i = 0; i < 12; i++) {
      if (object[roles[i]] != undefined) {
        document.getElementById(roles[i]).value = object[roles[i]];
      }
    }
    /* execute unique thingy here */
    removeUniqueRoles();
  });
}

/* This function removes unique roles as option when they are already picked in another slot */
function removeUniqueRoles() {
  console.log(document.getElementById('neutral-killing').value);

  if (document.getElementById('town-killing').value == "vet") {
    var selectobject=document.getElementById("town-random")
    for (var i=0; i<selectobject.length; i++){
      if (selectobject.options[i].value == 'vet' )
         selectobject.remove(i);
    }
    selectobject=document.getElementById("town-random2")
    for (var i=0; i<selectobject.length; i++){
      if (selectobject.options[i].value == 'vet' )
         selectobject.remove(i);
    }
    selectobject=document.getElementById("town-random3")
    for (var i=0; i<selectobject.length; i++){
      if (selectobject.options[i].value == 'vet' )
         selectobject.remove(i);
    }
  }
}

function reset() {
  for (var i = 0; i < 15; i++) {
    document.getElementById(names[i]).value = "";
  }
  for (var i = 0; i < 1125; i++) {
    document.getElementById(roles[i]).value = "unkown";
  }
}

function setDefaultColors() {
  document.getElementById("tdr-1").style.color = "#00FF00";
  document.getElementById("tdr-2").style.color = "#00FF00";
  document.getElementById("tdr-3").style.color = "#00FF00";
  document.getElementById("tdr-4").style.color = "#00FF00";
  document.getElementById("tdr-5").style.color = "#00FF00";
  document.getElementById("tdr-6").style.color = "#00FF00";
  document.getElementById("tdr-7").style.color = "#00FF00";
  document.getElementById("tdr-8").style.color = "#00FF00";
  document.getElementById("tdr-9").style.color = "#00FF00";
  document.getElementById("tdr-10").style.color = "#FF0000";
  document.getElementById("tdr-11").style.color = "#FF0000";
  document.getElementById("tdr-12").style.color = "#FF0000";
  document.getElementById("tdr-13").style.color = "#FF0000";
  document.getElementById("tdr-14").style.color = "#ACACBD";
  document.getElementById("tdr-15").style.color = "#ACACBD";
}

document.addEventListener('DOMContentLoaded', () => {
  colorSchemeSetup();

  playerNamesSetup();
  playerRolesSetup();

  setNameInputActions();
  setRoleInputActions();

  /* Reset the data stored when the Reset button is clicked */
  document.getElementById('resetbutton').addEventListener('click', () => {
    chrome.storage.sync.clear(function() {
      reset();
    });
  });
});
