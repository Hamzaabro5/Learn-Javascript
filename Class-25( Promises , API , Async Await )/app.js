// Promises
// API
// TRY CATCH

//   fetch().then().catch()   Thats how promise will be execute











// const marks = 90
// const result =  new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         if (marks > 80) {
//             console.log(`Pass`);
//             resolve()
//         }else{
//             console.log(`Fail`);
//             reject()
//         }
//     })
// })

// result
// .then(()=>{
//     console.log(`Then Successful`);
// })
// .catch(()=>{
//     console.log(`Catch Success`);
// })










// const marks = 90
// const result =  new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         if (marks > 80) {
//             resolve(`Pass`)
//         }else{
//             reject(`Fail`)
//         }
//     })
// })

// result
// .then((res)=>{  
//     // then apne ander as a recieving response leta
//     console.log(res);
// })
// .catch((err)=>{
//     // catch apne ander as a recieving error leta
//     console.log(err);
// })





 



// const marks = 80
// const result = new Promise((resolve , reject)=>{
//     if (marks > 40) {
//         // console.log(`You Are Pass`);
//         resolve(`You Are Pass`)
//     }else{
//         // console.log(`You are failed`);
//         reject(`You are failed`)
//     }
// })

// result
// .then((res)=>{
//     // console.log(`Then Pass`);
//     console.log(res);
// })
// .catch((err)=>{
//     // console.log(`Catch Pass`);
//     console.log(err);
// })



















// fetch
// axios
// These are two method to call API



// Fetch default h
// axios default nh h to ya to npm se install karna parega ya cdn laga k kam karna parega bcz its third party libary









// fetch(`API LINK IN STRING`)
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// axios(`API LINK IN STRING`)
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

















// try {
//     aler(`Hello World`)
// } catch (err) {
//     console.log(err);
// }
// console.log(`log after alert`);

// // Try and catch code ko rokega nh agar first line pe error aya to warna bagair try and catch error ate hi code ruk jaiga



































// // TASK

// const div = document.querySelector(`div`)

// axios(`https://fakestoreapi.com/products`)
// .then((res)=>{
//     console.log(res.data);
//     res.data.map((item)=>{
//         div.innerHTML += `
//         <img src="${item.image}" width = "200" alt="">
//         <h1>Title: ${item.title}</h1>
//         <h1>Price: ${item.price}</h1>
//         <p>Description: ${item.description}</p>
//         <hr/>
//         `
//     })

// }).catch((err)=>{
//     console.log(err);
// })












