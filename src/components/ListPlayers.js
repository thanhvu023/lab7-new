import React, {useState, useEffect} from 'react'
import { Grid, Card, CardMedia, CardContent, Container,
        Typography, CardActions, Button } from '@mui/material';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import '../scss/Listplayer.scss';

const ListPlayers = () => {
    const [APIData, setAPIData]= useState([])
    const baseURL="https://6360dd6b67d3b7a0a6b727e1.mockapi.io/api/Mess/htv";
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    useEffect(() => {
      fetch(baseURL)
        .then(res => res.json())
        .then(data => {
          setAPIData(data)
        })
        .catch(error => console.log(error.message))
    }, [])


    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
  return (
    <Container>
    <Grid container spacing={2}> 
    {APIData.map((data)=>{
        return (
        <Grid item xs={4}>
           <Card>
                <CardMedia
                    component="img"
                    height="240"
                    image={'https://i.pinimg.com/564x/bc/32/f1/bc32f18972060f06e8a863f701eb6dbc.jpg'}
                    alt={data.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {data.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{data.email}</Typography>
                    <Typography variant="body2" color="text.secondary">{data.subject}</Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Edit</Button>
                    <Button size="small"  onClick={handleOpen}>Detail</Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       
          
          </Typography>
          <Typography> 
            <h1 style={{color:'black'}}>Main</h1>
            <h2 style={{color:'white'}}>{data.message}</h2>
            <div className="content" >
  <h3>{data.name} </h3>
  <p>{data.subject}</p>
 

</div>
            </Typography>
         
        </Box>
      </Modal>
                </CardActions>
            </Card> 
        </Grid>
    )})}
    </Grid>
    </Container>
  )
}

export default ListPlayers