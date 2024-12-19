import React from "react";
import { Navbar } from "../component/Navbar/Navbar";
import Home from "../component/Home/Home";
import RestaurantDetails from "../component/Restaurant/RestaurantDetails";
import Cart from "../component/Cart/Cart";
import Profile from "../component/Profile/Profile";
import { Route, Routes } from "react-router-dom";

const CustomerRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/account/:register" element={<Home />} />
                <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/my-profile/*" element={<Profile />} />
                <Route path="/" element={<Home />} /> {/* Default Route */}
            </Routes>
        </div>
    );
};

export default CustomerRouter;
