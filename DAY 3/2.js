var height = 5;
var i = 0;

while (i < height) {
  var spaces = "";
  var stars = "";
  // Add appending spaces
  var j = 0;
  while (j < i) {
    spaces += " ";
    j++;
  }

  // Add *
  var k = 0;
  while (k < height - i) {
    stars += "*";
    k++;
  }

  console.log(spaces + stars);
  i++;
}
