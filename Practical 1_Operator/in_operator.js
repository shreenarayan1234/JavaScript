//in Operator

let books=['JS','DBMS','OP','NM','SE'];
console.log(1 in books);   //true
console.log(3 in books);   //true
console.log(7 in books);  //false
console.log("JS" in books);  //return false (Should specify index number no value)
console.log("length" in books); //return true (length is an Array Property)

//Custom objects
const myBooks={
    class: 14,
    faculty: 'BCA',
}
console.log("class" in myBooks);
console.log("faculty" in myBooks)