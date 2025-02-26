import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu = [
    { title: "Προφίλ", icon: <AccountBoxIcon /> },
    { title: "Παραγγελίες", icon: <ShoppingBagIcon /> },
    { title: "Έξοδος", icon: <LogoutIcon /> }
];

const ProfileNav = ({ open, handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width: 900px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = (item) => {
        if (item.title === "Έξοδος") {
            dispatch(logout());
            navigate("/");
        } else {
            navigate(`/my-profile/${item.title.toLowerCase()}`);
        }
        if (isSmallScreen) handleClose(); // Close drawer on small screens
    };

    return (
        <Drawer
            variant={isSmallScreen ? "temporary" : "permanent"}
            onClose={handleClose}
            open={isSmallScreen ? open : true}
            anchor="left"
            sx={{ zIndex: 1 }}
        >
            <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col text-xl gap-8 pt-[12rem]">
                {menu.map((item, index) => (
                    <React.Fragment key={item.title}>
                        <div
                            onClick={() => handleNavigate(item)}
                            className={`px-5 flex items-center space-x-5 cursor-pointer transition-all duration-200 
                                ${item.title === "Έξοδος"
                                    ? "hover:bg-red-500 hover:text-white p-3 rounded-lg"
                                    : "hover:text-[#f58142]"}`}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {index !== menu.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </div>
        </Drawer>
    );
};

export default ProfileNav;
