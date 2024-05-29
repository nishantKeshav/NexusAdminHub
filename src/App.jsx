
// import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';

import './App.css';
import SideBar from './Components/SideBar/SideBar';
import DashBoard from './Components/DashBoard/DashBoard';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const handledrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <Box className = "total-container">
        <SideBar open = {open} handleDrawerToggle = {handledrawerToggle} />
        <DashBoard open = {open} />
    </Box>
  )
}

export default App
