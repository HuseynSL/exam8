import React, { useContext, useEffect, useState } from 'react'
import style from "./style.module.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { FavContext } from '../../context/FavoritesContext';

function Services() {
    const navigate=useNavigate()
    const [serv,setServ]=useState([])
    const [tempData,setTempData]=useState([])
    const [query,setQuery]=useState("")
    const {favorite,setFavorite}=useContext(FavContext)

    function getData() {
        axios.get("http://localhost:3001/products3")
        .then((res)=>{
            setServ(res.data)
            setTempData(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    function handleSearch(e) {
        const value=e.target.value
        setQuery(value)
        setServ([...tempData].filter(item=>item.name.toLowerCase().includes(value.toLowerCase())))
    }

    function handleSort(e) {
        const value = e.target.value
        if (value == "default") {
            setServ([...tempData])
        }else{
            setServ([...serv].toSorted((a,b)=>a.name.localeCompare(b.name)))
        }
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3001/products3/${id}`)
    }

    function handleFav(item) {
        let findedFav=favorite.find(prod=>prod._id==item._id)
        if (findedFav) {
            alert("Movcuddur")
        }else{
            setFavorite([...favorite,item])
            alert("Elave olundu")
        }
    }

  return (
    <>
    
        <div className={style.services}>
            <h1>Our Services</h1>
            <select onChange={(e)=>handleSort(e)}>
                <option value="default">Default</option>
                <option value="name">Sort by Name</option>
            </select>
            <input type="search" value={query} placeholder='Search...' onChange={(e)=>handleSearch(e)} />
            <div className={style.cards}>
                {serv.map((prod)=>(
                    <div className={style.card} key={prod._id}>
                    <img src={prod.image} alt=""/>
                    <h3>{prod.name}</h3>
                    <p>{prod.desc}</p>
                    <div className="butt flex gap-5">
                    <button onClick={()=>navigate(`/detail/${prod._id}`)}>Learn More</button>
                    <button onClick={()=>handleDelete(prod._id)}>Delete</button>
                    <button onClick={()=>handleFav(prod)}>Add Fav</button>  
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    
    </>
  )
}

export default Services
