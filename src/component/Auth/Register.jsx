import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../State/Authentication/Action";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER", // Default role set to "ROLE_CUSTOMER"
};

// Yup validation schema
const validationSchema = Yup.object({
    fullname: Yup.string()
        .min(3, 'Το όνομα πρέπει να έχει τουλάχιστον 3 χαρακτήρες')
        .required('Το όνομα είναι υποχρεωτικό'),
    email: Yup.string()
        .email('Πρέπει να είναι έγκυρη διεύθυνση email')
        .required('Η διεύθυνση email είναι υποχρεωτική'),
    password: Yup.string()
        .min(6, 'Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες')
        .required('Ο κωδικός είναι υποχρεωτικός'),
});

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log("form values", values);
        dispatch(registerUser({ userData: values, navigate }));
    };

    return (
        <div>
            <Typography variant='h6' marginBottom={2} className="text-center " color="primary">
                Γίνε μέλος του FoodSprint!
            </Typography>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema} // Added validation schema
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            as={TextField}
                            name="fullname"
                            label="Όνομα/Επίθετο"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            error={touched.fullName && Boolean(errors.fullName)}
                            helperText={touched.fullName && errors.fullName}
                        />
                        <Field
                            as={TextField}
                            name="email"
                            label="email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <Field
                            as={TextField}
                            type="password"
                            name="password"
                            label="κωδικός"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />

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
                )}
            </Formik>

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Αν έχετε ήδη λογαριαμό
                <Button sx={{ textTransform: "none" }} size="small" onClick={() => navigate("/account/login")}>
                    Συνδεθείτε
                </Button>
            </Typography>

        </div>
    );
};

export default Register;
