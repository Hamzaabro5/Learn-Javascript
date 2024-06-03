// // Topics Of ES6

// 1, Variable Scoping
// 2, Closure
// 3, Generators
// 4, Modules
// 5, Exponentiation Operator
// 6, Optional chaining
// 7, Object Methods (keys,values,freez,entries)
// 8, Destructuring //p
// 9, Template literals //p
// 10, Destructuring //p
// 11, Default parameters //p
// 12, Rest parameter //p
// 13, Spread Operator //p
// 14, Arrow functions  //p
// 15, Enhanced object literals //p
// 16, Iterators & For..of  //p
// 17, Map  //p
// 18, Array methods  //p
// 19, Higher-order function  //p
// 20, CallBack  //p
// 21, Promises  //p
// 22, Ternary Operator //p



















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