import { Card, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from "@mui/material/Chip";
import urbanBurger from "./restaurantAssets/urbanBurger.jpeg"

const RestaurantCard = () => {
    
    
    return (
        <Card className=" w-[18rem]">
            <div className={`${true?"cursor-pointer": "cursor-not-allowed"} relative`}>
                <img className="w-full h-[10rem] rounded-t-md object-cover"
                src={urbanBurger} alt="" 
                />
                <Chip 
                size="small" 
                className="absolute top-2 left-2"
                color={true?"success":"error"}
                label={true?"Ανοιχτό":"Κλειστό"}
                />
            </div>
            <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p className="font semibold text-lg">
                        Urban Burger Co.
                    </p>
                    <p className="text-sm">
                        Ποιοτικά burger με τον πιο νόστιμο κιμά!
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}

export default RestaurantCard;