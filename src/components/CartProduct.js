import React from "react";
import {useDispatch} from "react-redux";
import {deleteProdCart} from '../actions/cartAction'


function CartProduct(props) {
  const quantityButtons={fontSize:"25px",fontWeight:"bold"}
  const dispatch=useDispatch()
  const handleRemoveProdCart=(index)=>{
      
      dispatch(deleteProdCart(index))
  }
  
    return (
    <div className="card " style={{margin:"4px 10px",display:"inline-block", width:"320px"}}>
      <div className="card-body" >
        <h4 className="card-title">{props.data.title}</h4>
  <p className="card-text"><span style={quantityButtons}>-</span>   {props.quantity} <span style={quantityButtons}>+</span> <br/>
  Price: {props.data.price} </p>
        
      </div>
      <div className="card-body"  >
          
          <button className="btn btn-secondary btn-sm" onClick={()=>handleRemoveProdCart(props.index)} >Remove from Cart</button>
      </div>
    </div>
  );
}

export default CartProduct;
