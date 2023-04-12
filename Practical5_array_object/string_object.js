// In JavaScript, a string object is a type of object that represents a sequence of characters. It is a primitive data type, meaning it is not an object itself, but JavaScript treats it as an object when you perform operations on it.

var str1 = new String('Hello');
var str2 = 'world';
var message = str1 + ', ' + str2 + '!';
console.log(message);  // Output: Hello, world!

//Concatenation involves joining two or more strings together. 
//This can be done using the '+' operator or the concat() method:
var str3 = 'JavaScript';
var str4 = 'is awesome';
var result = str3.concat(' ',str4);
console.log(result);   // Output: JavaScript is awesome

//slicing involves extracting the portion of string. This can be done by using substring() or slice() method
var str5 = new String("Shreenarayan");
var result1 = str5.substring(0,5);
var result2 = str5.slice(5,12);
console.log(result1);
console.log(result2);

//Searching for substrings can be done using indexOf() or lastIndexOf() methods.
let str6 = new String("My name is Shreenarayan Shrestha");
let index1 = str6.indexOf("Shree");
let index2 = str6.lastIndexOf("a");
console.log(index1);
console.log(index2);