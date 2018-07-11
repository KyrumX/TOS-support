/*

  Copyright (C) Aaron Beetstra 2018

*/

function getCurrentPage(key, callback) {
    chrome.storage.local.get(key, callback);
}

function setCurrentPage(key, value, callback) {
    var temp = {};
    temp[key] = value;
    chrome.storage.local.set(temp, callback);
}

function saveData(key, value, callback) {
  var temp = {};
  temp[key] = value;
  chrome.storage.local.set(temp, callback);
}

function setElementValue(id, value) {
  document.getElementById("name1").value = value.data;
}

function getSavedDate(key, callback) {
  chrome.storage.local.get(key, callback);
}
