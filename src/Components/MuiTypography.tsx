import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>H1 heading</Typography>
            <Typography variant='h2'>H2 heading</Typography>
            <Typography variant='h3'>H3 heading</Typography>
            <Typography variant='h4'>H4 heading</Typography>
            <Typography variant='h5'>H5 heading</Typography>
            <Typography variant='h6'>H6 heading</Typography>

            {/* subtile are also h6 with differnt css */}
            <Typography variant='subtitle1'>subtitle1</Typography>
            <Typography variant='subtitle2'>subtile2</Typography>

            {/* body element variant for paragraph tag body1 is default css for Typography tag */}
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis rem fugiat, dolore nulla, maiores quis autem dolores, quod soluta labore veniam ab deleniti tenetur dignissimos debitis quisquam rerum illum.
            </Typography>

            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum distinctio? Voluptas fuga quasi labore molestiae natus vero dolorem iure magnam laboriosam, nisi similique sint, perferendis, dicta aliquam voluptatibus voluptatum!</Typography>

            {/* gutterBottom to add margin bottom to element */}
            <Typography variant='h4' gutterBottom>H4 heading</Typography>

            {/* use h4 element as css but underlying element to be h1.
            h1 tag with h4 elements as css */}
            <Typography variant='h4' component="h1">H4 heading</Typography>
        </div>
    )
}

export default MuiTypography
