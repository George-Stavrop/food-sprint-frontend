const { createTheme } = require("@mui/material");

export const AppTheme = createTheme({
    palette:{
        primary: {
            main:"#f27022"
        },
        secondary: {
            main:"#401d08"
        },
        background: {
            default: "linear-gradient(to bottom, #f2ddb3, #f9c3a0, #ffffff)",
        },
        textColor: {
            main: "#000000"
        },
        
    },
})