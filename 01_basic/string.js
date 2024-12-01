const name = "AMAN"
const repoCounst = 16
console.log(`Hello my name is ${name} and my repo count is $
    {repoCount}`);

    const gameName = new String('aman gupta')
    console.log(gameName[0]);
    console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(3)); 
    
console.log(gameName.indexOf("p")); 

const newString =  gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 6)
console.log(anotherString);

const newStringOne = "   Aman   "
console.log(newStringOne);

console.log(newStringOne.trim()); // trim is removed whitespace


const url = "https://aman.com/aman$33gupta"
console.log(url.replace("$33", "%22"));
