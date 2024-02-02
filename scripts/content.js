function replace() {
var allImages = document.getElementsByTagName('img');

for(var i = 0; i < allImages.length ; i++) {
if(Math.floor(Math.random()*2) == 0) {
allImages[i].src = chrome.runtime.getURL("kermit.jpg");
} else {
allImages[i].src = chrome.runtime.getURL("beaker.jpg");
}
}
}
window.setInterval(replace, 3000);
replace();