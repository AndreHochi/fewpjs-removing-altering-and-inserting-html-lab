// Write your code here!
main = document.getElementById("main");
main.remove();

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
let text = document.createTextNode("YOUR-NAME is the champion!")
newHeader.appendChild(text);