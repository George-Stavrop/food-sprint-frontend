import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantOrder, updateOrderStatus } from "../../component/State/RestaurantOrder/Action";

const orderStatus = [
    { label: "Ετοιμάζεται", value: "Ετοιμάζεται" },
    { label: "Ολοκληρώθηκε", value: "Ολοκληρώθηκε" },
    { label: "Σε διανομή", value: "Σε διανομή" },
    { label: "Έφτασε", value: "Έφτασε" },
];

const OrderTable = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, restaurantOrder } = useSelector((store) => store);

    useEffect(() => {
        dispatch(fetchRestaurantOrder({
            jwt,
            restaurantId: restaurant.usersRestaurant?.id,
        }));
    }, [dispatch, jwt, restaurant.usersRestaurant?.id]);

    const handleUpdateOrder = (orderId, orderStatus) => {
        dispatch(updateOrderStatus({ orderId, orderStatus, jwt }));
        handleClose(orderId);
    };

    const [anchorEl, setAnchorEl] = useState({});

    const handleClick = (event, orderId) => {
        setAnchorEl((prev) => ({ ...prev, [orderId]: event.currentTarget }));
    };

    const handleClose = (orderId) => {
        setAnchorEl((prev) => ({ ...prev, [orderId]: null }));
    };

    return (
        <Box>
            <Card className="mt-1">
                <CardHeader title={"All Orders"} sx={{ pt: 2, alignItems: "center" }} />
            </Card>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Φωτογραφία</TableCell>
                            <TableCell align="right">Πελάτης</TableCell>
                            <TableCell align="right">Τιμή</TableCell>
                            <TableCell align="right">Όνομα</TableCell>
                            <TableCell align="right">Υλικά</TableCell>
                            <TableCell align="right">Κατάσταση</TableCell>
                            <TableCell align="right">Ενέργειες</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurantOrder.orders.map((item) => (
                            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell align="right">
                                    <AvatarGroup>
                                        {item.items.map((orderItem, index) => (
                                            <Avatar key={index} src={orderItem.food?.images[0]} />
                                        ))}
                                    </AvatarGroup>
                                </TableCell>
                                <TableCell align="right">{item.customer?.fullname}</TableCell>
                                <TableCell align="right">{item.totalPrice}&euro;</TableCell>
                                <TableCell align="right">
                                    {item.items.map((orderItem, index) => <p key={index}>{orderItem.food?.name}</p>)}
                                </TableCell>
                                <TableCell align="right">
                                    {item.items.map((orderItem, orderIndex) => (
                                        <div key={orderIndex}>
                                            {orderItem.ingredients.map((ingredient, index) => (
                                                <span key={index}>
                                                    {ingredient}{index < orderItem.ingredients.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                </TableCell>
                                <TableCell align="right">{item.orderStatus}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        id={`basic-button-${item.id}`}
                                        aria-controls={anchorEl[item.id] ? `basic-menu-${item.id}` : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={Boolean(anchorEl[item.id])}
                                        onClick={(event) => handleClick(event, item.id)}
                                        sx={{ textTransform: 'none' }}
                                    >
                                        Αλλαγή
                                    </Button>
                                    <Menu
                                        id={`basic-menu-${item.id}`}
                                        anchorEl={anchorEl[item.id]}
                                        open={Boolean(anchorEl[item.id])}
                                        onClose={() => handleClose(item.id)}
                                        MenuListProps={{ 'aria-labelledby': `basic-button-${item.id}` }}
                                    >
                                        {orderStatus.map((status) => (
                                            <MenuItem
                                                key={status.value}
                                                onClick={() => handleUpdateOrder(item.id, status.value)}
                                            >
                                                {status.label}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default OrderTable;
