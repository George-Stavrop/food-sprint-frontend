import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from "@mui/material";

const AddressCard = ({ item, showButton, handleSelectAddress }) => {

    return (
        <Card className="flex gap-5 w-64 p-5 !bg-rose-100">
            <HomeIcon />
            <div className="space-y-3">
                <h1 className="font-semibold text-lg">Home</h1>
                <p>{item.streetAddress}</p>
                {showButton && (
                    < Button sx={{
                        backgroundColor: "#ff6347",
                        fontWeight: "bold",
                        textTransform: "none",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                            backgroundColor: "#ff8267",
                        },
                    }} variant="contained" fullWidth onClick={handleSelectAddress(item)}>Επέλεξε</Button>
                )}
            </div>
        </Card >
    )
}



export default AddressCard;