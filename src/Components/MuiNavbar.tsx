import React, { useRef } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './MuiNavbar.css';

const MuiNavbar = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const handleScroll = (scrollOffset: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += scrollOffset;
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{width:'15%'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Mui Tutorial
                        </Typography>
                    </Box>
                    <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
                        <IconButton onClick={() => handleScroll(-100)}>
                            <ArrowBack />
                        </IconButton>
                        <div
                            ref={scrollContainerRef}
                            className='scroll-container'
                        >
                            <div style={{ minWidth: '1500px', padding: '8px' }}>
                                <Button color='inherit' href="/muitypography">Typography</Button>
                                <Button color='inherit' href="/muibutton">Button</Button>
                                <Button color='inherit' href="/muitextbox">TextBox</Button>
                                <Button color='inherit' href="/muiselect">Select</Button>
                                <Button color='inherit' href="/muiradiobutton">RadioButton</Button>
                                <Button color='inherit' href="/muicheckbox">checbox</Button>
                                <Button color='inherit' href="/muiswitch">switch</Button>
                                <Button color='inherit' href="/muirating">rating</Button>
                                <Button color='inherit' href="/muiautocomplete">autocomplete</Button>
                                <Button color='inherit' href="/muilayout">Layout</Button>
                                <Button color='inherit' href="/muicard">card</Button>
                                <Button color='inherit' href="/muiaccordion">Accordion</Button>
                                <Button color='inherit' href="/muiimagelist">imageList</Button>
                            </div>
                        </div>
                        <div style={{ minWidth: '100px' }} />
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{ position: 'absolute', top: '0', right: '10px', zIndex: '1' }}>
                <IconButton onClick={() => handleScroll(100)}>
                    <ArrowForward />
                </IconButton>
            </div>
        </Box>
    );
};

export default MuiNavbar;
