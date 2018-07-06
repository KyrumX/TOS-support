export function getCurrentPage(key, callback) {
    chrome.storage.local.get(key, callback);
}

export function setCurrentPage(key, value, callback) {
    var temp = {};
    temp[key] = value;
    chrome.storage.local.set(temp, callback);
}
