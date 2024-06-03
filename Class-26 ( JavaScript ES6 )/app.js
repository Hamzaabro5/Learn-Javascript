// // Topics Of ES6

// 1, Variable Scoping
// 2, Closure
// 3, Template literals
// 4, Destructuring
// 5, Default parameters
// 6, Rest parameter
// 7, Spread Operator
// 8, Arrow functions
// 9, Enhanced object literals
// 10, Iterators & For..of
// 11, Generators
// 12, Modules
// 13, Map
// 14, Array methods
// 15, Higher-order function
// 16, CallBack
// 17, Promises
// 18, Exponentiation Operator
// 19, Classes
// 20, Ternary Operator
// 21, Optional chaining




















// // // 4, Destructuring

// // Object Destructuring

// const user = {
//     username: `Hamzaabro`,
//     email: `hamzaabro@gmail.com`,
//     age: 21,
// };

// const {username , email , age} = user;
// console.log(username);


// // Array Destructuring

// const fruit = [`apple` , `banana` , `orange` , `mango`]

// const [fruit1 , fruit2 , fruit3 , fruit4] = fruit;
// console.log(fruit2);


















// // 7, Spread Operator


// const fruit = [`apple` , `banana` , `orange` , `mango`]
// const arr2 = [`fruit`]
// const newArr = arr2.concat(fruit)
// console.log(newArr);

// // OR

// const fruit = [`apple` , `banana` , `orange` , `mango`]
// const arr2 = [`fruit` , ...fruit]
// console.log(arr2);


















// 6, Rest Operator

// function hello(...username) {
//     console.log(username);
// }
// hello(`hamza` , `jawad` , `haseeb` , `hassan` , `izhan`)
















// // 20, Ternary Operator

// const num = 90

// // if (num > 60) {
// //     console.log(`Pass`);
// // } else {
// //     console.log(`Fail`);
// // }

// num > 60 ? console.log(`Pass`) : console.log(`Fail`);


// // OR

// // if (num > 80) {
// //     console.log(`Behter`);
// // } else if(num > 50) {
// //     console.log(`Pass`);
// // } else {
// //     console.log(`Failed`);
// // }

// num > 70 ? console.log(`Behtreen`) : num > 50 ? console.log(`Pass`) : console.log(`Fail`)












// //  5, Default Parameter

// function hello(username = `abc`) {
//     console.log(username);   
// }
// hello()








// //  9, Enhanced Object Literals

// let names = `abd`;
// let age = 21;

// let user = {
//     names,
//     age,
// }
// console.log(user);