import React, { useEffect, useState } from "react";
import restaurantImage from "./restaurantAssets/urbanBackground.jpeg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import urbanLogo from './restaurantAssets/urbanLogo.png'
import smokersLogo from './restaurantAssets/smokersLogo.png'
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById, getRestaurantsCategory } from "../State/Restaurant/Action";
import { getMenuItemByRestaurantId } from "../State/Menu/Action";



const RestaurantDetails = () => {

    const { id, city } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth, restaurant, menu } = useSelector(store => store);
    const [selectedCategory, setSelectedCategory] = useState("");


    const handleFilterCategory = (e, value) => {
        setSelectedCategory(value);
        console.log(e.target.value, e.target.name, value)
    }

    console.log("restaurant", restaurant)

    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantsCategory({ jwt, restaurantId: id }));

    }, [])

    useEffect(() => {
        dispatch(getMenuItemByRestaurantId({ jwt, restaurantId: id, foodCategory: selectedCategory }))
    }, [selectedCategory])

    return (
        <div className="">
            <section className="px-5 lg:px-20">
                <div className=" h-25 sm:h-40  lg:h-80">
                    <img
                        src={restaurant.restaurant?.images[0]}

                        className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl shadow-lg"
                    />
                </div>

                <div className="pt-3 pb-5  border-2 shadow-lg border-t-0 border-l-0"
                    style={{
                        borderColor: "rgba(100, 100, 100, 0.8)",
                        background: "linear-gradient(135deg, rgba(255, 99, 71, 0.1), rgba(0, 0, 0, 0.1))",
                    }}>
                    <div className="flex items-center gap-3">
                        <img
                            src={restaurant.restaurant?.images[1]}
                            alt="logo"
                            className="w-12 h-12 object-contain rounded-full"
                        />
                        <h1 className="text-3xl  font-semibold"
                            style={{
                                fontFamily: "'Poppins, sans-serif",
                            }}>
                            {restaurant.restaurant?.name}
                        </h1>
                    </div>
                    <p className="text-gray-500 flex items-center gap-3">
                        <DeliveryDiningIcon />
                        <span>
                            Delivery: 20' - 30'
                        </span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-3">
                        <CalendarTodayIcon />
                        <span>
                            Δευτ-Παρ 9:00 ΠM - 12:00 ΜΜ
                        </span>
                    </p>

                </div>


            </section>

            <section className="pt-[7rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter ">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div className="pl-[4.5rem]">
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Κατηγορίες
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilterCategory} name="food_category" value={selectedCategory}>
                                    {restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item.name}
                                            control={<Radio />}
                                            label={item.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 lg:w-[80%] pr-[4.5rem] lg:pl-10">
                    {menu.menuItems.map((item) => <MenuCard item={item} />)}
                </div>

            </section>



        </div>
    );
};

export default RestaurantDetails;

