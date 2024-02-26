import { useState } from 'react';
import {  Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import Typography from '@mui/material/Typography';

function Counter() {
    const [counter, setCounter] = useState(0)

    const changeCounter = (val: number) => {
        if (counter <= 0 && val == -1) {
            setCounter(0)
        } else {
            setCounter(counter => counter + val)
        }
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', minWidth: '100vw' }}>
            <Card sx={{ minHeight: '100vh', maxHeight: '-webkit-fill-available;', minWidth: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Typography fontSize={120} gutterBottom variant="h2" component="div" textAlign="center" marginTop='15rem'>
                    {counter}
                </Typography>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                        Dankbarkeit
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button size="small" sx={{ padding: '20px' }} onClick={() => changeCounter(-1)}><RemoveSharpIcon fontSize='large' /></Button>
                    <Button size="small" sx={{ padding: '20px' }} onClick={() => changeCounter(1)}><AddCircleOutlineSharpIcon fontSize='large' /></Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Counter