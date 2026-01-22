//Datatype 
// 1. primitive and non- primitive
// primitive-->number, string , boolean, undefined , null , bigInt 

const  number = 200;
const Percentage = 96.5;
const isFollow = true;
const istemp = null;
let  score;


const value = Symbol('123');
const newValue= Symbol('123');
console.log(value===newValue);
const bigNumber = 323473473n;//data types used behind the scene is the BigInt 



//array-->
const heroes =["spider", "perman","marverl"];
let myObj ={
    name:"payal",
    rollNo:31,
    //(in walue pair format) , we use here any data type
}
// function(){

// }

const myFunction=function(){// f
// unction define here 
console.log("hello world");
}
console.log(typeof myFunction);//obj function
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof bigNumber);// we can fine type oF ANY DATA TYPE WITH THE HELP OF THIS METHOD 
// UNDEFIEND --> datatype undefined 
// null--> obj

//non primitive--> array , objects ,functions
//datatype of array -->obj

// https://262.ecma-international.org/5.1/#sec-11.4.3 LEARN FROM HERE 