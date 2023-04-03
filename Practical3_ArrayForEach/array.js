let myArray = [1, 2, 3, 4, 5];
myArray[0] = 10;
console.log(myArray); // Output: [10, 2, 3, 4, 5]
myArray.push(6);
console.log(myArray);
myArray.push(7,8);
console.log(myArray);
myArray.pop();
console.log(myArray);

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
