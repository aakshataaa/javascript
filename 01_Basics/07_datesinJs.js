// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// // console.log(myDate.toTimeString());
// // console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date('2023,2,23');
// let myCreatedDate = new Date('2023,2,23');
// let myCreatedDate = new Date('2023-02-23');
// let myCreatedDate = new Date('02-23-2023');


// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myTimestamp = myCreatedDate.getTime();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // days since 1970

// let myDate = new Date();
// console.log(myDate.getMonth() + 1); // Months are 0-indexed, so January is 0
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());


// newDate.toLocaleString('default', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
// })

// ...existing code...

let myDate = new Date();
console.log(myDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}));

// ...existing code...



