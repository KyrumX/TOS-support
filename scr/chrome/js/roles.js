/*

  Copyright (C) Aaron Beetstra 2018

*/

/* Function that takes care of Unique roles in RANKED mode */

function UniqueRolesCheck() {
  if (document.getElementById('town-killing').value == "vet" ||
      document.getElementById('town-random').value == "vet" ||
      document.getElementById('town-random2').value == "vet" ||
      document.getElementById('town-random3').value == "vet")
      {
        /* handle VET unique */
        var possibilities = ['town-killing', 'town-random', 'town-random2', 'town-random3'];
        var value = "vet";
        removeUniqueRoleOption(possibilities, value);
      }
  else {
    /* Here we need to ensure that VET is still an option */
    var possibilities = ['town-killing', 'town-random', 'town-random2', 'town-random3'];
    var value = "vet";
    var text = "Veteran";
    addUniqueRoleOption(possibilities, value, text);
  }

  if (document.getElementById('town-support').value == "mayor" ||
      document.getElementById('town-random').value == "mayor" ||
      document.getElementById('town-random2').value == "mayor" ||
      document.getElementById('town-random3').value == "mayor")
      {
        /* handle MAYOR unique */
        var possibilities = ['town-support', 'town-random', 'town-random2', 'town-random3'];
        var value = "mayor";
        removeUniqueRoleOption(possibilities, value);
      }
  else {
    /* Here we need to ensure that MAYOR is still an option */
    var possibilities = ['town-support', 'town-random', 'town-random2', 'town-random3'];
    var value = "mayor";
    var text = "Mayor";
    addUniqueRoleOption(possibilities, value, text);
  }

  if (document.getElementById('town-support').value == "retri" ||
      document.getElementById('town-random').value == "retri" ||
      document.getElementById('town-random2').value == "retri" ||
      document.getElementById('town-random3').value == "retri")
      {
        /* handle RETRIBUTIONIST unique */
        var possibilities = ['town-support', 'town-random', 'town-random2', 'town-random3'];
        var value = "retri";
        removeUniqueRoleOption(possibilities, value);
      }
  else {
    /* Here we need to ensure that RETRIBUTIONIST is still an option */
    var possibilities = ['town-support', 'town-random', 'town-random2', 'town-random3'];
    var value = "retri";
    var text = "Retributionist";
    addUniqueRoleOption(possibilities, value, text);
  }
}

function removeUniqueRoleOption(possibilities, value) {
  /* handle removal of unique role */
  var selected = -1;

  for (var i = 0; i < possibilities.length && selected <= -1; i++) {
    if (document.getElementById(possibilities[i]).value == value) {
      selected = i;
    }
  }
  for (var i = 0; i < possibilities.length; i++) {
    if (i != selected) {
      selectobject = document.getElementById(possibilities[i])
      for (var j = 0; j < selectobject.length; j++) {
        if (selectobject.options[j].value == value) {
          selectobject.remove(j);
        }
      }
    }
  }
}

function addUniqueRoleOption(possibilities, value, text) {
  for (var i = 0; i < possibilities.length; i++) {
    selectobject = document.getElementById(possibilities[i])
    var found = false;
    for (var j = 0; j < selectobject.length && found == false; j++) {
      if (selectobject.options[j].value == value) {
        found = true;
      }
    }
    if (found == false) {
      var option = document.createElement("option");
      option.value = value;
      option.text = text;
      selectobject.add(option);
    }
  }
}
