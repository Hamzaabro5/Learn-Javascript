// console.log(`Hello Objects`);


// const obj = {
//     username: `Hamza Abro`,
//     email: `hamzaabro683@gmail.com`,
//     age: 18,
//     isLoggedIn: false,
// }
// console.log(obj);
// console.log(obj.username);
// console.log(obj.email);
// console.log(obj.age);











// const user = {
//     username: `hamzaabro`,
//     email: `hamzaaabro683@gmail.com`,
//     age: 18,
//     greetuser: function(){
//         // console.log(`Hello World` , this.username);
//         return `${this.lastname}`
//     }   
// }
// user.firstname = `Muhammad`;
// user.lastname = `Hamza`;
// delete user.username;
// console.log(user);
// console.log(user.greetuser());












// TASK

const userName = document.querySelector(`#username`)
const userEmail = document.querySelector(`#email`)
const userAge = document.querySelector(`#age`)
const userCity = document.querySelector(`#city`)


function getUser() {
    const obj = {
        name: userName.value,
        email: userEmail.value,
        age: userAge.value,
        city: userCity.value,
    }
    console.log(obj);
}