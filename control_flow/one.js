// if


// const score = 200
// if(score>200){
//     let power = "fly"
// console.log(`User power: ${power}`);

// }

// const balance = 1000
// if(balance > 500) console.log("test");



// if (balance < 500) {
//     console.log("less than 500");
    
// }
// else if(balance < 750){
//     console.log("less than 750");
    
// }
// else if(balance < 950){
//     console.log("less than 950");
    
// }
// else {
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}
if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("User logged In");
    
}