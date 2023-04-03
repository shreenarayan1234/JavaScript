//Logical Operator
let age = 25;
let hasDriverLicense = true;
let hasCar = false;

if (age >= 18 && hasDriverLicense) {
  // This code block will execute if the age is greater than or equal to 18 AND the person has a driver's license
  if (hasCar || age >= 25) {
    // This code block will execute if the person has a car OR if the person is 25 years old or older
    console.log("You can rent a car!");
  } else {
    console.log("Sorry, you cannot rent a car.");
  }
} else {
  console.log("Sorry, you cannot rent a car.");
}
