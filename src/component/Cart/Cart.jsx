import { Box, Button, Card, Divider, Grid, Modal, TextField, FormHelperText, FormLabel, FormControlLabel, Radio, RadioGroup, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import CartItem from "./CartItem";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createOrderCard, createOrderCash } from "../State/Order/Action";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { cartTotal } from "./totalPay";
import OrderSuccessModal from "./OrderSuccessModal";
import { useNavigate } from "react-router-dom";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #f27022',
    boxShadow: 24,
    p: 4,
    outline: "none",
};

const initialValues = {
    streetAddress: "",
    area: "",
    pincode: "",
    city: "",
    paymentMethod: "cash"
}

const validationSchema = yup.object().shape({
    streetAddress: yup.string().required("Διάλεξε Οδό!!"),
    area: yup.string().required("Διάλεξε περιοχή!!"),
    pincode: yup.string().required("Διάλεξε ΤΚ!!"),
    city: yup.string().required("Διάλεξε Πόλη!!")
});

const Cart = () => {
    const { cart, auth } = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);

    const handleCloseAddressModal = () => setOpenAddressModal(false);
    const handleOpenAddressModal = () => setOpenAddressModal(true);

    const handleSubmit = async (values) => {


        const data = {
            jwt: localStorage.getItem("jwt"),
            order: {
                restaurantId: cart.cartItems[0].food?.restaurant.id,
                deliveryAddress: {
                    fullName: auth.user?.fullName,
                    streetAddress: values.streetAddress,
                    city: values.city,
                    pinCode: values.pincode,
                    area: values.area
                }
            }
        };

        if (values.paymentMethod === "credit") {
            dispatch(createOrderCard(data));
        } else {
            setLoading(true);
            dispatch(createOrderCash(data)).then(() => {
                setTimeout(() => {
                    setLoading(false);
                    setOrderDetails(data);
                    setOrderSuccess(true);
                }, 4000);
            });
        }
    };

    const handleCloseSuccessModal = () => {
        setOrderSuccess(false);
        setOrderDetails(null);
        navigate("/");
    };

    return (
        <>
            {cart.cartItems.length > 0 ? (
                <main className="lg:flex justify-between">
                    <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                        <div className="shadow-lg rounded-lg p-6 space-y-6">
                            {cart.cartItems.map((item) => (
                                <CartItem item={item} key={item.id} />
                            ))}
                            <Divider />
                            <div className="billDetails px-5 text-sm">
                                <p className="py-5 pl-8 text-base font-semibold text-[#3e2b1f] pb-3">
                                    Λεπτομέρειες Παραγελίας
                                </p>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-[#4a3c31]">
                                        <p className="font-medium">Παραγγελία</p>
                                        <p>{cartTotal(cart.cartItems)}&euro;</p>
                                    </div>
                                    <div className="flex justify-between text-[#4a3c31]">
                                        <p>Κόστος Delivery</p>
                                        <p>0,50&euro;</p>
                                    </div>
                                </div>

                                <div className="mt-20 flex justify-between items-center text-[#3e2b1f] pt-4">
                                    <p className="font-semibold text-lg">Σύνολο Πληρωμής</p>
                                    <p className="text-lg font-bold">{cartTotal(cart.cartItems) + 0.5}&euro;</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Divider orientation="vertical" flexItem />
                    <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                        <div>
                            <h1 className="text-center font-semibold text-2xl py-10">Διεύθυνση</h1>
                            <div className="flex gap-5 flex-wrap justify-center">
                                <Card className="flex gap-5 w-64 p-5 !bg-rose-100">
                                    <AddLocationAltIcon />
                                    <div className="space-y-3">
                                        <h1 className="font-semibold text-lg">Επιλογή Διεύθυνσης</h1>
                                        <Button
                                            sx={{ backgroundColor: "#ff6347", fontWeight: "bold", textTransform: "none" }}
                                            variant="contained"
                                            fullWidth
                                            onClick={handleOpenAddressModal}
                                        >
                                            Πρόσθεσε
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </section>
                </main>
            ) : (
                <div className="flex h-[90vh] justify-center items-center">
                    <div className="text-center space-y-5">
                        <RemoveShoppingCartIcon sx={{ width: "10rem", height: "10rem", color: "#fc8403" }} />
                        <p className="font-bold text-3xl text-red-400">Το καλάθι είναι άδειο</p>
                    </div>
                </div>
            )}

            {/* Address Modal */}
            <Modal open={openAddressModal} onClose={handleCloseAddressModal}>
                <Box sx={style}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ touched, errors }) => (
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field as={TextField} name="streetAddress" label="Οδός" fullWidth variant="outlined" error={touched.streetAddress && Boolean(errors.streetAddress)} helperText={touched.streetAddress && errors.streetAddress} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field as={TextField} name="area" label="Περιοχή" fullWidth variant="outlined" error={touched.area && Boolean(errors.area)} helperText={touched.area && errors.area} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field as={TextField} name="pincode" label="Ταχυδρομικός Κώδικας" fullWidth variant="outlined" error={touched.pincode && Boolean(errors.pincode)} helperText={touched.pincode && errors.pincode} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field as={TextField} name="city" label="Πόλη" fullWidth variant="outlined" error={touched.city && Boolean(errors.city)} helperText={touched.city && errors.city} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel component="legend">Επιλέξτε Τρόπο Πληρωμής</FormLabel>
                                        <Field as={RadioGroup} name="paymentMethod">
                                            <FormControlLabel value="cash" control={<Radio />} label="Μετρητά" />
                                            <FormControlLabel value="credit" control={<Radio />} label="Πιστωτική Κάρτα" />
                                        </Field>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" sx={{ textTransform: "none", backgroundColor: "#ff6347" }}>
                                            {loading ? <CircularProgress size={24} /> : "Στείλε την!!!"}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
            <OrderSuccessModal
                open={orderSuccess || loading}
                onClose={handleCloseSuccessModal}
                loading={loading}
                orderDetails={orderDetails}
                totalAmount={cartTotal(cart.cartItems) + 0.5}
            />
        </>
    );
};

export default Cart;
