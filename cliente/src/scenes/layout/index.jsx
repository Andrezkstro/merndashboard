import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'componentes/Navbar'
import SideBar from 'componentes/SideBar'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'



const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)")
    const [isSidebarOpen, setisSidebarOpen] = useState(true);
    return (
        <Box display = {isNonMobile ? "flex" : "block"} width= "100%" height="100%">
            <SideBar 
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setisSidebarOpen={setisSidebarOpen}
            />
            <Box>
                <Navbar 
                    isSidebarOpen={isSidebarOpen}
                    setisSidebarOpen={setisSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Layout
