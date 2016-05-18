var resource = 0;

function getResource() {
  resource += 1;
  document.getElementById("resourceNum").innerHTML = resource; 
}

var money = 0;

function getSell() {
  resource *= 2;
  document.getElementById("moneyNum").innerHTML = resource;
}
