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
            <AppBar position="static" style={{backgroundColor:'#00838f'}}>
                <Toolbar>
                    <Box sx={{width:'15%'}}>
                        <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
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
                            <div style={{ minWidth: '2900px', padding: '8px' }}>
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
                                <Button color='inherit' href="/muimenu">Menu</Button>
                                <Button color='inherit' href="/muilink">Link</Button>
                                <Button color='inherit' href="/muibreadcrumb">Breadcrumbs</Button>
                                <Button color='inherit' href="/muidrawer">Drawer</Button>
                                <Button color='inherit' href="/muispeeddial">Speed dial</Button>
                                <Button color='inherit' href="/muibottomnavigation">Bottom Navigation</Button>
                                <Button color='inherit' href="/muiavatar">Avatar</Button>
                                <Button color='inherit' href="/muibadge">Badge</Button>
                                <Button color='inherit' href="/muilist">List</Button>
                                <Button color='inherit' href="/muichip">Chip</Button>
                                <Button color='inherit' href="/muitooltip">Tooltip</Button>
                                <Button color='inherit' href="/muitable">Table</Button>
                                <Button color='inherit' href="/muialert">Alert</Button>
                                <Button color='inherit' href="/muisnackbar">Snackbar</Button>
                                <Button color='inherit' href="/muidialog">Dialog</Button>
                                <Button color='inherit' href="/muiprogress">progress</Button>
                                <Button color='inherit' href="/muiskeleton">skeleton</Button>
                                <Button color='inherit' href="/muiloadingbutton">Loading BTN</Button>
                            </div>
                        </div>
                        <div style={{ minWidth: '500px' }} />
                    </div>
                </Toolbar>
            </AppBar>
            <div className='forwardIcon'>
                <IconButton onClick={() => handleScroll(100)}>
                    <ArrowForward />
                </IconButton>
            </div>
        </Box>
    );
};

export default MuiNavbar;
