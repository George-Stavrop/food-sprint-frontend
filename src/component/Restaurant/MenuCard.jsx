import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classiccheese from './restaurantAssets/classiccheese.avif';
import { categorizeIngredients } from "../util/categorizeIngredients";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";




const MenuCard = ({ item }) => {

    const dispatch = useDispatch()

    const [selectedIngredients, setSelectedIngredients] = useState([]);


    const handleCheckBoxChange = (itemName) => {
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName))
        } else {
            setSelectedIngredients([...selectedIngredients, itemName])
        }
    }

    const handleAddItemToCart = (e) => {
        e.preventDefault()
        const reqData = {
            token: localStorage.getItem("jwt"),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients,
            }
        }

        dispatch(addItemToCart(reqData))

        console.log("req data", reqData);
    }



    return (
        <Accordion
            className="rounded-lg overflow-hidden shadow-md mb-4 bg-gray-200"
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="bg-gray-200 border-b border-gray-300"
            >
                <div className="lg:flex items-start justify-between">
                    <div className="flex items-start">
                        <img
                            className="w-[7rem] h-[7rem] object-cover rounded-lg"
                            src={item.images[0]}
                            alt="burger"
                        />
                        <div className="ml-4 space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl" style={{ fontFamily: "Kodchasan" }}>
                                {item.name}
                            </p>
                            <p>{item.price}&euro;</p>
                            <p className="text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className="bg-white">
                <form onSubmit={handleAddItemToCart}>
                    <div className="flex gap-5 flex-wrap">
                        {
                            Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                                <div className="">
                                    <p className="font-semibold mb-2">{category}</p>
                                    <FormGroup>
                                        {categorizeIngredients(item.ingredients)[category].map((item) =>
                                            <FormControlLabel
                                                key={item.id}
                                                control={
                                                    <Checkbox
                                                        onChange={() => handleCheckBoxChange(item.name)} />}
                                                label={item.name}
                                            />)}


                                    </FormGroup>
                                </div>
                            ))
                        }
                    </div>
                    <div className="pt-5">
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={false}
                        >
                            {true ? "Προσθηκη στο καλαθι" : "Μή διαθέσιμο"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCard;
