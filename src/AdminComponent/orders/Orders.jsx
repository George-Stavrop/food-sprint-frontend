import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import OrderTable from "./OrderTable";


const orderStatus = [
    { label: "Σε αναμονή", value: "PENDING" },
    { label: "Ολοκληρώθηκε", value: "COMPLETED" },
    { label: "Όλα", value: "ALL" }
]

const Orders = () => {
    const [filterValue, setFilterValue] = useState();

    const handleFilter = (e, value) => {
        setFilterValue(value);
    }

    return (
        <div className="px-2">
            <Card className="p-5">
                <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                    Κατάσταση Παραγγελίας
                </Typography>
                <FormControl>
                    <RadioGroup onChange={handleFilter} row name='category' value={filterValue || "all"}>
                        {orderStatus.map((item) => <FormControlLabel
                            key={item.label}
                            value={item.value}
                            control={<Radio />}
                            label={item.label}
                        />)}
                    </RadioGroup>
                </FormControl>
            </Card>
            <OrderTable />

        </div>
    )
}


export default Orders;