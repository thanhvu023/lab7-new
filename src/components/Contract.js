import React, { useState } from 'react'
import { useFormik } from 'formik'
import "./Contact.scss";
import * as Yup from "yup"
import {TextField, FormControl, MenuItem, FormControlLabel, InputLabel, Button, Switch, Select, Typography} from '@mui/material';

const Contract = () => {
    const regexPhone = "(84|0[3|5|7|8|9])+([0-9]{8})";
    const regexEmail = "(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})";
    const [focused,setFocused] = useState(false);
    const handleFocused = (e) =>{
        setFocused(true);
    }

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
            agree:false
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
        onSubmit: (values)=>{    
            values.program = programs[values.program]
            alert(JSON.stringify(formik.values))
        },
    });

    console.log(formik)

    return (
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
                <InputLabel id="demo-simple-select-autowidth-label">Program of Study</InputLabel>
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
                    <MenuItem value={1}>Software Engineering</MenuItem>
                    <MenuItem value={2}>Information System</MenuItem>
                    <MenuItem value={3}>Information Assurance</MenuItem>
                    <MenuItem value={4}>Internet of Things</MenuItem>
                    <MenuItem value={5}>Artificial Intelligence</MenuItem>
                    <MenuItem value={6}>Digital Art & Design</MenuItem>
                </Select>
                {formik.errors.program && formik.touched.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}
            </FormControl>
            <TextField
                className="item-form"
                id="outlined-multiline-static"
                label="Message"
                multiline
                name='message'
                rows={4}
                onBlur={() => formik.setTouched({...formik.touched, message: true})}
                value={formik.values.message}
                onChange={formik.handleChange}
            />
            {formik.errors.message && formik.touched.message &&(<Typography variant="caption" color="red">{formik.errors.message}</Typography>)}
            <FormControlLabel 
                className="item-form"
                control={<Switch/>} 
                label="Agree to terms and conditions." 
                name='agree' 
                onBlur={() => formik.setTouched({...formik.touched, agree: true})}
                value={formik.values.agree} 
                onClick={formik.handleChange}  
            />
            {formik.errors.agree && formik.touched.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
            <Button type='submit' className="btn-submit" variant="contained">
                Send
            </Button>
        </form>
      )
}