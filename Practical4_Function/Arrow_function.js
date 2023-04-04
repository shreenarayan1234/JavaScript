//Practical Implementation of Function in JavaScripts

//function expression example
let x = function(x,y){
    return x * y;
}
console.log(x(5,4));

//Using arrow functions
let y = (x,y) => x * y;
console.log(y(5,6));

//Example 1: Arrow Function with no Argument
let add=() => console.log(5+6);
add();

//Example 2:Arrow Function with one Argument
let greet1=(a) =>console.log(a);
greet1('Hello');

// Example 3: Arrow Function as an Expression
let age=23;
let welcome=(age > 18)?()=>console.log('You can Vote'):()=>console.log('You cannot Vote');
welcome();

// Example 4: Arguments Binding : Use this if you arenot sure about numbers of arugument to pass in function.
let z = (...n) => {
    console.log(n);
}

x(4,6,7); // [4, 6, 7]


