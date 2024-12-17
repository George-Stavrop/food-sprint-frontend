import React from "react";
import burger from "../Restaurant/restaurantAssets/cheeseburger.avif"
import { Chip, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className="px-5">
            <div className="lg:flex items-center lg:space-y-5">
                <div>
                    <img className="w-[5rem] h-[5rem] object-cover rounded-lg" src={burger} alt="burger" />
                </div>
                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p className="pl-3">Burger</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                                <IconButton>
                                    <RemoveCircleOutlineIcon color="primary"/>
                                </IconButton>
                                <div className="w-5 h-5 text-xs flex items-center justify-center">
                                    {5}
                                </div>
                                <IconButton>
                                    <AddCircleOutlineIcon color="primary"/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>5,95&euro;</p>
                </div>
            </div>
            <div className="pt-3 space-x-3">
                {[1,1,1,1,1].map((item, index, array)=><span>{item} {index < array.length - 1 && ','}</span>)}
            </div>
        </div>
    )
}


export default CartItem;