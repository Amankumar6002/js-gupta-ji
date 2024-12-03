// let a = 100
// const b = 20


// if(true){
//     let a = 10
// const b = 20
// console.log("INNER: ",a);

// }
// console.log(a);
// // console.log(b);



function one(){
    const username = " aman"
    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "jyoti"
    if(username === "jyoti"){
        const wrbsite=" youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++++ interesting +++++++++++++++++

function addone(value){
    return value + 1
}
console.log(addone(5));

const addtwo = function(num){
    return num + 2
}
addtwo(5)