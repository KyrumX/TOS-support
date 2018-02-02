/*

  Copyright (C) Aaron Beetstra 2018

*/

var town = ["jailor", "invest", "lo", "sherrif", "spy", "bg", "doc",
  "vet", "vigil", "escort", "mayor", "retri", "med", "tper"]
var mafia = ["gf", "maf", "bmer", "consig", "consort", "dis", "forger",
 "jan", "framer"]
 var ne = ["exe", "jest", "witch"]
 var nk = ["arso", "sk", "ww"]

 var tdrows = ["tdr-1", "tdr-2", "tdr-3", "tdr-4", "tdr-5", "tdr-6",
  "tdr-7", "tdr-8", "tdr-9", "tdr-10", "tdr-11", "tdr-12", "tdr-13",
  "tdr-14", "tdr-15"]

function rankedDefaultColors() {
  document.getElementById("tdr-1").style.color = "#00FF00";
  document.getElementById("tdr-2").style.color = "#00FF00";
  document.getElementById("tdr-3").style.color = "#00FF00";
  document.getElementById("tdr-4").style.color = "#00FF00";
  document.getElementById("tdr-5").style.color = "#00FF00";
  document.getElementById("tdr-6").style.color = "#00FF00";
  document.getElementById("tdr-7").style.color = "#00FF00";
  document.getElementById("tdr-8").style.color = "#00FF00";
  document.getElementById("tdr-9").style.color = "#00FF00";
  document.getElementById("tdr-10").style.color = "#FF0000";
  document.getElementById("tdr-11").style.color = "#FF0000";
  document.getElementById("tdr-12").style.color = "#FF0000";
  document.getElementById("tdr-13").style.color = "#FF0000";
  document.getElementById("tdr-14").style.color = "#ACACBD";
  document.getElementById("tdr-15").style.color = "#ACACBD";
}

function rankedAlliedColors(playerrole) {
  if (town.includes(playerrole)) {
    for (var i = 0; i < tdrows.length; i++) {
      if (i < 9) {
        document.getElementById(tdrows[i]).style.color = "#00FF00";
      }
      else if (i < 13){
        document.getElementById(tdrows[i]).style.color = "#FF0000";
      }
      else if (i == 13)
        document.getElementById(tdrows[i]).style.color = "#ACACBD";
      else {
        document.getElementById(tdrows[i]).style.color = "#FF0000";
      }
    }
  }
  else if (mafia.includes(playerrole)) {
    for (var i = 0; i < tdrows.length; i++) {
      if (i < 9) {
        document.getElementById(tdrows[i]).style.color = "#FF0000";
      }
      else if (i < 13){
        document.getElementById(tdrows[i]).style.color = "#00FF00";
      }
      else if (i == 13) {
        document.getElementById(tdrows[i]).style.color = "#ACACBD";
      }
      else {
        document.getElementById(tdrows[i]).style.color = "#FF0000";
      }
    }
  }
  else if (playerrole == 'jest' || playerrole == 'exe') {
    for (var i = 0; i < tdrows.length; i++) {
      if (i == 13) {
        document.getElementById(tdrows[i]).style.color = "#00FF00";
      }
      else {
        document.getElementById(tdrows[i]).style.color = "#ACACBD";
      }
    }
  }
  else if (playerrole == 'witch')
    for (var i = 0; i < tdrows.length; i++) {
      if (i < 9) {
        document.getElementById(tdrows[i]).style.color = "#FF0000";
      }
      else if (i == 13) {
        document.getElementById(tdrows[i]).style.color = "#00FF00";
      }
      else if (i < tdrows.length){
        document.getElementById(tdrows[i]).style.color = "#ACACBD";
      }
    }
  else if (nk.includes(playerrole)) {
    for (var i = 0; i < tdrows.length; i++) {
      if (i == 13) {
        document.getElementById(tdrows[i]).style.color = "#ACACBD";
      }
      else if (i == 14) {
        document.getElementById(tdrows[i]).style.color = "#00FF00";
      }
      else {
        document.getElementById(tdrows[i]).style.color = "#FF0000";
      }
    }
  }
  else {
    rankedDefaultColors();
  }
}
