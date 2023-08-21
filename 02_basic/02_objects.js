// object literals

const mySum=Symbol("key1");  // ** symbol
const bio_data={
    name:"prashant",
    age:24,
    [mySum]:"mykey1", // symbol syntax 
    Email:"alrprashant009@gmail.com",
    lastLogIns:["monday","Wednesday"],
    "full name":"prashant shrotriya" // this is why [] is important

}

// console.log(bio_data.age);
// console.log(bio_data["Email"]);
// console.log(bio_data["full name"]);
// console.log(bio_data[mySum]);
// console.log(typeof bio_data[mySum]);


// how to make change in an object **overRight an object

// bio_data.Email="alrprashant001@gmail.com";
// console.log(bio_data);

// // by using method 'freeze' u can lock values of an object 
Object.freeze(bio_data);

// bio_data.age=23;
// console.log(bio_data);


bio_data.greetings= function(){
    console.log("welcome in the world of js");
}
console.log(bio_data.greetings());








