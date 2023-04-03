let myName={
    fname:'Shree',
    lname:'Shrestha',
}
console.log(myName);
delete myName.lname;

console.log("After using delete operator");
console.log(myName);

//deleting value from an array
let num=[1,2,3,4,5];
delete num[2];
delete num[1];
console.log(num);

//deleting a variable
let a=23;
delete a;
console.log(a);