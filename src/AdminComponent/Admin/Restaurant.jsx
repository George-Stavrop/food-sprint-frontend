import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRestaurantStatus } from "../../component/State/Restaurant/Action";


const Restaurant = () => {

    const { restaurant } = useSelector((store => store));
    const dispatch = useDispatch();
    console.log("details", restaurant)

    const handleRestaurantStatus = () => {

        const jwt = localStorage.getItem("jwt");

        dispatch(updateRestaurantStatus(
            {
                restaurantId: restaurant.usersRestaurant.id,
                jwt,
            }
        ))
    }

    return (
        <div className="lg:px-20 px-5">
            <div className="py-5 flex justify-center items-center gap-5">
                <h1 className="text-2xl lg:text-6xl text-center font-bold p-5">
                    {restaurant.usersRestaurant?.name}
                </h1>
                <div>
                    <Button
                        className="py-[1rem] px-[2rem]"
                        color={!restaurant.usersRestaurant?.open ? "primary" : "error"}
                        variant="contained"
                        onClick={handleRestaurantStatus}
                        size="large"
                    >
                        {restaurant.usersRestaurant?.open ? "Κλεισιμο" : "ανοιγμα"}
                    </Button>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title={<span className="">Εστιατόριο</span>} />
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex">
                                    <p className="w-48">Όνομα Εστιατορίου</p>
                                    <p className="">
                                        <span className="pr-5">-</span>
                                        {restaurant.usersRestaurant?.name}                                    </p>

                                </div>
                                <div className="flex">
                                    <p className="w-48">Ιδιοκτήτης</p>
                                    <p className="">
                                        <span className="pr-5">-</span>
                                        {restaurant.usersRestaurant?.owner.fullname}
                                    </p>

                                </div>


                                <div className="flex">
                                    <p className="w-48">Πόλη</p>
                                    <p className="">
                                        <span className="pr-5">-</span>
                                        Βόλος                                    </p>

                                </div>
                                <div className="flex">
                                    <p className="w-48">Κουζίνα</p>
                                    <p className="">
                                        <span className="pr-5">-</span>
                                        {restaurant.usersRestaurant?.cuisineType}
                                    </p>

                                </div>
                                <div className="flex">
                                    <p className="w-48">Email</p>
                                    <p className="">
                                        <span className="pr-5">-</span>
                                        {restaurant.usersRestaurant?.contactInformation.email}                                   </p>

                                </div>
                                <div className="flex">
                                    <p className="w-48">Τηλέφωνο</p>
                                    <p className="">
                                        <span className="pr-5">-</span>
                                        {restaurant.usersRestaurant?.contactInformation.mobile}                                   </p>

                                </div>
                                <div className="flex">
                                    <p className="w-48">Κατάσταση</p>
                                    <p className="">
                                        <span className="pr-5">-</span>
                                        {restaurant.usersRestaurant?.open ?
                                            <span className="px-5 py-2 rounded-full bg-orange-400 ">
                                                Ανοιχτό
                                            </span> : <span className="px-5 py-2 rounded-full bg-black text-orange-500">
                                                Κλειστό
                                            </span>}
                                    </p>

                                </div>


                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}


export default Restaurant;