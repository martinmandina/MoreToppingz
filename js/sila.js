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
}
