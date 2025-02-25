import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useEffect } from "react";
import OrderTable from "./OrderTable";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantOrder } from "../../component/State/RestaurantOrder/Action";
import { useSearchParams } from "react-router-dom";

const orderStatus = [
    { label: "Ετοιμάζεται", value: "Ετοιμάζεται" },
    { label: "Ολοκληρώθηκε", value: "Ολοκληρώθηκε" },
    { label: "Σε διανομή", value: "Σε_διανομή" },
    { label: "Έφτασε", value: "Έφτασε" },
    { label: "Όλα", value: "όλα" }
];

const Orders = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, auth } = useSelector((store) => store);

    const decodedQueryString = decodeURIComponent(location.search);
    const searchParams = new URLSearchParams(decodedQueryString);
    const filterValue = searchParams.get("order_status");

    useEffect(() => {
        dispatch(
            fetchRestaurantOrder({
                restaurantId: restaurant.usersRestaurant?.id,
                orderStatus: filterValue,
                jwt: auth.jwt || jwt,
            })
        );
    }, [auth.jwt, filterValue, restaurant.usersRestaurant?.id]);




    return (
        <div className="px-2">


            <OrderTable name={"Όλες οι Παραγγελίες"} />
        </div>
    );
};

export default Orders;
