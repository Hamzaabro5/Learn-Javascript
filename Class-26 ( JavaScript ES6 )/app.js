// Topics Of ES6





















// // // 3, Destructuring

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


















// // , Spread Operator


// const fruit = [`apple` , `banana` , `orange` , `mango`]
// const arr2 = [`fruit`]
// const newArr = arr2.concat(fruit)
// console.log(newArr);

// // OR

// const fruit = [`apple` , `banana` , `orange` , `mango`]
// const arr2 = [`fruit` , ...fruit]
// console.log(arr2);


















// , Rest Operator

// function hello(...username) {
//     console.log(username);
// }
// hello(`hamza` , `jawad` , `haseeb` , `hassan` , `izhan`)
















// // , Ternary Operator

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












// //  , Default Parameter

// function hello(username = `abc`) {
//     console.log(username);   
// }
// hello()

