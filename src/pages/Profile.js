import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";


import LoginForm from "../components/LoginForm";
import {fetchUserOrders} from '../actions/loginAction'



function Profile(props){
 const dispatch=useDispatch();

    useEffect(()=>
    {
    if(props.loginReducer.isLoggedIn===true){
    dispatch(fetchUserOrders(props.loginReducer.userDetails))
    }
}

,[props.loginReducer.isLoggedIn])
 
  
  return (<div>
         {props.loginReducer.isLoggedIn ? 
         <div>
             
         loggedin
         </div>
         :
         <LoginForm /> }
         </div>)
}

const mapStateToProps = (state, ownProps) => {
  return { loginReducer: state.loginReducer };
};

export default connect(mapStateToProps)(Profile);
