import { Dashboard, ShoppingBag, ShopTwo } from "@mui/icons-material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../component/State/Authentication/Action";

const menu = [
    { title: "Εστιατόριο", icon: <Dashboard />, path: "/" },
    { title: "Παραγγελίες", icon: <FastfoodIcon />, path: "/παραγγελίες" },
    { title: "Μενού", icon: <ShopTwo />, path: "/μενού" },



]

export const AdminSidebar = ({ handleClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleNavigate = (item) => {
        navigate(`/admin/restaurant${item.path}`)
    }

    const handleLogout = () => {
        navigate('/');
        dispatch(logout());
        handleClose();
    }

    const isSmallScreen = useMediaQuery("(max-width:1080px)")

    return (
        <div>
            <>
                <Drawer
                    variant={isSmallScreen ? "temporary" : "permanent"}
                    onClose={handleClose}
                    open={true}
                    anchor='left'
                    sx={{ zIndex: 1, }}>

                    <div className="w-[70vw] lg:w-[20vw] my-10 h-screen flex flex-col text-xl space-y-[1.65rem]">

                        <div className="flex-grow">
                            {menu.map((item) => (
                                <React.Fragment key={item.title}>
                                    <div onClick={() => handleNavigate(item)} className="px-5 my-10 flex items-center gap-5 cursor-pointer" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        <span>{React.cloneElement(item.icon, { sx: { color: "#f27022" } })}</span>
                                        <span >{item.title}</span>

                                    </div>
                                    <Divider sx={{ height: "3px" }} />
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="px-5 flex items-center gap-5 cursor-pointer mt-auto">
                            <LogoutIcon />
                            <span onClick={handleLogout}>Έξοδος</span>
                        </div>

                    </div>

                </Drawer>
            </>
        </div>
    )
}

export default AdminSidebar;