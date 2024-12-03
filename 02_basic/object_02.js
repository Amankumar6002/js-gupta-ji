const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "jyoti"
tinderUser.isLoggedIN = false
console.log(tinderUser);


const regularUser={
    email: "Jyoti@user.com",
    fullname:{
        userfullname:{
            firstname:"aman",
            lastname:"gupta"
        }
    }
}
console.log(regularUser.fullname);


const obj1 = {1:"A",2:"B"}

const obj2 = {3:"C",4:"D"}
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);


const obj4={...obj1, ...obj2}
console.log(obj4);

const user = [
    {
        id:1,
        email:"Aman@mail.com"
    },
    {
        id:2,
        email:"Aj@mail.com"
    }
]

user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));
const course = {
    course:"js in hindi",
    price:"999",
    courseInstructor:"aman"
}
const{courseInstructor: instructor} = course
console.log(instructor);


