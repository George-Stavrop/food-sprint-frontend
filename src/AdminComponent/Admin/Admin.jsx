import React, { useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import { Route, Routes } from "react-router-dom";
import Orders from "../orders/Orders";
import Menu from "../menu/Menu";
import Restaurant from "./Restaurant";


export const Admin = () => {





    return (
        <div>
            <div className="lg:flex justify-between">
                <div>
                    <AdminSidebar />
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