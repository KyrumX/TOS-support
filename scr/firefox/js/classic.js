/*

  Copyright (C) Aaron Beetstra 2018

*/

var players = [
  "p1_classic",
  "p2_classic",
  "p3_classic",
  "p4_classic",
  "p5_classic",
  "p6_classic",
  "p7_classic",
  "p8_classic",
  "p9_classic",
  "p10_classic",
  "p11_classic",
  "p12_classic",
  "p13_classic",
  "p14_classic",
  "p15_classic"
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

var roles_ids = [
  "town-killing",
  "town-random"
];

var roles = [
  "town-killing_classic",
  "town-random_classic"
];

var player_save_keys = [
  "playername_classic",
  "playerrole_classic",
  "colorscheme_classic"
]

var all = roles.concat(players, player_save_keys)

function setNameInputActions() {
  nameSetUp(names, players)
  document.getElementById('playername').addEventListener('change', () => {
    saveData("playername_classic", document.getElementById("playername").value);
  });
}

function setRoleInputActions() {
  for(var i = 0; i < roles.length; i++) {
    let roleUnit = roles_ids[i]
    let role = roles[i]
    document.getElementById(roleUnit).addEventListener('change', () => {
      saveData(role, document.getElementById(roleUnit).value);
      removeUniqueRoles();
    });
  }
  document.getElementById('playerrole').addEventListener('change', () => {
    saveData("playerrole_classic", document.getElementById('playerrole').value, () => {
      colorSchemeSetup();
    });
  });
}

function colorSchemeSetup() {
  getSavedDate(['colorscheme_classic'], function(object) {
    if (object['colorscheme_classic'] == undefined)
      saveData('colorscheme_classic', 'default', function() {
        classicDefaultColors();
        document.getElementById("mk1").checked = true;
      });
    else if (object['colorscheme_classic'] == 'default') {
      classicDefaultColors();
      document.getElementById("mk1").checked = true;
    }
    else if (object['colorscheme_classic'] == 'allies') {
      if(document.getElementById('playerrole').value != 'unkown') {
        classicAlliedColors(document.getElementById('playerrole').value);
        document.getElementById("mk2").checked = true;
      }
      else {
        saveData('colorscheme_classic', 'default', function() {
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
    getSavedDate(['playername_classic'], function(object) {
      if (object['playername_classic'] != undefined) {
        document.getElementById('playername').value = object['playername_classic'];
      }
    });
  });
}

function playerRolesSetup() {
  getSavedDate(roles, function(object) {
    for (var i = 0; i < 2; i++) {
      if (object[roles[i]] != undefined) {
        document.getElementById(roles_ids[i]).value = object[roles[i]];
      }
    }
    getSavedDate(['playerrole_classic'], function(object) {
      if (object['playerrole_classic'] != undefined) {
        document.getElementById('playerrole').value = object['playerrole_classic'];
      }
    });
    /* execute unique thingy here */
    removeUniqueRoles();
    colorSchemeSetup();
  });
}

/* This function removes unique roles as option when they are already picked in another slot */
function removeUniqueRoles() {
  uniqueCheck(['town-killing', 'town-random'], "vet", "Veteran");
}

function reset() {
  for (var i = 0; i < 15; i++) {
    document.getElementById(names[i]).value = "";
  }
  for (var i = 0; i < roles_ids.length; i++) {
    document.getElementById(roles_ids[i]).value = "unkown";
  }
  document.getElementById('playername').value = "";
  document.getElementById('playerrole').value = "unkown";
  document.getElementById("mk1").checked = true;
  classicDefaultColors();
  removeUniqueRoles();
}

document.addEventListener('DOMContentLoaded', () => {
  playerNamesSetup();
  playerRolesSetup();

  setNameInputActions();
  setRoleInputActions();

  document.getElementById('mk1').addEventListener('change', () => {
    saveData('colorscheme_classic', 'default', function() {
      colorSchemeSetup();
    });
  });
  document.getElementById('mk2').addEventListener('change', () => {
    saveData('colorscheme_classic', 'allies', function() {
      colorSchemeSetup();
    });
  });

  /* Reset the data stored when the Reset button is clicked */
  document.getElementById('resetbutton').addEventListener('click', () => {
      browser.storage.local.remove(all, function() {
        reset();
    });
  });

  document.getElementById('return_mm').addEventListener('click', () => {
    saveData("last_page", "main.html", function() {
      document.location.href = "../html/main.html";
    });
  });
});
