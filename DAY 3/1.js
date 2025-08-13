function numberToWords(num) {
  var ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  var teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  var words = "";

  if( num < 1 || num > 999){
    console.log("Number Out of range")
  }
  else {
  var hundreds = (num - ( num % 100 )) / 100;
  if(hundreds > 0){
    words += ones[hundreds] + " hundred" ;
    num = num % 100;
    if( num > 0) words += " ";
  }
  if(num >= 10 && num <20){
    words += teens[num-10];
  }
  else {
    var tensDigit = (num - (num % 10)) / 10;
    if(tensDigit > 0){
      words += tens[tensDigit ];
      if(num % 10 > 0) words += " ";
    }
    var onesDigit = num % 10;
    if (onesDigit > 0){
      words += ones[onesDigit];
    }
  }
  return words;
  }
}
 
var number = 123;
 
console.log(numberToWords(number));