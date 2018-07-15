/*

  Copyright (C) Aaron Beetstra 2018

*/

function saveData(key, value, callback) {
  var temp = {};
  temp[key] = value;
  browser.storage.local.set(temp, callback);
}

function getSavedDate(key, callback) {
  browser.storage.local.get(key, callback);
}

function nameSetUp(names, keys) {
  for(var i = 0; i < 15; i++) {
    let nameUnit = names[i]
    let playerUnit = keys[i]
    document.getElementById(nameUnit).addEventListener('change', () => {
      saveData(playerUnit, document.getElementById(nameUnit).value);
    });
  }
}
