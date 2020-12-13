import React,{useRef} from "react";
import{useDispatch} from 'react-redux'
import {loginChecker} from '../actions/loginAction'


function LoginForm(props) {

const dispatch=useDispatch()

const emailRef=useRef(null)
const passwordRef=useRef(null)


const handleLoginSubmit=(e)=>{
    e.preventDefault()
    console.log(passwordRef.current.value)
    dispatch(loginChecker(emailRef.current.value,passwordRef.current.value))
}

  return (
    <div  style={{width:'500px',border:'1px solid lightgrey',borderRadius:'7px',padding:'25px' }}>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailRef}
          />
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
