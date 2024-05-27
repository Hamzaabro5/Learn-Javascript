// forEach
// forOf
// forIn
// map
// filter

const arr = [`apple` , `mango` , `orange` , `grapes` , `banana`];


// // ForOf

// for (const iterator of arr) {
//     console.log(iterator);
// }






// // ForIn
// const obj = {
//     username: `hamza`,
//     email: `hamzaabro574@gmail.com`,
//     age: 18,
// }

// for (const key in obj) {
//   console.log(key);
// }





// // ForEach

// arr.forEach(function(items , index) {
//     console.log(items);
//     console.log(index);
// })

// // for each k ander jo function h wo callback function h jo as an argument dete hain














//Array Loops

// const arr = ['apple', 'banaana', 'orange', 'watermelon', 'guava', 'mango'];

// const user = {
//     username: 'abdullah',
//     email: 'mabdullah2037@gmail.com',
//     age: 21,
//     hobbies: ['cricket', 'swimming', 'eating']
// }

// console.log(user.username)
// console.log(user['username'])

// const div = document.querySelector('div');

// for (const iterator of arr) {
//     console.log(iterator);
//     div.innerHTML += `<h1>${iterator}</h1>`

// }


// for (const key in user) {
//     // console.log(user[key])
//     console.log(`${key} ==> ${user[key]}`);
// }























//foreach
//map
//filter
//reduce


//callback
//higher order function


//callback function wo function hota ha jo ma kisi bhi function ka as an argument bhejdeta krdeta ho

// arr.forEach(function (item){
//     console.log(item)
// })


// const iteratedItem = arr.forEach((item , index)=>{
//     // console.log(item);
//     // div.innerHTML += `<h1>${item}</h1>`
//     // return item
// })
// console.log(iteratedItem);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const iteratedItems = num.map((item, index) => {
//     // console.log(item);
//     // div.innerHTML += `<h1>${item}</h1>`
//     return item + 120
// })

// console.log(iteratedItems);



// const sumOfNum = num.map(item => item + 10);
// const sumOfNum = num.map(item => item > 5);

// console.log('mapped===>', sumOfNum);



// const filtered = num.filter((item) => {
//     return item > 5
// })
// console.log('filtered===>', filtered);



// let filteredArr = []
// for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     if (num[i] > 5) {
//         // console.log(num[i])
//         filteredArr.push(num[i])
//     }
// }

// console.log(filteredArr);


// let filtered = num.filter(item => item > 5);
// console.log(filtered);

























