import React, { useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import { Route, Routes } from "react-router-dom";

import Orders from "../orders/Orders";
import Menu from "../menu/Menu";
import Restaurant from "./Restaurant";
import Dashboard from "../dashboard/Dashboard";

export const Admin = () => {

    const handleClose = () => {

    }



    return (
        <div>
            <div className="lg:flex justify-between">
                <div>
                    <AdminSidebar handleClose={handleClose} />
                </div>
                <div className="lg:w-[80%]">
                    <Routes>
                        <Route path="/" element={<Restaurant />} />
                        <Route path="/παραγγελίες" element={<Orders />} />
                        <Route path="/μενού" element={<Menu />} />
                        <Route path="/εστιατόριο" element={<Restaurant />} />
                    </Routes>

                </div>
            </div>
        </div>
    )
}


export default Admin;