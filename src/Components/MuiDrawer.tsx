import { Box, Drawer, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'


const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <IconButton size='large' edge='start' color='inherit' onClick={()=>setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
                <Box p={2} width='250px' role='presentation' textAlign='center'>
                    <Typography variant='h6' component='div'>Side Menu</Typography>
                </Box>
            </Drawer>

        </>
    )
}

export default MuiDrawer
