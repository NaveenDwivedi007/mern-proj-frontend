import {API} from '../../backend';
// API in .env

export const signup = user =>{
  return fetch(`${API}/signup`,{
    //method is what kind of req we are making
    method:"POST",
    // header is what kind of data we are accepting 
    headers:{
      Accept:"application/json",
      "Content-type":"application/json",
    },
    // from where data is coming
    body:JSON.stringify(user)
  })
  .then(response => {return response.json()})
  .catch(err=>{return console.log(err);} )
}

export const signin = user =>{
  return fetch(`${API}/signin`,{
    //method is what kind of req we are making
    method:"POST",
    // header is what kind of data we are accepting 
    headers:{
      Accept:"application/json",
      "Content-type":"application/json",
    },
    // from where data is coming
    body:JSON.stringify(user)
  })
  .then(response => {return response.json()})
  .catch(err=>{return console.log(err);} )
}

export const authenticate = (data,next)=>{
  if(typeof window !== "undefined"){
    localStorage.setItem("jwt",JSON.stringify(data))
    next();
  }
}


export const signout = next =>{
  if(typeof window !== "undefined"){
    // jwt mean json web token
    localStorage.removeItem("jwt")
    next();

    return fetch(`${API}/signout`,{
      method:"GET"
    })
    .then(res=> { return console.log("sign out success")})
    .catch(err=>{return console.log(err);})
  }
}

export const isAutheticated = ()=>{
  if(typeof window == "undefined"){
    return false
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"))
  }
  else{
    return false
  }
}