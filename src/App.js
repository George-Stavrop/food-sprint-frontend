import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar'
import { ThemeProvider } from '@emotion/react';
import { AppTheme } from './theme/AppTheme';
import { Box, CssBaseline } from '@mui/material';
import {Home} from './component/Home/Home'
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';



function App() {
  return (
    <ThemeProvider theme={AppTheme}>

    <div className='App'>
      <CssBaseline/>
      <Navbar/>
      {/* Home */}
      {/*<RestaurantDetails/>*/}
      <Cart/>
    </div>
    
    </ThemeProvider>
  );
}

export default App;
