/*

  Copyright (C) Aaron Beetstra 2018

*/

function UniqueRolesCheck() {
  console.log("Checking....")
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

  //HEX MASTER
  if (document.getElementById('coven-random').value == "hm" ||
      document.getElementById('coven-random2').value == "hm")
      {
        /* handle HEX MASTER unique */
        var possibilities = ['coven-random', 'coven-random2'];
        var value = "hm";
        removeUniqueRoleOption(possibilities, value);
      }
  else {
    /* Here we need to ensure that HEX MASTER is still an option */
    var possibilities = ['coven-random', 'coven-random2'];
    var value = "hm";
    var text = "Hex Master";
    addUniqueRoleOption(possibilities, value, text);
  }

  //NECROMANCER
  if (document.getElementById('coven-random').value == "necro" ||
      document.getElementById('coven-random2').value == "necro")
      {
        /* handle NECROMANCER unique */
        var possibilities = ['coven-random', 'coven-random2'];
        var value = "necro";
        removeUniqueRoleOption(possibilities, value);
      }
  else {
    /* Here we need to ensure that NECROMANCER is still an option */
    var possibilities = ['coven-random', 'coven-random2'];
    var value = "necro";
    var text = "Necromancer";
    addUniqueRoleOption(possibilities, value, text);
  }

  //POISONER
  if (document.getElementById('coven-random').value == "pois" ||
      document.getElementById('coven-random2').value == "pois")
      {
        /* handle POISONER unique */
        var possibilities = ['coven-random', 'coven-random2'];
        var value = "pois";
        removeUniqueRoleOption(possibilities, value);
      }
  else {
    /* Here we need to ensure that POISONER is still an option */
    var possibilities = ['coven-random', 'coven-random2'];
    var value = "pois";
    var text = "Poisoner";
    addUniqueRoleOption(possibilities, value, text);
  }

  //POTION MASTER
  if (document.getElementById('coven-random').value == "pmer" ||
      document.getElementById('coven-random2').value == "pmer")
      {
        /* handle POISONER unique */
        var possibilities = ['coven-random', 'coven-random2'];
        var value = "pmer";
        removeUniqueRoleOption(possibilities, value);
      }
  else {
    /* Here we need to ensure that POISONER is still an option */
    var possibilities = ['coven-random', 'coven-random2'];
    var value = "pmer";
    var text = "Potion Master";
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
