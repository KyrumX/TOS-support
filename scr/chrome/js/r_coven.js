function getCurrentPage(key, callback) {
    chrome.storage.local.get(key, callback);
}

function setCurrentPage(key, value, callback) {
    var temp = {};
    temp[key] = value;
    chrome.storage.local.set(temp, callback);
}

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

// REPETETIVE
function saveData(key, value, callback) {
  var temp = {};
  temp[key] = value;
  chrome.storage.sync.set(temp, callback);
}

// REPETETIVE: REPLACE!
function setNameInputActions() {
  document.getElementById('name1').addEventListener('change', () => {
    saveData("p1_cr", document.getElementById("name1").value);
  });
  document.getElementById('name2').addEventListener('change', () => {
    saveData("p2_cr", document.getElementById("name2").value);
  });
  document.getElementById('name3').addEventListener('change', () => {
    saveData("p3_cr", document.getElementById("name3").value);
  });
  document.getElementById('name4').addEventListener('change', () => {
    saveData("p4_cr", document.getElementById("name4").value);
  });
  document.getElementById('name5').addEventListener('change', () => {
    saveData("p5_cr", document.getElementById("name5").value);
  });
  document.getElementById('name6').addEventListener('change', () => {
    saveData("p6_cr", document.getElementById("name6").value);
  });
  document.getElementById('name7').addEventListener('change', () => {
    saveData("p7_cr", document.getElementById("name7").value);
  });
  document.getElementById('name8').addEventListener('change', () => {
    saveData("p8_cr", document.getElementById("name8").value);
  });
  document.getElementById('name9').addEventListener('change', () => {
    saveData("p9_cr", document.getElementById("name9").value);
  });
  document.getElementById('name10').addEventListener('change', () => {
    saveData("p10_cr", document.getElementById("name10").value);
  });
  document.getElementById('name11').addEventListener('change', () => {
    saveData("p11_cr", document.getElementById("name11").value);
  });
  document.getElementById('name12').addEventListener('change', () => {
    saveData("p12_cr", document.getElementById("name12").value);
  });
  document.getElementById('name13').addEventListener('change', () => {
    saveData("p13_cr", document.getElementById("name13").value);
  });
  document.getElementById('name14').addEventListener('change', () => {
    saveData("p14_cr", document.getElementById("name14").value);
  });
  document.getElementById('name15').addEventListener('change', () => {
    saveData("p15_cr", document.getElementById("name15").value);
  });
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
    saveData("coven-random_cr", document.getElementById('maf-random').value);
  });
  document.getElementById('coven-random2').addEventListener('change', () => {
    saveData("coven-random2_cr", document.getElementById('maf-random2').value);
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

document.addEventListener('DOMContentLoaded', () => {
  /* Reset the data stored when the Reset button is clicked */
  document.getElementById('resetbutton').addEventListener('click', () => {
    chrome.storage.local.clear(function() {
      reset();
    });
  });

  document.getElementById('return_mm').addEventListener('click', () => {
    setCurrentPage("last_page", "main.html", function() {
      document.location.href = "../html/main.html";
    });
  });
});
