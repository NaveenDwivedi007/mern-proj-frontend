import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import {signup} from "../auth/helper"


export default function Signup(){
  // in the array 1st is variable name and 2nd is always setvalues
  const [values,setValues] = useState({
    name:"",
    lastname:"",
    email:"",
    password:"",
    error:"",
    success:false
  })
  
  const {name,lastname,email,password,error,success} = values

  const handleChange= name=> event => {
    setValues({...values,error:false,[name]:event.target.value})
  }

const onSubmit=event =>{
  event.preventDefault()
  setValues({...values,error:false})
  signup({name,lastname,email,password})
  .then(data=>{
    if(data.error){
    setValues({...values,error:data.error,success:false})
    } else {
      setValues({
        ...values,
        name:"",
        lastname:"",
        password:"",
        email:"",
        error:"",
        success:true,
      })
    }
  } )
  .catch(console.log("error in signup"))
}



  const signUpform=()=>{
    return(
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form >
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                      <label  className="text-light"> Name </label>
                    <input 
                      onChange={handleChange("name")} 
                      className="form-control" 
                      type="text" 
                      value={name} 
                      />
                </div>
                <div className="col-6">
                      <label  className="text-light"> Last Name </label>
                    <input 
                    onChange={handleChange("lastname")} 
                    className="form-control" 
                    type="text" 
                     value={lastname} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label  className="text-light"> Email </label>
              <input 
              onChange={handleChange("email")} 
              className="form-control"
               type="email"
               value={email} />
            </div>
            <div className="form-group">
              <label  className="text-light"> Password </label>
              <input 
              onChange={handleChange("password")} 
              className="form-control" 
              type="Password"
              value={password}
                />
            </div>
            {/* we use () when we wanted to run method immediately but when we wanted to wait
              to wait for some event we dont use ()
            */}
            <button onClick={onSubmit} className="btn btn-success btn-block my-2 form-control">Submit</button>
          </form>

        </div>
      </div>
    )
  }

  const successMessage=()=>{
    return(
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
      <div className="alert alert-success" style={{display:success?"":"none"}} >
        New Account was created successfully. Please <Link to="/signin" >login here</Link>
      </div>
      </div>
      </div>
    )
  }
  const errorMessage=()=>{
    return(
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
      <div className="alert alert-danger" style={{display:error?"":"none"}} >
        {error}
      </div>
      </div>
      </div>
    )
  }

  return(
    <Base title="Sign Up Page" description="A page for user to sign up" >
    {successMessage()}
    {errorMessage()}
    {signUpform()}
    {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  )
}
