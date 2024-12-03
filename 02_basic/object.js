// singleton

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name:"Aman",
    full_name:"Gupta Aman",
    age:18,
   [ mySym]:"Mykey1",
    location:"Bihar",
    email:"aman@google.com",
    isLoggInn:false
    ,lastLoginDays:["Monday","Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.full_name);
console.log(jsUser[mySym]);


jsUser.email = "aman@microsoft.com"
//Object.freeze(jsUser)
jsUser.email = "aman@chatgpt.com"
console.log(jsUser);

jsUser.greeting1 = function(){
    console.log("Hello js user");
    
}
jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
    
}
jsUser.greeting1();
jsUser.greeting2();

