// console.log(`Hello `);

// let condition = false || 10 != `10` || 10 !==`10` ;
// console.log(condition);












// Class Assignment

const fruits = [`Apple` , `Mango` , `Orange`]
const input = document.querySelector(`.input`);
const h2 = document.querySelector(`h2`);


function getfruit(){
    console.log(input.value);
    if(fruits.includes(input.value)){
        console.log(`Availible`)
        h2.innerHTML = `${input.value} is availible`
    }else{
        console.log(`Not Availible`)
        h2.innerHTML = `${input.value} is not availible`
    }
    input.value = ``
}
