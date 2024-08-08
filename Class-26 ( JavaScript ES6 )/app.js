// // Topics Of ES6

// 1, Variable Scoping //P
// 2, Closure //p
// 3, Generators 
// 4, Modules //p
// 5, Exponentiation Operator /p
// 6, Optional chaining //p
// 7, Object Methods (keys,values,freez,entries) //p
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













// // 1, Variable Scoping

// // Local Variable
// // Global Variable




// // // Global Variable
// let user = `Hamza`




// // // Local Variable
// function user() {
//     let username = `Hamza`
// }




// // Let and const is block scope

// if (true) {
//     var age = `18`
// }
// console.log(age);

// // Var is not block scope so it will log




















// // 2, Closure

// function outerFunction() {
//     let a = 10;

//     function nestedFunction() {
//         console.log(a);
//     }
//     nestedFunction()
// }
// outerFunction()

// function outerFunction() {
//         let a = 10;
    
//         function nestedFunction() {
//             let b = 20;
//             // console.log(a);

//             function nestedFunction2() {
//                 console.log(a);
//                 console.log(b);
//             }
//             }
//             nestedFunction()
//             nestedFunction2()
//     }
// outerFunction()





















// // 6, Optional Chaining


// const user = {
//     username : `hamza`,
//     age : 18,
//     nestedObj : {
//         fullname : `Muhammad Hamza`,
//         DTB : `21-06-2006`,
// }

// }
// console.log(user);
// console.log(user.nestedObj);
// console.log(user.nestedOb?.DTB);














// // // 5, Exponentiation Operator

// console.log(4 ** 5);

// console.log(2 ** 3);

// // Precedence
// console.log(2 + 3 ** 2); // ** isko zyada precedence milaigi
// console.log((2 + 3) ** 2);






















// // Objects Methods (keys , freeze , entries , Value)

// const user = {
//         username : `hamza`,
//         age : 18,
//         isLoggedIn: true,
//     }


// // Object.freeze(user);
// // console.log(Object.keys(user));
// // console.log(Object.values(user));
// // console.log(Object.entries(user));








// Modules in Another Folder in classes
