var myID = function( id ) { return document.getElementById( id ); };

/*myID( 'someID' )
Here I used $, but you can use any valid variable name.
var myVar = document.getElementById("toppingsDropDown").value;
var whatEver = myID('toppingsDropDown').value();

var byId = function( id ) { return document.getElementById( id ); };

byId( 'someID' )*/
function hideDropOffPoint() {
  document.getElementById("dropOffPoint").style.visibility = "hidden";
}
function showDropOffPoint() {
  document.getElementById("dropOffPoint").style.visibility = "visible";
  document.getElementById("dropOffPoint").value = "";
}
var pizzaPrice = 500;

function Pizza(size,toppings,pizzaPrice) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
}

Pizza.prototype.price = function() {
  if (this.size === "Small") {
    this.pizzaPrice += 200;
  }
  else if (this.size === "Medium") {
    this.pizzaPrice += 300;
  }
  else if (this.size === "Large") {
    this.pizzaPrice += 400;
  }
  if (this.toppings.indexOf("Cheese") >= 0) {
    this.pizzaPrice += 300;
  }

  if (this.toppings.indexOf("Cheese") >= 0 && this.toppings.indexOf("Peanut butter") >= 0) {
    this.pizzaPrice += 1000;
    console.log("hey");

  }

 if (this.toppings.indexOf("Vegetarian") >= 0) {
    this.pizzaPrice += 200;
  }
  if (this.toppings.indexOf("Supreme") >= 0) {
    this.pizzaPrice += 400;
  }
  if (this.toppings.indexOf("Pepperoni") >= 0) {
    this.pizzaPrice += 300;
  }

return this.pizzaPrice;
}
