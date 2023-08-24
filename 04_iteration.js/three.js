//  ** for of loop

const arr  =[1,22,3,4,5];

// for(const iterator of object){

// }

for(const num of arr){
    // console.log(num);
    // if(num===2){
    //     console.log("sahi hai ")
    // }
}



// const greetings="hello baby!";
// for(const greet of greetings){
//     console.log(`Each char ${greet}`);
// }

// const obj1={
//     name:"prashant",
//     age:22,

// }
// for (const [key,value] of obj1) {
//     console.log(key);
// }
// so it's not posible to itrate an obj by for of loop 



// ** maps
const map1=new Map();
map1.set('IN',"india");
map1.set('USA',"united state of america");
map1.set('Fr',"France");
// if we gonna to try insert duplicate key it will't work
map1.set('IN',"india");
// console.log(map1);
map1.get("IN");
console.log(map1.get("IN"));

// how to use for of loop in map 
for (const [key,value]  of map1 ) {
    // console.log(key," ",value);
    
}



// console.log(map1);



