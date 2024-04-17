const arr = [`water` , `mango` , `orange ` , `grapes` , `strwaaberry` , `dragon fruit` , `Pomegrante` , `Avacado`]

const ul = document.querySelector(`ul`)

for (let i = 0; i < arr.length; i++) {
    ul.innerHTML += `<li>${arr[i]}</li>`
    
}