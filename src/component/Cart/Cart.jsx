import { Box, Button, Card, Divider, Grid, Modal, TextField, FormHelperText } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../State/Order/Action";



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
    city: ""
}

const validationSchema = yup.object().shape({
    streetAddress: yup.string().required("Διάλεξε Οδό!!"),
    area: yup.string().required("Διάλεξε περιοχή!!"),
    pincode: yup.string().required("Διάλεξε ΤΚ!!"),
    city: yup.string().required("Διάλεξε Πόλη!!")
})

const Cart = () => {
    const createOrderWithAddress = () => {

    }

    const handleOpenAddressModal = () => {
        setOpen(true);
    }

    const [open, setOpen] = React.useState(false);

    const { cart, auth } = useSelector(store => store);

    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
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
        }
        dispatch(createOrder(data));
        console.log(values)
    }
    return (
        <>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    {cart.cartItems.map((item) => (<CartItem item={item} />))}
                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className="font-extralight py-5 pl-8 text-base font-medium" style={{ color: "#3e2b1f" }}>Λεπτομέρειες Παραγελίας</p> {/* Dark brown */}
                        <div className="space-y-3">
                            <div className="flex justify-between" style={{ color: "#4a3c31" }}> {/* Soft brown */}
                                <p className=" font-medium">Παραγγελια</p>
                                <p>{cart.cart?.total}&euro;</p>
                            </div>
                            <div className="flex justify-between" style={{ color: "#4a3c31" }}>
                                <p>Κόστος Delivery</p>
                                <p>0,50&euro;</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="mt-3 flex justify-between" style={{ color: "#3e2b1f" }}>
                            <p className=" font-medium text-lg">Σύνολο Πληρωμής</p>
                            <p className="text-lg">{cart.cart.total + 0.5}&euro;</p>
                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 ">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">Διάλεξε Διεύθυνση</h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {[1, 1, 1, 1, 1].map((item) =>
                                <AddressCard
                                    handleSelectAddress={createOrderWithAddress}
                                    item={item}
                                    showButton={true}
                                />)}
                            <Card className="flex gap-5 w-64 p-5 !bg-rose-100">
                                <AddLocationAltIcon />
                                <div className="space-y-3">
                                    <h1 className="font-semibold text-lg">+ Νέα Διέυθυνση</h1>


                                    < Button sx={{
                                        backgroundColor: "#ff6347",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        borderRadius: "8px",
                                        padding: "0.8rem 1.2rem",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                        "&:hover": {
                                            backgroundColor: "#ff8267",
                                        },
                                    }} variant="contained" fullWidth onClick={handleOpenAddressModal}>Πρόσθεσε</Button>

                                </div>
                            </Card >
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ touched, errors }) => (
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="streetAddress"
                                            label="Οδός"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.streetAddress && Boolean(errors.streetAddress)}
                                            helperText={touched.streetAddress && errors.streetAddress}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="area"
                                            label="Περιοχή"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.area && Boolean(errors.area)}
                                            helperText={touched.area && errors.area}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="pincode"
                                            label="Ταχυδρομικός Κώδικας"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.pincode && Boolean(errors.pincode)}
                                            helperText={touched.pincode && errors.pincode}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="city"
                                            label="Πόλη"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.city && Boolean(errors.city)}
                                            helperText={touched.city && errors.city}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"

                                            variant="contained"
                                            sx={{ textTransform: "none", backgroundColor: "#ff6347" }}
                                        >
                                            Επιβεβαίωση
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart;
