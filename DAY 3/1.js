function numberToWords(num) {
  var ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  var teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  var numWords = "";

  // Input Validation
  if( num < 1 || num > 999){
    return "Number out of range, please enter 1 to 999.";
  }
  else {
  // Check each digits
  var hundreds = (num - ( num % 100 )) / 100;
  if(hundreds > 0){
    numWords += ones[hundreds] + " hundred" ;
    num = num % 100;
    if( num > 0) numWords += " ";
  }
  if(num >= 10 && num <20){
    numWords += teens[num-10];
  }
  else {
    var tensDigit = (num - (num % 10)) / 10;
    if(tensDigit > 0){
      numWords += tens[tensDigit ];
      if(num % 10 > 0) numWords += " ";
    }
    var onesDigit = num % 10;
    if (onesDigit > 0){
      numWords += ones[onesDigit];
    }
  }
  return numWords;
  }
}
// Sample input
var number = 404;

// Print Result
console.log(numberToWords(number));