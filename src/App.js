import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar'
import { ThemeProvider } from '@emotion/react';
import { AppTheme } from './theme/AppTheme';
import { Box, CssBaseline } from '@mui/material';
import { Home } from './component/Home/Home'
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRouter from "./Routers/CustomerRouter"



function App() {
  return (
    <ThemeProvider theme={AppTheme}>


      <CssBaseline />
      {/*<Navbar />*/}
      {/* Home */}
      {/*<RestaurantDetails/>*/}
      {/*<Cart/>*/}
      {/*<Profile />*/}
      <CustomerRouter />


    </ThemeProvider>
  );
}

export default App;
