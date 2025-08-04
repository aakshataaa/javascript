 const Score = 400
 console.log(Score)

 const balance = new Number(100)
 console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // "123.9"
 const hundreds= 1000000000

 console.log(hundreds.toLocaleString('en-IN'))

/*************************Maths**************** */
 console.log(Math);
 console.log(Math.abs(-47));
 console.log(Math.round(5.4));
 console.log(Math.ceil(5.4));   //more than 5 
 console.log(Math.floor(5.4));  //less than 5
console.log(Math.min(5, 4, 3, 2, 1));
 console.log(Math.max(5, 4, 3, 2, 1));
console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10) + 1); // random number between 0 and 10
console.log(Math.floor((Math.random() * 10) + 1)); // random integer between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);









