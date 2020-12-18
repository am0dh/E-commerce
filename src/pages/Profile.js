import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import LoginPage from "../LoginRegis/LoginPage";




function Profile(props){
 const dispatch=useDispatch();
const basicMargin={margin:"10px"}

  return (<div>
{props.loggedIn?
<>
<h4 style={basicMargin}>Logged In as {props.email}</h4>
<h5 style={basicMargin}>Your Orders</h5>
</>


:

<LoginPage />}

         </div>)
}


const mapStateToProps=(state,ownProps)=>{
  return {
    loggedIn:state.loginReducer.loggedIn,
    email:state.loginReducer.email
          }
}
export default connect(mapStateToProps)(Profile);
