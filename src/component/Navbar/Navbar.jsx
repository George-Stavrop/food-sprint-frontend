import React from "react";
import Logo from "./LogoFood.png"
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Box from "@mui/material/Box";
import Badge from '@mui/material/Badge';
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {

    const { auth, cart } = useSelector(store => store)

    const navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false);

    const handleAvatarClick = () => {
        if (auth.user?.role === "ROLE_CUSTOMER") {
            navigate("/my-profile")
        }
        else {
            navigate("/admin/restaurant")
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`px-5 z-50  lg:px-20 flex justify-between  sticky top-0 left-0 bg-white shadow-lg w-full transition-[padding] duration-300 ease-in-out ${isScrolled ? " py-[0.5rem] " : "py-[1.5rem] "
            }`}>

            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <div onClick={() => navigate("/")} className="logo font-semibold text-2xl">
                    <img src={Logo} className="h-[75px] w-[230px]" alt="Logo" />
                </div>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-10">


                <div>
                    {auth.user ? (
                        <IconButton
                            onClick={handleAvatarClick}
                            sx={{
                                background: 'linear-gradient(45deg, #ff9a9e, #edd28e)',
                                color: "#000",
                                width: { xs: "2.5rem", lg: "3rem" },
                                height: { xs: "2.5rem", lg: "3rem" },
                                transition: "0.3s ease-in-out",
                                border: "2px solid transparent",
                                "&:hover": {
                                    border: "4px solid #ff6b6b",
                                },
                            }}
                        >
                            {auth.user?.fullname[0].toUpperCase()}
                        </IconButton>

                    ) : (
                        <IconButton onClick={() => navigate("/account/login")}>
                            <p className="text-lg pr-2">Είσοδος/εγγραφή</p>
                            <Person sx={{
                                width: { xs: "2.5rem", lg: "3rem" },
                                height: { xs: "2.5rem", lg: "3rem" },
                            }} />
                        </IconButton>
                    )}
                </div>


                <div>
                    <IconButton onClick={() => {
                        navigate("/cart")
                        window.location.reload();
                    }}
                        aria-label="Shopping basket" sx={{
                            transition: "0.3s ease-in-out",

                            "&:hover": {
                                background: "linear-gradient(45deg, #ff9a9e, #edd28e)",
                            },
                        }}>
                        <Badge color="error" badgeContent={cart.cart?.items?.length} sx={{

                            '& .MuiBadge-badge': {
                                minWidth: { xs: '1rem', lg: '1.5rem' },
                                height: { xs: '1rem', lg: '1.5rem' },
                                fontSize: { xs: '0.6rem', lg: '0.8rem' },

                            },
                        }}>
                            <ShoppingBasketIcon
                                sx={{

                                    color: "#d1414f",
                                    width: { xs: "1.5rem", lg: "2rem" },
                                    height: { xs: "1.5rem", lg: "2rem" },
                                }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
