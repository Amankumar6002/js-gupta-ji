// const userEmail = "A@aman.ai"
// if (userEmail) {
//     console.log("Got user Email");
    
// }
// else{
//     console.log("Don't have user email");
    
// }


const empobj = {}
if (Object.keys(empobj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 15
console.log(val3);



// Terniary Operator

const iceTeaprice = 100
iceTeaprice >= 80 ? console.log("Less than 80") : console.log
("More than 80");

