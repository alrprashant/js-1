const userName=new String ('kalu');
// console.log(userName);

const num=400;
// console.log(num);
// console.log(typeof num);    //sometimes it may show undifined so \
// the right way to declare a num 

const balance =new Number(800);
// console.log(balance);

// can change number into string
// console.log(balance.toString());
// after changing a num into string we can use all string methodes 
// console.log(balance.toString().length);


// to fixed 

// console.log(balance.toFixed(2));
// console.log(balance.toFixed(3));

// percision 
const otherNum =23.869;
// console.log(otherNum.toPrecision(3));
const otherNum1=123.869;
// console.log(otherNum1.toPrecision(3));
const otherNum2=1123.869;
// console.log(otherNum2.toPrecision(3));

// local string 
const rupee=1000000000;
// console.log(rupee.toLocaleString());
// console.log(rupee.toLocaleString('en-IN'));




//  ::::::::::::::::::::::::::::::MATH:::::::::::::::::::::::::::::

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));   // in cae of ceil always return top value like if u want to ceil 4.1 it too give 5 
// console.log(Math.floor(4.9));  //in case of floor always return lower value 


// max or min 

console.log(Math.min(4,3,6,7));
console.log(Math.max(4,3,6,7));

// RANDOM 
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);


















