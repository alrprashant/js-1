/* 
 primitive data 
  type: String,Number,Boolean,null,undefined,symbol,BigInt


*/


/* 
   refrence  (non-permitive)
   type: array,object,function

*/










// memories....................................
//stack(premetive) and heap(non-permitive)

// let myName="prashant";
// let newName=myName;
// newName="modi";



// console.log(newName);
// console.log(myName);



let objectOne={
   userName:"prashant",
   address:"alrprashant009"
}

let objectTwo=objectOne;
objectTwo.userName="alrPrashant";
console.log(objectOne);

