function saveData(key, value) {
  var temp = {};
  temp[key] = value;
  chrome.storage.sync.set(temp, function() {
    console.log('Settings saved');
  });
}

// function getSavedDate(key) {
//   chrome.storage.sync.get(key, (items) => {
//     callback(chrome.runtime.lastError ? null : items[key]);
//   });
// }

function setElementValue(id, value) {
  document.getElementById("name1").value = value.data;
}

function getValue(callback) {
  chrome.storage.sync.get("p1", callback);
}

window.onload = function() {

};

document.addEventListener('DOMContentLoaded', () => {
  var key = "p1";
  chrome.storage.sync.set({"p1" : "Aaron" }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  // console.log("hier1");
  // getSavedDate(key, (value) => {
  //   console.log("hier2");
  //   if (value) {
  //     console.log(value);
  //   }
  // });
  getValue(function(object) {
    document.getElementById("name1").value = object[key];
  });
});
