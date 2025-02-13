import { Button, Card } from "@mui/material";
import React from "react";
import burger from "../Restaurant/restaurantAssets/cheeseburger.avif"

const OrderCard = ({ item, order }) => {
    return (
        <Card className="flex justify-between items-center p-5">
            <div className="flex items-center space-x-5">
                <img
                    className="w-16 h-16 rounded-lg"
                    src={item.food.images[0]}
                    alt="burger"
                />
                <div>
                    <p>{item.food.name}</p>
                    <p>{item.totalPrice}&euro;</p>
                </div>
            </div>
            <div>
                <Button className="cursor-not-allowed">{order.orderStatus}</Button>
            </div>
        </Card>
    )
}

export default OrderCard;