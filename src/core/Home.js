import React, { useEffect, useState } from 'react';
import { API } from '../backend';
import Base from './Base';
import "../styles.css"
import Card from './card';
import { getProducts } from './helper/coreapicalls';



export default function Home(){
  
  const [products, setProducts] = useState([])
  const [error, seterror] = useState(false)
  
  const loadAllproduct = ()=>{
    getProducts()
    .then(data=>{
      if (data.error) {
        return seterror(data.error)
      }else{
        setProducts(data)
      }
    })
  }
  useEffect(()=>{
    loadAllproduct()
  },[])

  return(
    <Base title="Home Page">
      <div className="row text-center">
        <h1 className="text-white">All of tshirt</h1>
        <div className="row">
          {products.map((product,index)=>{
            return(
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            )
          })}
        </div>
      </div>
    </Base>
  )
}