/*

  Copyright (C) Aaron Beetstra 2018

*/

/* handle the removal of unique role */
function removeUniqueRoleOption(possibilities, value) {
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

/* handle the addition of unique role */
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

function uniqueCheck(possibilities, acronym, role) {
  var unique_found = false;

  for(var i = 0; i < possibilities.length; i++) {
    var element = document.getElementById(possibilities[i])
    if (element != undefined) {
      if (element.value == acronym) {
        unique_found = true;
        removeUniqueRoleOption(possibilities, acronym);
      }
    }
  }

  if (unique_found == false) {
    addUniqueRoleOption(possibilities, acronym, role);
  }
}
