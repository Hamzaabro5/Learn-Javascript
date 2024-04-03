const input = document.querySelector(`.input-value`)
const div = document.querySelector(`#todos`)

const arr = []

function addTodo() {
    div.innerHTML = ``
    arr.push(input.value)
    console.log(arr);
    input.value = ``
    
    for (let i = 0; i < arr.length; i++) {
        div.innerHTML += `
        <div><h1>${arr[i]}</h1></div>
        <div>
        <button onclick = "deleteTodo(${i})" >Dlete</button>
        <button onclick = "editTodo(${i})" >Edit</button>
        </div>`
        
        
    }
}

function deleteTodo(index) {
    // console.log(`Delete` , index);
    console.log(arr.splice(index));
}

function editTodo(index) {
    console.log(`Edit` , index);
}