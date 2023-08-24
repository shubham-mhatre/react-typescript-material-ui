import React from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { useState } from 'react';

const MuiButton = () => {
    const [formats,setFormats] = useState<String[]>([]);
    
    console.log(formats);

    const handleFormatChange=(_event:React.MouseEvent<HTMLElement>,updateFormat:String[])=>{
            setFormats(updateFormat);
    }

    return (
        <Stack spacing={2}>
            {/* types of buttons  start*/}
            <h5>Button Types</h5>
            <Stack spacing={2} direction={'row'}>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            {/* types of buttons ends */}

            {/* types of color for buttons starts */}
            <h5>Button colors</h5>
            <Stack spacing={2} direction={'row'}>
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color="error">error</Button>
                <Button variant='contained' color="warning">warning</Button>
                <Button variant='contained' color="info">info</Button>
                <Button variant='contained' color="success">success</Button>
            </Stack>
            {/* types of color for buttons ends */}

            {/* size for buttons starts */}
            {/* for size of button, display block is provided coz by default
            display is flex and size won't apply properly for display flex */}
            <h5>Button size</h5>
            <Stack display={'block'} spacing={2} direction={'row'}>
                <Button variant='contained' size='small'>small</Button>
                <Button variant='contained' size='medium'>medium</Button>
                <Button variant='contained' size='large'>large</Button>
            </Stack>
            {/* size for buttons ends */}

            {/* icons with buttons start */}
            <h5>Button icons</h5>
            <Stack spacing={2} direction={'row'}>
                <Button variant='contained' startIcon={<ShareIcon/>}>share</Button>
                <Button variant='contained' endIcon={<ShareIcon/>}>share</Button>
                <IconButton color='success' size='medium'>
                    <ShareIcon/>
                </IconButton>
            </Stack>
            {/* icons with buttons ends */}

            {/* button group starts */}
            <Stack spacing={2} direction={'row'}>
                <ButtonGroup variant='outlined' orientation='vertical'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            {/* button group ends */}

            <Stack direction={'row'}>
                <ToggleButtonGroup value={formats} onChange={handleFormatChange}>
                    <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack> 
            
        </Stack>
    )
}

export default MuiButton
