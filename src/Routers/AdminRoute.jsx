import React from "react";
import Admin from "../AdminComponent/Admin/Admin";
import { Route, Routes } from "react-router-dom";

export const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<Admin />} />
            </Routes>
        </div>
    )
} 