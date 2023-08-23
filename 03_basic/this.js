const user={
    username:"ali khan",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username} welcome in the world of dark web`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.welcomemessage); 
// console.log(user.welcomemessage());   //**there is a diffrence betn those lines */

// user.username="alr prashant";
// console.log(user.welcomemessage());
// console.log(this);

// const addTwo=(num1,num2)=>{
//  return num1+num2;
// }

// console.log(addTwo(2,3));
// const addTwo=(num1,num2)=>(num1+num2)
    
   
   
//    console.log(addTwo(2,3));


const addTwo=()=>({ username:"alr prashant"})

console.log(addTwo(2,3));


