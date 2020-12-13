import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'
import CartProduct from '../components/CartProduct'
import Product from '../components/Product'

function Cart(props) {
    
    
    const cartArr=props.cartReducer.cartProducts


    return (
        <div>
            {
           cartArr.length!=0? cartArr.map((item,index)=><CartProduct data={item.product} quantity={item.quantity} key={index} index={index} />) : 'loading'
            }
        </div>
    )
}


const mapPropsToState=(state,ownProps)=>{

    return {
        cartReducer:state.cartReducer
    }

}

export default connect(mapPropsToState)(Cart)