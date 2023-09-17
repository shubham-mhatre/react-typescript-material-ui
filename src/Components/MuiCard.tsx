import { Box, Card, CardContent, Typography,CardActions,Button,
CardMedia } from '@mui/material'


const MuiCard = () => {
    return (
        <Box width={'300px'}>
            <Card variant='outlined' style={{backgroundColor:"#DEECF4"}}>
                <CardMedia component='img' height='140px' 
                image='https://source.unsplash.com/random'
                alt='unsplash image'/>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        React is a JavaScript library for rendering user interfaces (UI). 
                        UI is built from small units like buttons, text, and images. 
                        React lets you combine them into reusable, nestable components. 
                        From web sites to phone apps, everything on the screen can be broken down into components
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Lear more</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard
