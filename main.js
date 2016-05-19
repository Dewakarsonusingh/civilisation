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
  document.getElementById("moneyNum") = money;
  document.getElementById("resourceNum") = resource;
}
