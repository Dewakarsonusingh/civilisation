var resource = 0;

function getResource() {
  resource += 1;
  document.getElementById("resourceNum").innerHTML = resource; 
}

var money = 0;

function getSell() {
  resource *= 1.5;
  document.getElementById("moneyNum").innerHTML = resource;
}
