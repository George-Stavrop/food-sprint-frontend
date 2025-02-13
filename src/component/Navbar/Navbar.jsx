import React from "react";
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
            setIsScrolled(window.scrollY > 50); // Change height when scrolled more than 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`px-5 z-50  lg:px-20 flex justify-between  sticky top-0 left-0 bg-white shadow-lg w-full transition-[padding] duration-300 ease-in-out ${isScrolled ? " py-[0.5rem] " : "py-[1.5rem] "
            }`}>

            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <div onClick={() => navigate("/")} className="logo font-semibold text-2xl">
                    FoodSprint
                </div>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-10">
                <div>
                    <IconButton aria-label="Search"
                        sx={{ marginRight: "2rem" }}>
                        <Box>

                            <SearchIcon
                                sx={{
                                    fontSize: "2.5rem",
                                    color: "#000",
                                    background: 'linear-gradient(45deg, #ff9a9e, #edd28e)',
                                    borderRadius: "50%",
                                    padding: "0.5rem",

                                }}
                            />
                        </Box>
                    </IconButton>
                </div>

                <div>
                    {auth.user ? (
                        <Avatar
                            onClick={handleAvatarClick}
                            sx={{
                                background: 'linear-gradient(45deg, #ff9a9e, #edd28e)',
                                color: "#000",
                                width: { xs: "2rem", lg: "2.5rem" },
                                height: { xs: "2rem", lg: "2.5rem" },
                            }}
                        >
                            {auth.user?.fullname[0].toUpperCase()}
                        </Avatar>
                    ) : (
                        <IconButton onClick={() => navigate("/account/login")}>
                            <Person sx={{
                                width: { xs: "2rem", lg: "2.5rem" },
                                height: { xs: "2rem", lg: "2.5rem" },
                            }} />
                        </IconButton>
                    )}
                </div>


                <div>
                    <IconButton onClick={() => navigate("/cart")} aria-label="Shopping basket" sx={{ paddingTop: "1rem" }}>
                        <Badge color="error" badgeContent={cart.cart?.items?.length} sx={{
                            '& .MuiBadge-badge': {
                                minWidth: { xs: '1rem', lg: '1.5rem' }, // Badge width
                                height: { xs: '1rem', lg: '1.5rem' },   // Badge height
                                fontSize: { xs: '0.6rem', lg: '0.8rem' }, // Font size inside the badge
                            },
                        }}>
                            <ShoppingBasketIcon
                                sx={{
                                    color: "#d1414f",
                                    width: { xs: "1.5rem", lg: "2rem" }, // Responsive width
                                    height: { xs: "1.5rem", lg: "2rem" },
                                }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
