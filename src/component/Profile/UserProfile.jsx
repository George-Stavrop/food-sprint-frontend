import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../State/Authentication/Action';


const UserProfile = () => {
    const { auth } = useSelector(store => store)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        navigate("/")
        dispatch(logout());
    }
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col items-center justify-center'>
                <AccountCircleIcon sx={{ fontSize: "9rem", color: "#fc5e03" }} />
                <h1 className='py-5 text-2xl font-semibold'>{auth.user?.fullname}</h1>
                <p><span className='font-semibold'>Email:</span> {auth.user?.email}</p>

            </div>
        </div>
    )
}

export default UserProfile