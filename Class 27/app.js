
const div = document.querySelector(`div`);


axios(`https://api.escuelajs.co/api/v1/users`)
.then((res)=>{
    console.log(res.data);
     res.data.map((item)=>{
        div.innerHTML += `
        <h1>Name: ${item.name}</h1>
        <h2>Email: ${item.email}</h2>
        <h3>Password: ${item.password}</h3>
        <img src="${item.avatar}" width="200px" alt="">
        `
        })
})
.catch((error)=>{
    console.log(error);
})