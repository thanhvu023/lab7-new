
import './scss/App2.scss';
import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import  { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import {TextField, FormControl, MenuItem, FormControlLabel, InputLabel, Switch, Select, Typography, AlertTitle, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Alert} from '@mui/material';
import Stack from '@mui/material/Stack';
import AssignmentIcon from '@mui/icons-material/Assignment';
 const Src = () => {
  const regexPhone = "(84|0[3|5|7|8|9])+([0-9]{8})";
  const regexEmail = "(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})";
  const [open, setOpen] = useState();
  const baseURL="https://6360dd6b67d3b7a0a6b727e1.mockapi.io/api/Mess/htv";
  const handleClose = () => {
    setOpen(false);
  };

  const programs = [
      "Software Engineering",
      "Information System",
      "Information Assurance",
      "Internet of Things",
      "Artificial Intelligence",
      "Digital Art & Design",
  ]

  const formik = useFormik({
      initialValues:{
          name:"",
          email:"",
          phone:"",
          program: 0,
          message:"",
         
      },
      onSubmit: (values)=>{    
        fetch(baseURL, {  method: 'POST',
        body: JSON.stringify(values),  headers: {
        'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
        }).then(response =>{
          if(!response.ok){
              throw new Error(`HTTP Status: ${response.status}`)
          }
          return response.json()
        })            
        .then(data => setOpen(true))
        .catch(error => console.log(error.message));
      },
      validationSchema: Yup.object({
          name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
          // email: Yup.string().matches(regexEmail,"Invalid email").required("Required"),
          email: Yup.string().required("Required.").email("Invalid email"),
          phone: Yup.string().matches(regexPhone, "Please enter a valid number not character").required("Required"),
          program: Yup.number().min(1, "Please select a program").integer().typeError("Please select a program."),
          message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
          agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
      }),

     
  });

    return(
        <div className='containerq'>
           
                
            <div className='cardc'>
                <div className='co1'>
                <h1 id='header'>Contact Form</h1>
     <form onSubmit={formik.handleSubmit} className="container-form">
            <TextField
                className="item-form"
                label="Name"
                name="name"
                onBlur={() => formik.setTouched({...formik.touched, name: true})}
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
            <TextField
                className="item-form"
                label="Email"
                name="email"
                onBlur={() => formik.setTouched({...formik.touched, email: true})}
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
            <TextField
                className="item-form"
                label="Phone"
                name="phone"
                onBlur={() => formik.setTouched({...formik.touched, phone: true})}
                value={formik.values.phone}
                onChange={formik.handleChange}
            />
            {formik.errors.phone && formik.touched.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
            <FormControl sx={{ m: 1, minWidth: 600 }} className="item-form">
                <InputLabel id="demo-simple-select-autowidth-label">Contact Subject</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    label="Program of Stydy"
                    name="program"
                    onBlur={() => formik.setTouched({...formik.touched, program: true})}
                    value={formik.values.program}
                    onChange={formik.handleChange}
                >
                    <MenuItem value={0}>
                        <em>Please select</em>
                    </MenuItem>
                    <MenuItem value={1}>Getting acquainted</MenuItem>
                    <MenuItem value={2}>Job exchange</MenuItem>
                    <MenuItem value={3}>Internship job</MenuItem>
                    <MenuItem value={4}>Participating in graduation project</MenuItem>
                    <MenuItem value={5}>Privacy issues</MenuItem>
                    <MenuItem value={6}>Other problems</MenuItem>
                </Select>
                {formik.errors.program && formik.touched.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}
            </FormControl>
            <TextField
                className="item-form"
                id="outlined-multiline-static"
                label="Message detail"
                multiline
                name='message'
                rows={4}
                onBlur={() => formik.setTouched({...formik.touched, message: true})}
                value={formik.values.message}
                onChange={formik.handleChange}
            />
            {formik.errors.message && formik.touched.message &&(<Typography variant="caption" color="red">{formik.errors.message}</Typography>)}
            {/* <FormControlLabel 
                className="item-form"
                control={<Switch/>} 
                label="Agree to terms and conditions." 
                name='agree' 
                onBlur={() => formik.setTouched({...formik.touched, agree: true})}
                value={formik.values.agree} 
                onClick={formik.handleChange}  
            />
            {formik.errors.agree && formik.touched.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)} */}
            <Button type='submit' className="btn-submit" variant="contained" style={{margin:'0 auto'}}>
                Send
            </Button>
        </form>
        <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Congraturation"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      <Alert severity="success">
  <AlertTitle>Adding successful!</AlertTitle>
</Alert>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button href="/list">List</Button>
      <Button autoFocus onClick={handleClose}>
       Close
      </Button>
    </DialogActions>
  </Dialog>
                </div>
                <div className='co2'>
                <h1 style={{paddingLeft:'70px'}}>More contact in here</h1>
                <Stack direction="flex" alignItems="center" spacing={2} paddingLeft='100px'>
      <Button variant="contained" component="label">
        Detail
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <AssignmentIcon />
      </IconButton>
    </Stack>
                    <img src='assets/images/qr.png' alt='' style={{ width: '100%' , height:'100%'}}/>
                </div>
                
            </div>
         
        </div>
    )
}
export default Src