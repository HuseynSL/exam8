import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from "./style.module.css"
import axios from 'axios'

function Details() {
    let {id}=useParams()
    let [product,setProducts]=useState({})

    useEffect(()=>{
      axios.get(`http://localhost:3001/products3/${id}`)
      .then((res)=>{
          setProducts(res.data.data)
          console.log(res.data);
      })
    },[id])
  return (
   
        
            <div className={style.services}>
                <h1>Detail</h1>
                <div className={style.cards}>                   
                        <div className={style.card} key={product._id}>
                        <img src={product.image} alt=""/>
                        <h3>{product.name}</h3>
                        <p>{product.desc}</p>
                        <button onClick={()=>navigate(`/detail/${product._id}`)}>Learn More</button>
                    </div>
                    
                </div>
            </div>
        
       
  )
}

export default Details
