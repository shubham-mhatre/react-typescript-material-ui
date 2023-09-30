import { Tooltip, IconButton, Box, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'


const MuiTooltip = () => {
    return (
        <Box mt={15} ml={15}>
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <br></br><br></br>

            <p>position : overall 12 placements for tootip</p>
            <Stack direction={'row'} spacing={2}>
                <Tooltip title="Delete" placement='left'>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete" placement='bottom'>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete" placement='top'>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete" placement='right'>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Stack>

            <p>arrow</p>
            <Tooltip title="Delete" placement='right' arrow>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <p>enter delay & leave delay</p>
            <Tooltip title="Delete" placement='right' arrow
            enterDelay={500} leaveDelay={200}>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default MuiTooltip
