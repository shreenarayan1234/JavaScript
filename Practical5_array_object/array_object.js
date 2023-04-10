let program=[
   {
    "frontend":"HTML",
    "backend":"PHP",
    "develop":2002
   },
   {
    "fontend":"CSS",
    "backend":"SQL",
    "developed":2005
   }
]
//To find length of an array, use Array.length
console.log("Array Size: "+program.length);

//To sort array, use Array.sort()
let backend=['laravel','react','node.js','Java'];
console.log('Sorting an array: '+backend.sort());

//To sort an array, using Array.toString().
let frontend=['Html','CSS','JS'];
console.log(frontend);
console.log("Array to String: "+ frontend.toString());


//shift() method removes the first element from an array and pop() method removes the last position element
let arr=[0,1,2,3];
console.log(arr);
arr.shift()
console.log(arr);

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array
let arr1=[1,2,3];
let newlength=arr1.unshift(0);
console.log(newlength);
console.log(arr1);
arr1.push(4,5);
console.log(arr1);