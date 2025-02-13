import { Button, TextField, Typography } from "@mui/material";
import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";



const initialValues = {
    email: "",
    password: ""
}

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(loginUser({ userData: values, navigate }))
    }
    return (
        <div>
            <Typography variant='h6' marginBottom={2} className="text-center " color="primary">
                Συνδέσου με τα στοιχεία σου
            </Typography>

            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
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
                        name="password"
                        type="password"
                        label="κωδικός"
                        fullWidth
                        variant="outlined"
                        margin="normal"
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
            </Formik>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Δεν έχετε λογαριαμό;
                <Button sx={{ textTransform: "none" }} size="small" onClick={() => navigate("/account/register")}>
                    Εγγραφείτε
                </Button>
            </Typography>

        </div >
    )
}

export default Login;