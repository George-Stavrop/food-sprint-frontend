import { Password } from "@mui/icons-material";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../State/Authentication/Action";
import { useDispatch } from "react-redux";

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER",
}

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log("form values", values)
        dispatch(registerUser({ userData: values, navigate }))

    }


    return (
        <div>
            <Typography variant='h6' marginBottom={2} className="text-center " color="primary">
                Γίνε μέλος του FoodSprint!
            </Typography>

            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field
                        as={TextField}
                        name="fullname"
                        label="Όνομα/Επίθετο"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        type="password"
                        name="password"
                        label="κωδικός"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />


                    <Field
                        fullWidth
                        margin="normal"
                        as={Select}
                        labelId="role-simple-select-label"
                        id="role-simple-select"
                        name="Role"

                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>Πελάτης</MenuItem>
                        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Ιδιώτης</MenuItem>

                    </Field>


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2, padding: 1 }}
                    >
                        Πάμε!
                    </Button>
                </Form>
            </Formik>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Αν έχετε ήδη λογαριαμό
                <Button sx={{ textTransform: "none" }} size="small" onClick={() => navigate("/account/login")}>
                    Συνδεθείτε
                </Button>
            </Typography>

        </div >
    )
}


export default Register;