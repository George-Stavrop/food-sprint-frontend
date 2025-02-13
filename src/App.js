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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';
import Routers from './Routers/Routers';
import { getRestaurantByUserId } from './component/State/Restaurant/Action';



function App() {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const { auth } = useSelector(store => store)

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(auth.jwt || jwt));
      dispatch(findCart(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    dispatch(getRestaurantByUserId(auth.jwt || jwt));
  }, [auth.user])

  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
