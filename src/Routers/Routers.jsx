import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRouter from "./CustomerRouter";
import { AdminRoute } from "./AdminRoute";


const Routers = () => {
    return (
        <Routes>
            <Route path='/admin/restaurant/*' element={<AdminRoute />} />
            <Route path='/*' element={<CustomerRouter />} />
        </Routes>
    )
}


export default Routers;