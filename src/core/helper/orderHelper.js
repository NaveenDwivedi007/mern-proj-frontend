import { API } from "../../backend";

export const createOrder = (userId,token,orderData)=>{
  return fetch(`${API}/order/create/${userId}`,{
    method:"POST",
    headers:{
      Accept:"applicaton/json",
      "content-Type":"applicaton/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({order:orderData})

  })
  .then(res=>{
    return res.json()
  })
  .catch(err=>{
    return console.log(err);
  })
}