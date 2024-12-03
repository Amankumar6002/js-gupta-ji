// function saymyName(){
//     console.log("aman");
    
// }
// saymyName()

// function addTwoNumbers(n1, n2){
// let result = n1 + n2
// return result

// }
// result = addTwoNumbers(3,5)
// console.log(result);



function loginuserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Aman"));

function calculateCartPrice(...num1){  
return num1
}
console.log(calculateCartPrice(200, 400, 600, 700));


const user={
    username:"Aman",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"gupta ji",
    price:344
})
const myNewArray = [200,400,100,600]
function returnsecondValue(getArray){
return getArray[1]
}
console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200,400,100,600]));