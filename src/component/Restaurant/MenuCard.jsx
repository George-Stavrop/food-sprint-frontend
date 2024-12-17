import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classiccheese from './restaurantAssets/classiccheese.avif';


const ingredients = [
    {
        category: "Πρωτείνη",
        ingredients: ["μπιφτέκι από μοσχαρίσιο κιμά 140gr","φιλέτο κοτόπουλου"]
    },
    {
        category: "Υλικά",
        ingredients: ["Cheddar","Κρεμμύδι","Μπέικον","Πίκλες","Αυγό Τηγανητό"]
    },
    {
        category: "Sauce",
        ingredients: ["Ketchup","Μουστάρδα","Μαγιονέζα","Pickle Sauce","Sauce Γιαουρτιού"]
    }
]

const MenuCard = () => {
    
    const handleCheckBoxChange = (value) => {
        console.log(value)
    }


    return (
        <Accordion
            className="rounded-lg overflow-hidden shadow-md mb-4 bg-gray-200" // Tailwind for background color
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="bg-gray-200 border-b border-gray-300" // Tailwind background for summary
            >
                <div className="lg:flex items-start justify-between">
                    <div className="flex items-start">
                        <img 
                            className="w-[7rem] h-[7rem] object-cover rounded-lg" 
                            src={classiccheese} 
                            alt="burger" 
                        />
                        <div className="ml-4 space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl" style={{ fontFamily: "Kodchasan" }}>
                              Burger
                            </p>
                            <p>5,50&euro;</p>
                            <p className="text-gray-500">
                                Χειροποίητο ψωμάκι σουσαμένιο αφράτο με μπιφτέκι μοσχαρίσιο
                            </p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className="bg-white">
                <form >
                    <div className="flex gap-5 flex-wrap">
                        {
                            ingredients.map((item) => (
                                <div className="">
                                    <p className="font-semibold mb-2">{item.category}</p>
                                    <FormGroup>
                                    {item.ingredients.map((item)=> 
                                    <FormControlLabel 
                                    control={<Checkbox
                                     onChange={()=>handleCheckBoxChange(item)}/>}
                                    label={item}
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
                            {true?"Προσθηκη στο καλαθι":"Μή διαθέσιμο"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCard;
