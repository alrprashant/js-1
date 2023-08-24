const coding=["js","swift","cobalt","cpp"];

//   for each 
// coding.forEach(function(val){
//     console.log(val);
// })

coding.forEach((item)=>{

    // console.log(item);
})

function printThis(item){
    // console.log(item);
}

coding.forEach(printThis);

coding.forEach((item,index,array)=>{
    console.log(index);
    console.log(array);

})
