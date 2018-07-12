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

var mm = "main.html"
var rk = "ranked.html"
var rc = "rankedcoven.html"

window.onload = function() {
  getCurrentPage(["last_page"], function(object) {
    if(object['last_page'] != undefined) {
      var currentP = document.location.href
      var parts = currentP.split("/")
      var last = parts.pop()

      if(last != object['last_page']) {
        document.location.href = object['last_page'];
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  var currentP = document.location.href
  var parts = currentP.split("/")
  var last = parts.pop()

  // Switch to Ranked on request
  document.getElementById('classic_button').addEventListener('click', () => {
    setCurrentPage("last_page", "classic.html", function() {
      document.location.href = "../html/classic.html";
    });
  });

  // Switch to Ranked on request
  document.getElementById('rk_norm_button').addEventListener('click', () => {
    setCurrentPage("last_page", "ranked.html", function() {
      document.location.href = "../html/ranked.html";
    });
  });

  // Switch to Ranked Coven on request
  document.getElementById('rk_coven_button').addEventListener('click', () => {
    setCurrentPage("last_page", "ranked_coven.html", function() {
      document.location.href = "../html/ranked_coven.html";
    });
  });
});
