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

var player_save_keys = [
  "playername",
  "playerrole",
  "colorscheme"
];

var unique = [
  "mayor",
  "retri",
  "vet"
]

var all = roles.concat(players, player_save_keys)

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
  document.getElementById('playername').addEventListener('change', () => {
    saveData("playername", document.getElementById("playername").value);
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
    removeUniqueRoles();
  });
  document.getElementById('town-support').addEventListener('change', () => {
    saveData("town-support", document.getElementById('town-support').value);
    removeUniqueRoles();
  });
  document.getElementById('town-random').addEventListener('change', () => {
    saveData("town-random", document.getElementById('town-random').value);
    removeUniqueRoles();
  });
  document.getElementById('town-random2').addEventListener('change', () => {
    saveData("town-random2", document.getElementById('town-random2').value);
    removeUniqueRoles();
  });
  document.getElementById('town-random3').addEventListener('change', () => {
    saveData("town-random3", document.getElementById('town-random3').value);
    removeUniqueRoles();
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
  document.getElementById('playerrole').addEventListener('change', () => {
    saveData("playerrole", document.getElementById('playerrole').value, () => {
      colorSchemeSetup();
    });
  });
}

function colorSchemeSetup() {
  getSavedDate(['colorscheme'], function(object) {
    if (object['colorscheme'] == undefined)
      saveData('colorscheme', 'default', function() {
        rankedDefaultColors();
        document.getElementById("mk1").checked = true;
      });
    else if (object['colorscheme'] == 'default') {
      rankedDefaultColors();
      document.getElementById("mk1").checked = true;
    }
    else if (object['colorscheme'] == 'allies') {
      if(document.getElementById('playerrole').value != 'unkown') {
        rankedAlliedColors(document.getElementById('playerrole').value);
        document.getElementById("mk2").checked = true;
      }
      else {
        saveData('colorscheme', 'default', function() {
          alert("Please select your own role first!");
          document.getElementById("mk1").checked = true;
        });
      }
    }
  });
}

function playerNamesSetup() {
  getSavedDate(players, function(object) {
    for (var i = 0; i < 15; i++) {
      if (object[players[i]] != undefined) {
        document.getElementById(names[i]).value = object[players[i]];
      }
    }
    getSavedDate(['playername'], function(object) {
      if (object['playername'] != undefined) {
        document.getElementById('playername').value = object['playername'];
      }
    });
  });
}

function playerRolesSetup() {
  getSavedDate(roles, function(object) {
    for (var i = 0; i < 12; i++) {
      if (object[roles[i]] != undefined) {
        document.getElementById(roles[i]).value = object[roles[i]];
      }
    }
    getSavedDate(['playerrole'], function(object) {
      if (object['playerrole'] != undefined) {
        document.getElementById('playerrole').value = object['playerrole'];
      }
    });
    /* execute unique thingy here */
    removeUniqueRoles();
    colorSchemeSetup();
  });
}

/* This function removes unique roles as option when they are already picked in another slot */
function removeUniqueRoles() {
  uniqueCheck(['town-killing', 'town-random', 'town-random2', 'town-random3'], "vet", "Veteran");
  uniqueCheck(['town-support', 'town-random', 'town-random2', 'town-random3'], "mayor", "Mayor");
  uniqueCheck(['town-support', 'town-random', 'town-random2', 'town-random3'], "retri", "Retributionist");
}

function reset() {
  for (var i = 0; i < 15; i++) {
    document.getElementById(names[i]).value = "";
  }
  for (var i = 0; i < roles.length; i++) {
    document.getElementById(roles[i]).value = "unkown";
  }
  document.getElementById('playername').value = "";
  document.getElementById('playerrole').value = "unkown";
  document.getElementById("mk1").checked = true;
  rankedDefaultColors();
  removeUniqueRoles();
}

document.addEventListener('DOMContentLoaded', () => {
  playerNamesSetup();
  playerRolesSetup();

  setNameInputActions();
  setRoleInputActions();

  document.getElementById('mk1').addEventListener('change', () => {
    saveData('colorscheme', 'default', function() {
      colorSchemeSetup();
    });
  });
  document.getElementById('mk2').addEventListener('change', () => {
    saveData('colorscheme', 'allies', function() {
      colorSchemeSetup();
    });
  });


  /* Reset the data stored when the Reset button is clicked */
  document.getElementById('resetbutton').addEventListener('click', () => {
    chrome.storage.local.remove(all, function() {
      reset();
    });
  });

  document.getElementById('return_mm').addEventListener('click', () => {
    setCurrentPage("last_page", "main.html", function() {
      document.location.href = "../html/main.html";
    });
  });
});
