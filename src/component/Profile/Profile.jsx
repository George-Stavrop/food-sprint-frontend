import React, { useState } from "react";
import ProfileNav from "./ProfileNav";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import Orders from "./Orders";
import Logout from "./Logout";
import { useMediaQuery } from "@mui/material";

const Profile = () => {
    const isSmallScreen = useMediaQuery("(max-width: 900px)");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:flex justify-between">

            {isSmallScreen && (
                <button
                    className="fixed w-[60px] top-37 left-0 z-50 p-2 bg-orange-500 text-white rounded-md"
                    onClick={() => setIsOpen(true)}
                >
                    ☰
                </button>
            )}


            <div className="sticky h-[10vh] lg:w-[20%]">
                <ProfileNav open={isOpen} handleClose={() => setIsOpen(false)} />
            </div>


            <div className="lg:w-[80%]">
                <Routes>
                    <Route path="/" element={<UserProfile />} />
                    <Route path="παραγγελίες" element={<Orders />} />
                    <Route path="Προφίλ" element={<UserProfile />} />
                    <Route path="έξοδος" element={<Logout />} />
                </Routes>
            </div>
        </div>
    );
};

export default Profile;
