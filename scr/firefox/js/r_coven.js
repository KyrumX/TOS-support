/*

  Copyright (C) Aaron Beetstra 2018

*/

var players = [
  "p1_cr",
  "p2_cr",
  "p3_cr",
  "p4_cr",
  "p5_cr",
  "p6_cr",
  "p7_cr",
  "p8_cr",
  "p9_cr",
  "p10_cr",
  "p11_cr",
  "p12_cr",
  "p13_cr",
  "p14_cr",
  "p15_cr"
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
  "town-invest",
  "town-invest2",
  "town-protective",
  "town-killing",
  "town-support",
  "town-random",
  "town-random2",
  "town-random3",
  "coven-random",
  "coven-random2",
  "neutral-evil",
  "neutral-killing"
];

var roles = [
  "town-invest_cr",
  "town-invest2_cr",
  "town-protective_cr",
  "town-killing_cr",
  "town-support_cr",
  "town-random_cr",
  "town-random2_cr",
  "town-random3_cr",
  "coven-random_cr",
  "coven-random2_cr",
  "neutral-evil_cr",
  "neutral-killing_cr"
];

var player_save_keys = [
  "playername_cr",
  "playerrole_cr",
  "colorscheme_cr"
]

var all = roles.concat(players, player_save_keys)

function setNameInputActions() {
  nameSetUp(names, players)
  document.getElementById('playername').addEventListener('change', () => {
    saveData("playername_cr", document.getElementById("playername").value);
  });
}

function setRoleInputActions() {
  document.getElementById('town-invest').addEventListener('change', () => {
    saveData("town-invest_cr", document.getElementById('town-invest').value);
  });
  document.getElementById('town-invest2').addEventListener('change', () => {
    saveData("town-invest2_cr", document.getElementById('town-invest2').value);
  });
  document.getElementById('town-protective').addEventListener('change', () => {
    saveData("town-protective_cr", document.getElementById('town-protective').value);
  });
  document.getElementById('town-killing').addEventListener('change', () => {
    saveData("town-killing_cr", document.getElementById('town-killing').value);
    removeUniqueRoles();
  });
  document.getElementById('town-support').addEventListener('change', () => {
    saveData("town-support_cr", document.getElementById('town-support').value);
    removeUniqueRoles();
  });
  document.getElementById('town-random').addEventListener('change', () => {
    saveData("town-random_cr", document.getElementById('town-random').value);
    removeUniqueRoles();
  });
  document.getElementById('town-random2').addEventListener('change', () => {
    saveData("town-random2_cr", document.getElementById('town-random2').value);
    removeUniqueRoles();
  });
  document.getElementById('town-random3').addEventListener('change', () => {
    saveData("town-random3_cr", document.getElementById('town-random3').value);
    removeUniqueRoles();
  });
  document.getElementById('coven-random').addEventListener('change', () => {
    saveData("coven-random_cr", document.getElementById('coven-random').value);
    removeUniqueRoles();
  });
  document.getElementById('coven-random2').addEventListener('change', () => {
    saveData("coven-random2_cr", document.getElementById('coven-random2').value);
    removeUniqueRoles();
  });
  document.getElementById('neutral-evil').addEventListener('change', () => {
    saveData("neutral-evil_cr", document.getElementById('neutral-evil').value);
  });
  document.getElementById('neutral-killing').addEventListener('change', () => {
    saveData("neutral-killing_cr", document.getElementById('neutral-killing').value);
  });
  document.getElementById('playerrole').addEventListener('change', () => {
    saveData("playerrole_cr", document.getElementById('playerrole').value, () => {
      colorSchemeSetup();
    });
  });
}

function colorSchemeSetup() {
  getSavedDate(['colorscheme_cr'], function(object) {
    if (object['colorscheme_cr'] == undefined)
      saveData('colorscheme_cr', 'default', function() {
        covenRankedDefaultColors();
        document.getElementById("mk1").checked = true;
      });
    else if (object['colorscheme_cr'] == 'default') {
      covenRankedDefaultColors();
      document.getElementById("mk1").checked = true;
    }
    else if (object['colorscheme_cr'] == 'allies') {
      if(document.getElementById('playerrole').value != 'unkown') {
        covenRankedAlliedColors(document.getElementById('playerrole').value);
        document.getElementById("mk2").checked = true;
      }
      else {
        saveData('colorscheme_cr', 'default', function() {
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
    getSavedDate(['playername_cr'], function(object) {
      if (object['playername_cr'] != undefined) {
        document.getElementById('playername').value = object['playername_cr'];
      }
    });
  });
}

function playerRolesSetup() {
  getSavedDate(roles, function(object) {
    for (var i = 0; i < 12; i++) {
      if (object[roles[i]] != undefined) {
        document.getElementById(roles_ids[i]).value = object[roles[i]];
      }
    }
    getSavedDate(['playerrole_cr'], function(object) {
      if (object['playerrole_cr'] != undefined) {
        document.getElementById('playerrole').value = object['playerrole_cr'];
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
  uniqueCheck(['coven-random', 'coven-random2'], "hm", "Hex Master");
  uniqueCheck(['coven-random', 'coven-random2'], "necro", "Necromancer");
  uniqueCheck(['coven-random', 'coven-random2'], "pois", "Poisoner");
  uniqueCheck(['coven-random', 'coven-random2'], "pmer", "Potion Master");
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
  covenRankedDefaultColors();
  removeUniqueRoles();
}

document.addEventListener('DOMContentLoaded', () => {
  playerNamesSetup();
  playerRolesSetup();

  setNameInputActions();
  setRoleInputActions();

  document.getElementById('mk1').addEventListener('change', () => {
    saveData('colorscheme_cr', 'default', function() {
      colorSchemeSetup();
    });
  });
  document.getElementById('mk2').addEventListener('change', () => {
    saveData('colorscheme_cr', 'allies', function() {
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
