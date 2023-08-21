// array
const myArr=[0,1,2,3,4,5];
const myHeros=["shaktiman" ,"nagraj"];
const myArr2=new Array(1,2,3,4,5);

// console.log(myArr2);
// console.log(myArr[3]);

// array methods
// 1 push in an array
myArr.push(6);
// console.log(myArr);
myArr.push(7);
// console.log(myArr);

// 2 pop 
myArr.pop();
// console.log(myArr);
myArr.pop();
// console.log(myArr);
myArr.pop();
// console.log(myArr);
//3  unshift 
myArr.unshift(7);
// console.log(myArr);
myArr.unshift(8);
// console.log(myArr);
// 4 shift
myArr.shift();
// console.log(myArr);
// 5 includes 
// console.log(myArr.includes(33));

// 6 index off 
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(14));


// console.log(typeof myArr);
// // join 
// const newArr=myArr.join();
// console.log(typeof newArr);
// console.log(newArr);


// console.log("a",myArr);

// const myArr3=[1,2,3,4,5];
// const myn1=myArr3.slice(1,3);
// console.log(myn1);



// **spread element 
// **spread is used to separate all the elements of an array
// 
// const abc1=['qwe','rty','uio','pas','dfg'];
// console.log(...abc1);
// const zxy1=['qwe','rty','uio','pas','dfg'];
// console.log(...zxy1);

// **We can also use spread to join two arrays

// const sdf1=[...abc1,...zxy1];
// console.log(sdf1);

// flat 

// const first_array=[2,3,4,[3,4,5,6],[6,7,8,[7,8,9]]];
// const real_array=first_array.flat(infinity)  // here infinity used to tell depth till we want to do flat the array we can also use a number 
// console.log(real_array)

// ** important methods 

// **isArray
console.log(Array.isArray("baby"));
// **from
console.log(Array.from("baby"));





























