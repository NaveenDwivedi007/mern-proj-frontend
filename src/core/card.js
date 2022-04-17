import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';
import ImageHelper from './helper/ImageHelper';



const Card = ({
  product,
  addtoCard=true,
  removefromCart=false,
  setReload= f =>f,
  reload= undefined
  
}) => {

  const [redirect,setRedirect]= useState(false)
  const [count,setCount]= useState(product.count)



  const CardTitle = product? product.name: " A photo from pexels" 
  const CardDescrption = product? product.description: " Default Description" 
  const CardPrice = product? product.price: "default" 

  const addToCart = () =>{
    addItemToCart(product,()=>{
      setRedirect(true)
    })
  }


  const getARedirect = (redirect)=>{
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }




  const showAddtoCart=(addtoCard)=>{
    return(
      addtoCard &&
      (<button
              onClick={addToCart}
              className="btn btn-block btn-outline-success mt-2 mb-2"
              style={{width:"100%"}}
            >
              Add to Cart
            </button>)
    )
  }
  
  const showRemovefromCart=(removefromCart)=>{
    return(
      removefromCart &&
      (<button
        onClick={() => {
          removeItemFromCart(product._id)
          setReload(!reload)
        }}
        className="btn btn-block btn-outline-danger mt-2 mb-2"
        style={{width:"100%"}}
      >
        Remove from cart
      </button>)
    )
  }


  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{CardTitle}</div>
      
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product}/>
        <p className="lead bg-success font-weight-normal text-wrap">
          {CardDescrption}
        </p>
       
        <p className="btn btn-success rounded  btn-sm px-4">${CardPrice}</p>
        
        <div className="row " >
          <div className="col-12">
            {showAddtoCart(addtoCard)}
          </div>
          <div className="col-12">
            {showRemovefromCart(removefromCart)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card