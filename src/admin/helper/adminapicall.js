import { API } from "../../backend";

// category route
export const createCategory=(userId,token,category)=>{
  return fetch(`${API}/category/create/${userId}`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-type":"application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(category)
  })
  .then(res=>{
    return res.json()
  })
  .catch(err=> {return console.log(err)})
}

export const getCategories=()=>{
  return fetch(`${API}/categories`,{
    method:"GET"
  })
  .then(res=>{
    return res.json()
  })
  .catch(err=>{console.log(err)})
}








// product calls
export const createaProduct=(userId,token,product)=>{
  return fetch(`${API}/product/create/${userId}`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      Authorization:`Bearer ${token}`
    },
    body:product
  })
  .then((res)=>{
    return res.json()
  })
  .catch(err=>{return console.log(err);})
}

// get all product
export const getAllProducts=()=>{
  return fetch(`${API}/products`,{
    method:"GET"
  })
  .then(res=>{
    return res.json()
  })
  .catch(err=>{console.log(err)})
}

// delete a product
export const deleteProduct=(productId,userId,token)=>{
  return fetch(`${API}/product/${productId}/${userId}`,{
    method:"DELETE",
    headers:{
      Accept:"application/json",
      Authorization:`Bearer ${token}`
    }
  })
  .then((res)=>{
    return res.json()
  })
  .catch(err=>{return console.log(err);})
}


// get a product
export const getProduct=(productId)=>{
  return fetch(`${API}/product/${productId}`,{
    method:"GET"
  })
  .then(res=>{
    return res.json()
  })
  .catch(err=>{console.log(err)})
}

// update product

export const updateProduct=(productId,userId,token,product)=>{
  return fetch(`${API}/product/${productId}/${userId}`,{
    method:"PUT",
    headers:{
      Accept:"application/json",
      Authorization:`Bearer ${token}`
    },
    body:product
  })
  .then((res)=>{
    return res.json()
  })
  .catch(err=>{return console.log(err);})
}
