import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsersOrder } from "../State/Order/Action";

const Orders = () => {
    const { auth, cart, order } = useSelector((store => store));
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersOrder(jwt))
    }, [auth.jwt])
    return (
        <div className="flex items-center flex-col">
            <h1 className="text-xl py-7 font-semibold">Οι Παραγγελίες μου</h1>
            <div className="space-y-5 w-[50%] lg:w-1/2">
                {order.orders.length > 0 ? (
                    order.orders.map((order) =>
                        order.items.map((item) => <OrderCard key={item.id} order={order} item={item} />)
                    )
                ) : (
                    <p className="text-gray-500 text-center">Δεν υπάρχουν ακόμα παραγγελίες</p>
                )}
            </div>
        </div>
    );


}

export default Orders;