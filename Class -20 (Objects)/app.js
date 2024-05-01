// console.log(`Hello Objects`);


const users = [
    {
        name: "Alice",
        age: 25,
        hobbies: ["Reading", "Painting"]
    },
    {
        name: "Bob",
        age: 30,
        hobbies: ["Playing guitar", "Cooking"]
    },
    {
        name: "Charlie",
        age: 22,
        hobbies: ["Hiking", "Photography"]
    },
    {
        name: "David",
        age: 28,
        hobbies: ["Running", "Watching movies"]
    },
    {
        name: "Ella",
        age: 35,
        hobbies: ["Traveling", "Knitting"]
    },
    {
        name: "Frank",
        age: 20,
        hobbies: ["Gaming", "Drawing"]
    },
    {
        name: "Grace",
        age: 27,
        hobbies: ["Singing", "Dancing"]
    },
    {
        name: "Hannah",
        age: 32,
        hobbies: ["Cooking", "Yoga"]
    },
    {
        name: "Ian",
        age: 24,
        hobbies: ["Playing football", "Reading"]
    },
    {
        name: "Jessica",
        age: 29,
        hobbies: ["Writing", "Cycling" , 'swimming']
    }
];


const div = document.querySelector(`div`);

// for (let i = 0; i < users.length; i++) {
//     div.innerHTML += `
//     <h1>Names: ${users[i].name}</h1>
//     <h2>Age: ${users[i].age}</h2>
//     <ul>Hobbies:
//     <li>${users[i].hobbies}</li>
//     </ul>          
//     <hr/>           
//     `
    
// }



for (let i = 0; i < users.length; i++) {
    // console.log(users[i]);
    hobbies = ``
    for (let j = 0; j < users[i].hobbies.length; j++) {
        // console.log(users[i].hobbies);
        hobbies += `<li>${users[i].hobbies[j]}</li>`
    }

    div.innerHTML += `
    <h1>Names: ${users[i].name}</h1>
    <h1>Age: ${users[i].age}</h1>
    <h2>Hobbies:</h2>
    <ul>
    ${hobbies}
    </ul>
    <hr/>
    `
    
}