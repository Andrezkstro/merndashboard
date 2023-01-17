import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'componentes/Navbar'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'



const Layout = () => {
    return <Box width= "100%" height="100%">
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    </Box>;
}

export default Layout
