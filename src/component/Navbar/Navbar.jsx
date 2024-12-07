import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Box from "@mui/material/Box";
import Badge from '@mui/material/Badge';

export const Navbar = () => {
    return (
        <div className="px-5 z-50 py-[0.8rem] lg:px-20 flex justify-between  sticky top-0 left-0 bg-white shadow-lg w-full">

            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <div className="logo font-semibold text-2xl">
                    FoodSprint
                </div>
            </div>

            <div className="flex items-center space-x-2 lg:space-x-10">
                <div>
                    <IconButton aria-label="Search">
                        <Box 
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                background: 'linear-gradient(45deg, #ff9a9e, #edd28e)',
                                borderRadius: '50px',
                                padding: '0.5rem 1rem',
                                width: "10rem",
                                height: "2.7rem"
                            }}
                        >
                            <Box 
                                sx={{
                                    fontSize: '0.9rem', 
                                    color: '#000', 
                                    marginRight: '1rem'
                                }}
                            >
                                Αναζήτηση...
                            </Box>

                            <SearchIcon 
                                sx={{
                                    fontSize: "2rem",
                                    color: "#000",
                                    background: 'linear-gradient(45deg, #ff9a9e, #edd28e)',
                                    borderRadius: "50%",
                                    padding: "0.5rem"
                                }}
                            />
                        </Box>
                    </IconButton>
                </div>

                <div>
                    <Avatar 
                        sx={{ backgroundColor: "#f2ddb3", color: "#000", width: "3rem", height: "3rem" }}
                        aria-label="User Avatar"
                    />
                </div>

                <div>
                    <IconButton aria-label="Shopping basket">
                        <Badge color="error" badgeContent={3}>
                            <ShoppingBasketIcon sx={{ color: "#d1414f", width: "2rem", height: "2rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
