async function createOrder(product,price){

await fetch("/api/orders",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

product:product,
price:price,
user:"player"

})

})

}
