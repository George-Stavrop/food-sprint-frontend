import React from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu = [
    { title: "Παραγγελίες", icon: < ShoppingBagIcon /> },
    { title: "Αγαπημένα", icon: < FavoriteIcon /> },
    { title: "Διευθύνσεις", icon: < HomeIcon /> },
    { title: "Πληρωμή", icon: < AccountBalanceWalletIcon /> },
    { title: "Έξοδος", icon: <LogoutIcon /> }
]
const ProfileNav = ({ open, handleClose }) => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = (item) => {
        if (item.title === "Έξοδος") {
            dispatch(logout());
            navigate("/");
        }
        else {
            navigate(`/my-profile/${item.title.toLowerCase()}`)
        }
    }

    return (
        <div>
            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                onClose={handleClose}
                open={isSmallScreen ? open : true}
                anchor="left"
                sx={{ zIndex: 1 }}
            >
                <div className="w-[50vw] lg:w-[20vw] h-[100vh]
                    flex flex-col text-xl gap-8 pt-[12rem]"
                >
                    {menu.map((item, last) => <>
                        <div onClick={() => handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer ">
                            {item.icon}
                            <span>{item.title}</span>
                        </div >
                        {last !== menu.length - 1 && <Divider />}
                    </>)}
                </div>

            </Drawer >
        </div >
    )
}

export default ProfileNav;