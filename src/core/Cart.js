import React, { useEffect, useState } from 'react';
import Base from './Base';
import "../styles.css"
import Card from './card';

import { loadCart } from './helper/cartHelper';



export default function Cart(){
    const [products,setProducts]=useState([])
    const [reload,setReload]=useState(false)

    const preLoad = ()=>{
      return setProducts(loadCart())
    }


useEffect(()=>{
  preLoad()
},[reload])


  const loadAllProduct = ()=>{
    return(
      <div>
        {products.map((products,index)=>{
         return(
           <div className="my-3" key={index}>
          <Card
          product={products}
          addtoCard={false}
          removefromCart={true}
          setReload={setReload}
          reload={reload}
          />
          </div>
         )
        })}
      </div>
    )
  }

  const LoadCheckout = ()=>{
    return(
      <div>
        <h1>for Check Out</h1>
      </div>
    )
  }
  
  return(
    <Base title="Cart Page"  description="" >
      <div className="row text-center">
       <div className="col-6">{loadAllProduct()}</div>
       <div className="col-6">{LoadCheckout()}</div>
      </div>
    </Base>
  )
}