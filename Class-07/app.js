// console.log(`Hello JS`);

// var para =document.querySelector('.para');
// para.innerHTML = `Changed Through JavaScript`
// console.log(para.innerHTML);






// var changeList = document.querySelector(`.list`);

// function changeList(){
//     console.log(list.innerHTML)
//     list.innerHTML = `<li>JavaScript</li>
//     <li>ReactJs</li>
//     <li>MongoDb</li>`
// }



// var input =document.querySelector(`.input`);

// function getValue(){
//     console.log(input.value);
//     input.value = ``
// }





var chemMarks = document.querySelector(`.Chem-mark`);
var phyMarks = document.querySelector(`.Phy-mark`);
var mathMarks = document.querySelector(`.Math-mark`);
var comMarks = document.querySelector(`.Com-mark`);


function showResult() {
    console.log(chemMarks.value);
    console.log(phyMarks.value);
    console.log(mathMarks.value);
    console.log(comMarks.value);
    
    var obtainedMarks = (+chemMarks.value + +phyMarks.value + +mathMarks.value + +comMarks.value)
    console.log(obtainedMarks);
}
