import React, { useState } from "react";
import ProfileNav from "./ProfileNav";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import Address from "./Address";
import Orders from "./Orders";
import Favorites from "./Favorites";
import Payment from "./Payment"
import Logout from "./Logout"


const Profile = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div className="lg:flex justify-between">
            <div className="sticky h-[80vh] lg:w-[20%]">
                <ProfileNav open={openSidebar} />
            </div>
            <div className="lg:w-[80%]">
                <Routes>
                    <Route path="/" element={<UserProfile />} />
                    <Route path="παραγγελίες" element={<Orders />} />
                    <Route path="διευθύνσεις" element={<Address />} />
                    <Route path="αγαπημένα" element={<Favorites />} />
                    <Route path="έξοδος" element={<Logout />} />
                    <Route path="πληρωμή" element={<Payment />} />
                </Routes>
            </div>
        </div>
    )
}


export default Profile;