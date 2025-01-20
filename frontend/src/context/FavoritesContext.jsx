import React, { createContext, useEffect, useState } from 'react'
export const FavContext=createContext()

function FavoritesProvider({children}) {
    const localFav=JSON.parse(localStorage.getItem("favoritess"))
    const [favorite,setFavorite]=useState(localFav ? localFav : [])



    useEffect(()=>{
        localStorage.setItem("favoritess",JSON.stringify(favorite))
    },[favorite])

    const value = {favorite,setFavorite}
  return (
    <FavContext.Provider value={value}>
        {children}
    </FavContext.Provider>
  )
}

export default FavoritesProvider
