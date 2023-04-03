//instanceof Operator
let books=['JS','DBMS','OP','NM','SE'];
console.log(books instanceof Array); //return true
console.log(books instanceof Object); //return true
console.log(books instanceof String);  //return false
console.log(books instanceof Number); //return true

var str = new String("hello");
console.log(str instanceof Object); //returns true
console.log(str instanceof Date); //returns false
console.log(str instanceof String); //returns true

var myDate = new Date();
console.log(myDate instanceof Date); //returns true
console.log(myDate instanceof Object); //returns true
console.log(myDate instanceof String); //returns false
