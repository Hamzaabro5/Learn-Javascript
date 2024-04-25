console.log(`Hello World`);

const h1 = document.querySelector(`h1`)

// function
// Method



// round
// ceil
// floor
// random
// parseInt
// parseFloat


// const num = `291`;
// console.log(num);
// console.log(Math.round(num));
// h1.innerHTML = Math.random()*10;
// h1.innerHTML =  Math.ceil(Math.random()*10);
// h1.innerHTML =  Math.floor(num);
// h1.innerHTML = parseInt(num);
// h1.innerHTML = typeof parseInt(num)




//TASK

// const random = Math.floor(Math.random() * 2); 

// function toss(user) {

//     if (random === 0) {
//         console.log(`Head `);
//     }else{
        
//         console.log(`Tail`);
//     }
//     if(user === 'head' && random === 0 || user === 'tail' && random === 1 ){
//         h1.innerHTML = 'toss jeet gaye ho';


//     }else{
//         h1.innerHTML = 'toss haar gayaa';
//     }
// }



const num = 1   ;
const random = (Math.round(Math.random(num)*2));

function toss(clickBtn){
    console.log("TOSS" , clickBtn);
    console.log(random);
    if(random === 1){
        h1.innerHTML  = "head <br />"
    }else  if(random === 2){
        h1.innerHTML = "tail <br />"
    }
}