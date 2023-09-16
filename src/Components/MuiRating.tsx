import { Stack, Rating } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/Favorite'



const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null);
    const [valueprec, setValuePrec] = useState<number | null>(null);
    console.log({ value });
    console.log({ valueprec });

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    }

    const handleChangePrec = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValuePrec(newValue);
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2}>
                <Rating value={value} onChange={handleChange} />
            </Stack>

            <p>precision so that we can select half value as well</p>
            <Stack spacing={2}>
                <Rating value={valueprec} onChange={handleChangePrec} precision={0.5}/>
            </Stack>
            <p>Favourite Icon</p>
            <Stack spacing={2}>
                <Rating value={valueprec} onChange={handleChangePrec}
                icon={<FavoriteIcon fontSize='inherit' color='error'/>}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}/>
            </Stack>

            <p>Highlight selected</p>
            <Stack spacing={2}>
                <Rating value={valueprec} onChange={handleChangePrec}
                icon={<FavoriteIcon fontSize='inherit' color='error'/>}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
                highlightSelectedOnly/>
            </Stack>
        </Stack>

    )
}

export default MuiRating
