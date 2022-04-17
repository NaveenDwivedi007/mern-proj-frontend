import React from 'react';
import { API } from '../../backend';


const ImageHelper = ({product})=>{
const imageUrl = product ? 
`${API}/product/photo/${product._id}`
: 
"https://images.unsplash.com/photo-1591904571049-16d4e0119d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  return (
    <div className="rounded border border-success p-2">
          <img
            src={imageUrl}
            alt="photo"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 rounded"
          />
        </div>
  )


}




export default ImageHelper