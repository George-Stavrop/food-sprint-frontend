import React from "react";
import burger from "../Restaurant/restaurantAssets/cheeseburger.avif"
import { Chip, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem, updateCartItem } from "../State/Cart/Action";

const CartItem = ({ item }) => {

    const { auth, cart } = useSelector(store => store);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const handleUpdateCartItem = (value) => {
        if (value == -1 && item.quantity === 1) {
            handleRemoveCartItem();
        } else {
            const data = { cartItemId: item.id, quantity: item.quantity + value }
            dispatch(updateCartItem({ data, jwt }));
        }
    }

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem({ cartItemId: item.id, jwt }))
    }
    return (
        <div className="px-5">
            <div className="lg:flex items-center lg:space-y-5">
                <div>
                    <img className="w-[5rem] h-[5rem] object-cover rounded-lg" src={item.food.images[0]} alt="burger" />
                </div>
                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p className="pl-3">{item.food.name}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                                    <RemoveCircleOutlineIcon color="primary" />
                                </IconButton>
                                <div className="w-5 h-5 text-xs flex items-center justify-center">
                                    {item.quantity}
                                </div>
                                <IconButton onClick={() => handleUpdateCartItem(1)}>
                                    <AddCircleOutlineIcon color="primary" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>{item.totalPrice}&euro;</p>
                </div>
            </div>
            <div className="pt-3 space-x-3">
                {item.ingredients.map((ingredientItem, index, array) => <span>{ingredientItem} {index < array.length - 1 && ','}</span>)}
            </div>
        </div >
    )
}


export default CartItem;