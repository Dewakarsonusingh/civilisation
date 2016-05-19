var resource = 0;
var money = 0;

function getResource() {
  resource += 1;
  document.getElementById("resourceNum").innerHTML = resource; 
}

var money = 0;

function getSell() {
  money += resource / 2;
  resource = 0;
  document.getElementById("moneyNum").innerHTML = money;
  document.getElementById("resourceNum").innerHTML = resource;
}
function getEmploy() {
  money -= 100;
}

if (money < 0) {
   alert("The flame of civilisation has gone out!");
}
