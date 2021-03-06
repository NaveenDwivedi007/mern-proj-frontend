import React, { useState } from 'react';
import {  Redirect } from 'react-router-dom';
import Base from '../core/Base';
import {signin,authenticate,isAutheticated} from "../auth/helper"

export default function Signin(){

  const [values,setValues] = useState({
    email:"super@naveen.com",
    password:"12345",
    error:"",
    loading:false,
    didRedirect:false,
    
  })

  const {email,password,error,loading,didRedirect}=values

  const {user}=isAutheticated();
  const handleChange= name=> event => {
    setValues({...values,error:false,[name]:event.target.value})
  }

  const onSubmit=event=>{
    event.preventDefault();
    setValues({...values,error:false,loading:true})
    signin({email,password})
    .then(data=>{
      console.log(data);
      if (data.error) {
        setValues({...values,error:data.error,loading:false})
      }
      else{
        // when we use next in backend we can use callback in the place of next in front end
          authenticate(data,()=>{
            setValues({
              ...values,
              didRedirect:true
            })
          })
      }
    })
    .catch(console.log("signin request failed"))
  }

  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage=()=>{
    return(
      loading && (
        <div className="alert alert-info">
          <h2>loading...</h2>
        </div>
      )
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

  const signInform=()=>{
    return(
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form >
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
              <input onChange={handleChange("password")}  className="form-control" type="password" value={password} />
            </div>
            <button onClick={onSubmit}  className="btn btn-success btn-block my-2 form-control">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  return(
    <Base title="Sign In Page" description="A page for user to sign In" >
    {loadingMessage()}
    {errorMessage()}
    {signInform()}
    {performRedirect()}
    <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  )

}