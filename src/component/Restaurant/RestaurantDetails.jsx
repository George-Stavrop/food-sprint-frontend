import React from "react";
import restaurantImage from "./restaurantAssets/urbanBackground.jpeg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import urbanLogo from './restaurantAssets/urbanLogo.png'
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";


const categories = [
    "pizza",
    "burger",
    "crepe",
    "giros",
    "pasta"
]

const RestaurantDetails = () => {
    const restaurant = {
        image: restaurantImage,
        name: "Urban Burger Co.",
        description: "A place where taste meets the best quality food.",
        address: "123 Foodie Street, Tasteville",
        openingHours: "Open: 9 AM - 10 PM",
    };

    return (
        <div className="">
            <section className="px-5 lg:px-20">
                <div className=" h-25 sm:h-40  lg:h-80    ">
                    <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl shadow-lg"
                />
                </div>
            
                <div className="pt-3 pb-5  border-2 shadow-lg border-t-0 border-l-0" 
                    style={{
                        borderColor: "rgba(100, 100, 100, 0.8)", // Tomato color to match the gradient
                        background: "linear-gradient(135deg, rgba(255, 99, 71, 0.1), rgba(0, 0, 0, 0.1))",
                    }}>
                    <div className="flex items-center gap-3">
                        <img 
                            src={urbanLogo}
                            alt="logo"
                            className="w-12 h-12 object-contain rounded-full"
                            />
                        <h1 className="text-3xl  font-semibold"
                        style={{
                            fontFamily: "'Poppins, sans-serif",
                        }}>
                            {restaurant.name}
                        </h1>
                    </div>
                    <p className="text-gray-500 flex items-center gap-3">
                        <DeliveryDiningIcon/>
                        <span>
                            Delivery: 20' - 30'
                        </span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-3">
                        <CalendarTodayIcon/>
                        <span>
                            Δευτ-Παρ 9:00 ΠM - 12:00 ΜΜ   
                        </span>
                    </p>
                    
                </div>


            </section>
            
            <section className="pt-[2rem] lg:flex relative">

            <div className="space-y-10 lg:w-[20%] filter">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                                Κατηγορίες
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup>
                                    {categories.map((item) => <FormControlLabel value={item} control={<Radio/>}
                                    label={item} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
            </div>

            <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    menu        
            </div>

            </section>
                
                
            
        </div>
    );
};

export default RestaurantDetails;

