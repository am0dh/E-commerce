export const placeOrder=(cartArr,userEmail)=> async(dispatch)=>{
    
const orderItem={
    cartArr,
    totalPrice: cartArr.reduce(
        (total, item) => parseInt(total) + parseInt(item.price),
        [0]
      ),
}

    const reqOptions={
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(orderItem)
      }


    const placeOrder=await fetch(`http://localhost:3000/${userEmail}.orders`,reqOptions)

    const response= await placeOrder
    if(response.ok){
        alert("Order Placed")
        dispatch({
            type:'EMPTY_CART'
        })
    }
    else(alert(response.status,'',response.statusText))



 


}