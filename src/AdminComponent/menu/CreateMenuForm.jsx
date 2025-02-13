import { useFormik } from 'formik';
import React, { useState } from 'react'
import { uploadImageToCloudinary } from '../util/CloudinaryUpload';
import { Grid } from '@mui/material';

const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    restaurantId: "",
    ingredients: [],
    images: [],
};

const CreateMenuForm = () => {

    const [uploadImage, setUploadImage] = useState(false);
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            values.restaurantId = 1
            console.log("data---", values);
        },
    });

    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        setUploadImage(true);
        const image = await uploadImageToCloudinary(file);
        formik.setFieldValue("images", [...formik.values.images, image]);
        setUploadImage(false);
    }

    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images];
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages)
    };

    return (
        <div className="py-10 px-5 lg:flex items-center justify-center
        min-h-screen">
            <div className="lg:max-w-4xl">
                <h1 className="font-bold text-2xl text-center py-2">
                    Add New Image
                </h1>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <Grid container spacing={2}>
                        <Grid className="flex flex-wrap gap-5" item xs={12}>
                            <input
                                accept='image/*'
                                id='fileInput'
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                                type='file'
                            />

                            <label className='relative' htmlFor='fileInput'>
                                <span
                                    className='w-24 h-24 cursor-pointer flex items-center justify-'
                                >

                                </span>

                            </label>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}


export default CreateMenuForm;