// Declare variables to store list items
var item1;
var item2;
var item3;

// Set an event listener on the element with id "changeList"
// When it's clicked, the function newList() will be called
document.getElementById("changeList").onclick = newList;

// Function to prompt the user for new list items
function newList() {
  // Ask the user to enter new values for each item
  item1 = prompt("Enter a new first thing: ");
  item2 = prompt("Enter a new second thing: ");
  item3 = prompt("Enter a new third thing: ");
  
  // Call function to update the list on the page
  updateList();
}

// Function to update the content of the list items on the web page
function updateList() {
  // Set the innerHTML of each list item to the new values
  document.getElementById("firstThing").innerHTML = item1;
  document.getElementById("secondThing").innerHTML = item2;
  document.getElementById("thirdThing").innerHTML = item3;
}
