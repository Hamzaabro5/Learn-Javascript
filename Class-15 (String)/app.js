// console.log(`String Method`);



// ToLowerCase
// ToUpperCase
// length
// charAt
// indexOf
// slice
// Replace
// Replaceall
// split


const username = `hamza abro`;
const h1 = document.querySelector(`h1`);

function convertUpper() {
    h1.innerHTML = username.toUpperCase();
    console.log(username.toUpperCase());
}

function convertLower() {
    h1.innerHTML = username.toLowerCase();
    console.log(username.toLowerCase());
}
