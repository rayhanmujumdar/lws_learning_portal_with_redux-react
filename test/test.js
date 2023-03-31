// Get the table element and its rows
var table = document.getElementById("myTable");
var rows = table.getElementsByTagName("tr");

// Convert the rows into an array for sorting
var rowsArray = Array.prototype.slice.call(rows, 1);
console.log(rowsArray[0].cells[1].textContent)

// Sort the rows based on the age column
rowsArray.sort(function(row1, row2) {
  var age1 = parseInt(row1.cells[1].textContent);
  var age2 = parseInt(row2.cells[1].textContent);
  return age1 - age2;
});

// Reinsert the sorted rows back into the table
for (var i = 0; i < rowsArray.length; i++) {
  table.appendChild(rowsArray[i]);
}