function calculatePerimeter(sideA, sideB, sideC) {
  return sideA + sideB + sideC;
}
//Sample sides of a triangle
let sideA = 5;
let sideB = 7;
let sideC = 10;

let perimeter = calculatePerimeter(sideA, sideB, sideC);
console.log("Perimeter of the triangle:", perimeter);