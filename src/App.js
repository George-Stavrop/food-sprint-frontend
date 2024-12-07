import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar'
import { ThemeProvider } from '@emotion/react';
import { AppTheme } from './theme/AppTheme';
import { Box, CssBaseline } from '@mui/material';
import {Home} from './component/Home/Home'


function App() {
  return (
    <ThemeProvider theme={AppTheme}>
    <div className='App'>
      <CssBaseline/>
      <Navbar/>
      <Home />
      <Box
        sx={{
          background: `linear-gradient(to bottom, #f2ddb3, #f9c3a0, #ffffff)`,
          width: "100%",
          height: "100vh",
        }}
        
        
      />
      
      
      
    </div>
    </ThemeProvider>
  );
}

export default App;
