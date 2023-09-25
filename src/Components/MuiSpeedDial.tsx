import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'


const MuiSpeedDial = () => {
    return (
        <>
            <SpeedDial ariaLabel='navigation speed dial' icon={<SpeedDialIcon />}>
                <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' />
                <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' />
                <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' />
            </SpeedDial>

            <p>tooltip open prop</p>

            <SpeedDial ariaLabel='navigation speed dial' icon={<SpeedDialIcon />}>
                <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' tooltipOpen />
                <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' tooltipOpen/>
                <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' tooltipOpen/>
            </SpeedDial>
        </>
    )
}

export default MuiSpeedDial
