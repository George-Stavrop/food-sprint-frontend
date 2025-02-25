import { Avatar, AvatarGroup, Backdrop, Box, Button, Card, CardHeader, Chip, CircularProgress, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantOrder, updateOrderStatus } from "../../component/State/RestaurantOrder/Action";
import { useNavigate, useParams } from "react-router-dom";

const orderStatus = [
    { label: "Ετοιμάζεται", value: "Ετοιμάζεται" },
    { label: "Ολοκληρώθηκε", value: "Ολοκληρώθηκε" },
    { label: "Σε διανομή", value: "Σε_διανομή" },
    { label: "Έφτασε", value: "Έφτασε" },


];

const OrderTable = ({ isDashboard, name }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ status: "", sort: "" });
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurantOrder } = useSelector((store) => store);
    const [anchorElArray, setAnchorElArray] = useState([]);
    const { id } = useParams();

    const handleUpdateStatusMenuClick = (event, index) => {
        const newAnchorElArray = [...anchorElArray];
        newAnchorElArray[index] = event.currentTarget;
        setAnchorElArray(newAnchorElArray);
    };

    const handleUpdateStatusMenuClose = (index) => {
        const newAnchorElArray = [...anchorElArray];
        newAnchorElArray[index] = null;
        setAnchorElArray(newAnchorElArray);
    };

    const handleUpdateOrder = (orderId, orderStatus, index) => {
        handleUpdateStatusMenuClose(index);
        dispatch(updateOrderStatus({ orderId, orderStatus, jwt }));
    };

    return (
        <Box>
            <Card className="mt-1">
                <CardHeader
                    title={name}
                    sx={{
                        pt: 2,
                        alignItems: "center",
                        "& .MuiCardHeader-action": { mt: 0.6 },
                    }}
                />
                <TableContainer>
                    <Table sx={{}} aria-label="table in dashboard">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Φωτογραφία</TableCell>
                                {/* {!isDashboard && <TableCell>Title</TableCell>} */}
                                <TableCell>Πελάτης</TableCell>
                                <TableCell>Τιμή</TableCell>

                                <TableCell>Όνομα</TableCell>
                                {!isDashboard && <TableCell>Υλικά</TableCell>}
                                {!isDashboard && <TableCell>Κατάσταση</TableCell>}
                                {!isDashboard && (
                                    <TableCell sx={{ textAlign: "center" }}>Αλλαγή</TableCell>
                                )}
                                {/* {!isDashboard && (
                  <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
                )} */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantOrder.orders
                                ?.slice(0, isDashboard ? 7 : restaurantOrder.orders.length)
                                .map((item, index) => (
                                    <TableRow
                                        className="cursor-pointer"
                                        hover
                                        key={item.id}
                                        sx={{
                                            "&:last-of-type td, &:last-of-type th": { border: 0 },
                                        }}
                                    >
                                        <TableCell>{item?.id}</TableCell>
                                        <TableCell sx={{}}>
                                            <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                                                {item.items.map((orderItem) => (
                                                    <Avatar
                                                        alt={orderItem.food.name}
                                                        src={orderItem.food?.images[0]}
                                                    />
                                                ))}
                                            </AvatarGroup>{" "}
                                        </TableCell>

                                        <TableCell sx={{}}>
                                            {item?.customer.email}
                                        </TableCell>

                                        <TableCell>{item?.totalPrice}&euro;</TableCell>

                                        <TableCell className="">
                                            {item.items.map((orderItem) => (
                                                <p>
                                                    -{orderItem.food?.name}
                                                </p>
                                            ))}
                                        </TableCell>
                                        {!isDashboard && <TableCell className="space-y-2">
                                            {item.items.map((orderItem) =>
                                                <div className="flex gap-1 flex-wrap">
                                                    {orderItem.ingredients?.map((ingre) => (
                                                        <Chip label={ingre} />
                                                    ))}
                                                </div>

                                            )}
                                        </TableCell>}
                                        {!isDashboard && <TableCell className="text-white">
                                            <Chip
                                                sx={{
                                                    color: "#f56f42",
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                }}
                                                label={item?.orderStatus}
                                                size="small"

                                                className="text-white"
                                            />
                                        </TableCell>}
                                        {!isDashboard && (
                                            <TableCell
                                                sx={{ textAlign: "center" }}
                                                className="text-white"
                                            >
                                                <div>
                                                    <Button
                                                        id={`basic-button-${item?.id}`}
                                                        aria-controls={`basic-menu-${item.id}`}
                                                        aria-haspopup="true"
                                                        aria-expanded={Boolean(anchorElArray[index])}
                                                        onClick={(event) =>
                                                            handleUpdateStatusMenuClick(event, index)
                                                        }
                                                    >
                                                        Status
                                                    </Button>
                                                    <Menu
                                                        id={`basic-menu-${item?.id}`}
                                                        anchorEl={anchorElArray[index]}
                                                        open={Boolean(anchorElArray[index])}
                                                        onClose={() => handleUpdateStatusMenuClose(index)}
                                                        MenuListProps={{
                                                            "aria-labelledby": `basic-button-${item.id}`,
                                                        }}
                                                    >
                                                        {orderStatus.map((s) => (
                                                            <MenuItem
                                                                onClick={() =>
                                                                    handleUpdateOrder(item.id, s.value, index)
                                                                }
                                                            >
                                                                {s.label}
                                                            </MenuItem>
                                                        ))}
                                                    </Menu>
                                                </div>
                                            </TableCell>
                                        )}
                                        {/* {!isDashboard && (
                    <TableCell
                      sx={{ textAlign: "center" }}
                      className="text-white"
                    >
                      <Button
                        onClick={() => handleDeleteOrder(item._id)}
                        variant="text"
                      >
                        delete
                      </Button>
                    </TableCell>
                  )} */}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>


            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={restaurantOrder.loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    );
};

export default OrderTable;
