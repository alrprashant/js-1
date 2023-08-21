const bumbleUser=new Object();
bumbleUser.name="babu ji";
// console.log(bumbleUser.name);
bumbleUser.age=24;
bumbleUser.isLogedIn=false;
// console.log(bumbleUser);



// nested objects

const regularUser={
    name:"baby",
    fullname:{
        userFullName:{
            firstName:"prashant",
            lastName:"shrotriya"
        }
    }

};

// console.log(regularUser.fullname.userFullName.lastName); // ** way to access nested objects


//  ** assign 

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj4={5:"e",6:"f"}
// const obj3=Object.assign({},obj1,obj2,);

const obj3={...obj1,...obj2};
// console.log(obj3);


// ** array of objects 

const arrayOfObjects=[
    {
        name:"baby",
        age:24
    }
    ,{
        name:"badababy",
        age:28
    }
    ,{
        name:"bahutBadababy",
        age:32
    }
];

// console.log(arrayOfObjects[2].name);
// console.log(arrayOfObjects[0].age);



// ** important methods of objects
console.log(bumbleUser);
console.log(Object.keys(bumbleUser));
console.log(Object.values(bumbleUser));
console.log(Object.entries(bumbleUser));


//**  hasownpropertie 
console.log(bumbleUser.hasOwnProperty('isLogedIn'));
console.log(bumbleUser.hasOwnProperty('isLoged'));





















