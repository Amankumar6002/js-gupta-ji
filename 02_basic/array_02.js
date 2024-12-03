const marval_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]
// marval_heros.push(dc)
// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allHeros=marval_heros.concat(dc)
// console.log(allHeros);
const all_new_heros = [...marval_heros, ...dc]
console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6,7],[8,5,[2,33]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"));
console.log(Array.from({name:"Aman"})); // interesting

let score1 = 100
let score2 = 150
let score3 = 200
console.log(Array.of(score1.score2));
