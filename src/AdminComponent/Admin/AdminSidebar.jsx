import { Dashboard, ShoppingBag, ShopTwo } from "@mui/icons-material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useState } from "react";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../component/State/Authentication/Action";

const menu = [
    { title: "Εστιατόριο", icon: <Dashboard />, path: "/" },
    { title: "Παραγγελίες", icon: <FastfoodIcon />, path: "/παραγγελίες" },
    { title: "Μενού", icon: <ShopTwo />, path: "/μενού" },
];

export const AdminSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigate = (item) => {
        navigate(`/admin/restaurant${item.path}`);
        if (isSmallScreen) setIsOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
        if (isSmallScreen) setIsOpen(false);
    };

    return (
        <>
            {isSmallScreen && (
                <button
                    className="fixed top-5 left-5 z-50 p-2 bg-orange-500 text-white rounded-md"
                    onClick={() => setIsOpen(true)}
                >
                    ☰ Μενού
                </button>
            )}

            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                onClose={() => setIsOpen(false)}
                open={isSmallScreen ? isOpen : true}
                anchor='left'
                sx={{ zIndex: 1 }}
            >
                <div className="w-[70vw] lg:w-[20vw] my-10 h-screen flex flex-col text-xl space-y-4">
                    {/* Menu Items */}
                    <div className="flex-grow">
                        {menu.map((item) => (
                            <React.Fragment key={item.title}>
                                <div
                                    onClick={() => handleNavigate(item)}
                                    className="px-5 my-10 flex items-center gap-5 cursor-pointer hover:text-[#f58142]"
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </div>
                                <Divider sx={{ height: "2px" }} />
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Logout Button */}
                    <div
                        className="px-5 flex items-center gap-5 cursor-pointer mt-auto hover:bg-red-500 hover:text-white p-3 rounded-lg transition-all duration-200"
                        onClick={handleLogout}
                    >
                        <LogoutIcon />
                        <span>Έξοδος</span>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default AdminSidebar;
