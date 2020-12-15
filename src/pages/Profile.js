import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";




function Profile(props){
 const dispatch=useDispatch();

  return (<div>
        Profile
         </div>)
}

const mapStateToProps = (state, ownProps) => {
  return { loginReducer: state.loginReducer };
};

export default connect(mapStateToProps)(Profile);
