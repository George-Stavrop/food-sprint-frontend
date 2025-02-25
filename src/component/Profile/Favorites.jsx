
import React, { useEffect } from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useSelector } from "react-redux";

const Favorites = () => {
    const { auth, } = useSelector(store => store)
    console.log("favorites", auth.favorites)
    useEffect(() => {
        // dispatch()
    }, [])
    return (
        <div>
            <h1 className="py-5 text-xl font-semibold text-center">Αγαπημένα</h1>

            <div className="flex flex-wrap gap-4 justify-center">
                {auth.favorites.map((item) => (
                    <RestaurantCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Favorites;