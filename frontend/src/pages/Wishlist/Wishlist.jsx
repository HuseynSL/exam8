import React, { useContext } from "react";
import { FavContext } from "../../context/FavoritesContext";
import style from "./style.module.css"
import { useNavigate } from 'react-router-dom';


function Wishlist() {
  const { favorite, setFavorite } = useContext(FavContext);
  const navigate=useNavigate()
 
  function handleDelete(id) {
    const deletedFav=favorite.filter((item)=>item._id!==id)
    setFavorite(deletedFav)
  }

  return (
    <>
    
      <div className={style.cards}>
        {favorite.map((prod) => (
          <div className={style.card} key={prod._id}>
            <img src={prod.image} alt="" />
            <h3>{prod.name}</h3>
            <p>{prod.desc}</p>
            <button onClick={() => navigate(`/detail/${prod._id}`)}>
              Learn More
            </button>
            <button onClick={() => handleDelete(prod._id)}>Delete</button>
            <button onClick={()=>localStorage.clear()}>Clear Wishlist</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
