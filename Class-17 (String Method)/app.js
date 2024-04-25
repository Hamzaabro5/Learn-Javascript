// // STRING METHOD

// // console.log(`String Method`);



// // ToLowerCase
// // ToUpperCase
// // length
// // charAt
// // indexOf
// // slice
// // Replace
// // Replaceall
// // split


// const username = `hamza abro`;
// const h1 = document.querySelector(`h1`);

// function convertUpper() {
//     h1.innerHTML = username.toUpperCase();
//     console.log(username.toUpperCase());
// }

// function convertLower() {
//     h1.innerHTML = username.toLowerCase();
//     console.log(username.toLowerCase());
// }


// function convertLower() {
//         h1.innerHTML = username.length;
//         console.log(username.length);
//     }





// TASK



const cities = [ `karachi` , `islamabad` , `lahore` , `faisalabad` , `peshawar`]
const input = document.querySelector(`.input`)
const h2 = document.querySelector(`h2`);

console.log(cities);

function checkCity() {
    if (input.value=cities.includes()) {
        input.value = ``
        h2.innerHTML = `Welcome To Pakistan City`
        console.log(`Welcome To Pakistan City`);
    }else{
        // h2.innerHTML = `This is not a country`
        console.log(`This is not a country`);
    }
}