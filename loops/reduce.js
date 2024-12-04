// const myNum = [1,2,3,4,5,6,7,8,9,10]
// // const myTotal = myNum.reduce(function (acc, currval){
// //     console.log(`acc: ${acc} and currval: ${currval}`);
    
// //     return acc + currval
// // }, 0)
// const myTotal = myNums.reduce((acc,curr)=>acc+curr, 0)
// console.log(myTotal);


const shoppingCart=[
    {
        itemname:"python",
        price:999
    },
    {
        itemname:"C++",
        price:1999
    },
    {
        itemname:"html",
        price:699
    },
    {
        itemname:"java",
        price:1667
    }
]
const priceToPay = shoppingCart.reduce((acc, item)=>acc + item.price, 0)
console.log(priceToPay);
