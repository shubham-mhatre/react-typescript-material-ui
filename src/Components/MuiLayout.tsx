import { Box, Stack, Divider, Grid, Paper, TextField,Button } from '@mui/material'
import React from 'react'

const MuiLayout = () => {
    return (
        <>
            <p>Layout : Box</p>
            {/* by default box is div tag. we can specifiy other tag using component attr. */}
            {/* <Box component={'span'}>
                Box as span
            </Box> */}

            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white', width: '100px',
                height: '100px', padding: '16px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}>
                text here
            </Box>

            {/* also we can use lot of mui css property directly as props on Box component */}
            <Box display='flex' height='100px' width='100px'
                bgcolor='success.light'
                p={2}>{/*by default multiple of 8 pixle so 2*8=16px*/}
            </Box>

            <p>Layout : Stack : for one dimensional layout</p>
            <p>direction row</p>
            <Stack sx={{ border: '1px solid' }} direction={'row'} spacing={2}
                divider={<Divider orientation='vertical' flexItem />}> {/*column is the default style, we used direction row here*/}
                <Box sx={{
                    backgroundColor: 'primary.main', color: 'white', width: '100px',
                    height: '100px', padding: '16px', '&:hover': { backgroundColor: 'primary.light' }
                }}> text here </Box>
                <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2} />
            </Stack>

            <p>direction row reverse</p>
            <Stack sx={{ border: '1px solid' }} direction={'row-reverse'} spacing={2}> {/*column is the default style, we used direction row here*/}
                <Box sx={{
                    backgroundColor: 'primary.main', color: 'white', width: '100px',
                    height: '100px', padding: '16px', '&:hover': { backgroundColor: 'primary.light' }
                }}> text here </Box>
                <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2} />
            </Stack>

            <p>direction column</p>
            <Stack sx={{ border: '1px solid' }} direction={'column'} spacing={2}> {/*column is the default style, we used direction row here*/}
                <Box sx={{
                    backgroundColor: 'primary.main', color: 'white', width: '100px',
                    height: '100px', padding: '16px', '&:hover': { backgroundColor: 'primary.light' }
                }}> text here </Box>
                <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2} />
            </Stack>

            <p>direction column reverse</p>
            <Stack sx={{ border: '1px solid' }} direction={'column-reverse'} spacing={2}> {/*column is the default style, we used direction row here*/}
                <Box sx={{
                    backgroundColor: 'primary.main', color: 'white', width: '100px',
                    height: '100px', padding: '16px', '&:hover': { backgroundColor: 'primary.light' }
                }}> text here </Box>
                <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2} />
            </Stack>

            <p>Layout : Grid component : for two dimensional Layout</p>

            <Grid container my={4}>
                <Grid item xs={12} sm={6}> {/*xs for small device like mobile, sm for laptop etc*/}
                    <Box bgcolor={'primary.light'} p={2}>Item 1</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor={'primary.light'} p={2}>Item 2</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor={'primary.light'} p={2}>Item 3</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor={'primary.light'} p={2}>Item 4</Box>
                </Grid>
            </Grid>

            <p>equal width & spacing</p>
            <Grid container my={4} spacing={2}>
                <Grid item xs> {/*xs for small device like mobile, sm for laptop etc*/}
                    <Box bgcolor={'primary.light'} p={2}>Item 1</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor={'primary.light'} p={2}>Item 2</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor={'primary.light'} p={2}>Item 3</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor={'primary.light'} p={2}>Item 4</Box>
                </Grid>
            </Grid>

            <p>paper component : white background & elevation just like login form etc</p>
            <Paper elevation={4} style={{textAlign:'center'}}>
                <Box >
                    <TextField label='Name' variant='filled'/>
                </Box>
                <Box my={2}>
                    <TextField label='email' variant='filled' />
                </Box>
                <Button variant='contained' color='primary'>primary</Button>
            </Paper>
        </>
    )
}

export default MuiLayout
