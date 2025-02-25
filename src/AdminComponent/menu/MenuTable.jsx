import { Avatar, Box, Button, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CreateIcon from '@mui/icons-material/Create';
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMenuItemByRestaurantId, updateMenuItemsAvailability } from "../../component/State/Menu/Action";




const MenuTable = () => {

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients, menu, auth } = useSelector(store => store);
    const navigate = useNavigate();
    const handleFoodAvialability = (foodId) => {
        dispatch(updateMenuItemsAvailability({ foodId, jwt: auth.jwt || jwt }));
    };


    useEffect(() => {
        dispatch(getMenuItemByRestaurantId({
            jwt,
            restaurantId: restaurant.usersRestaurant?.id,
            foodCategory: "",

        }))
    }, [ingredients.update, restaurant.usersRestaurant])

    return (
        <Box>
            <Card className="mt-1 mb-3">
                <CardHeader
                    title={"Μενού"}
                    sx={{ pt: 2, alignItems: "center", }}

                />

            </Card>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="left">Φωτογραφία</TableCell>
                            <TableCell align="right">Όνομα</TableCell>
                            <TableCell align="right">Υλικά</TableCell>
                            <TableCell align="right">Τιμή</TableCell>
                            <TableCell align="right">Διαθεσιμότιτα</TableCell>




                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menu.menuItems?.map((item) => (
                            <TableRow
                                key={item.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar src={item.images[0]}></Avatar>
                                </TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">
                                    {item.ingredients.map((ingredient) => <span>{ingredient.name}</span>)}
                                </TableCell>
                                <TableCell align="right">{item.price}&euro;</TableCell>
                                <TableCell align="right">
                                    <Button
                                        color={item.available ? "success" : "error"}
                                        variant="text"
                                        onClick={() => handleFoodAvialability(item.id)}
                                    >
                                        {item.available ? "Διαθέσιμο" : "Μή Διαθέσιμο"}
                                    </Button>

                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default MenuTable;