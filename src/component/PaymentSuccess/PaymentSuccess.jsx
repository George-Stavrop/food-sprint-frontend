import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const PaymentSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#f2ddb3] via-[#f9c3a0] to-[#ffffff] px-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            <Card className=" w-full max-w-lg p-8 shadow-xl rounded-2xl bg-white text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <TaskAltIcon className="text-[#f27022]" sx={{ fontSize: 80 }} />
                    <h1 className="mt-4 text-2xl font-bold text-[#f27022]">Η παραγγελία σας ολοκληρώθηκε!</h1>
                    <p className="mt-2 mb-6 ">Σας ευχαριστούμε για την εμπιστοσύνη σας. Ανυπομονούμε να σας εξυπηρετήσουμε ξανά!</p>
                    <Button
                        variant="contained"
                        sx={{ fontSize: "1rem", textTransform: "none", backgroundColor: "#f27022", '&:hover': { backgroundColor: "#f9c3a0" } }}
                        onClick={() => navigate("/")}
                        className="mt-6"
                    >
                        Παρήγγειλε ξανά
                    </Button>
                </motion.div>
            </Card>
        </div>
    );
};

export default PaymentSuccess;
