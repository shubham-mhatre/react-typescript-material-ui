import { Avatar, Chip, Stack } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import React,{useState} from 'react'


const MuiChip = () => {
    const [chips,setChip]=useState(['chip 1','chip 2','chip 3']);
    const handleDelete =(chipsToDelete:string) =>{
        setChip((chips)=>chips.filter((chip)=> chip !== chipsToDelete))
    }
    return (
        <>
        <Stack direction={'row'} spacing={1} mt={10} ml={10}>
            <Chip label='chip' />
            <Chip label='chip outlined' color='secondary' variant='outlined' />
            <Chip label='chip outlined' color='secondary' variant='outlined'
                avatar={<Avatar>V</Avatar>} />
            <Chip label='chip icon' color='primary' variant='outlined'
                 icon={<FaceIcon />} />

            <Chip label="click" color='success' onClick={()=> alert('clicked')}/>

            <Chip label="Delete" color='error' onClick={()=> alert('clicked')}
            onDelete={()=>alert("delete clicked")}/>     

            

        </Stack>
        <Stack direction={'row'} spacing={1} mt={10} ml={10}>
            {
                chips.map((rs)=>(
                    <Chip key={rs} label={rs} onDelete={()=>handleDelete(rs)}/>
                ))
            }
        </Stack>
        </>
    )
}

export default MuiChip
