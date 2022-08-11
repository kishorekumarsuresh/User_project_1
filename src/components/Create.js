import { FormControl, FormLabel, TextField } from '@mui/material'
import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios'




class Create extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       id:"",
       name:"",
       email:"",
       gender:"male",
       status:"active"
    }
  }
    changeValue = (e) =>{
      this.setState({[e.target.name]:e.target.value})
    }

    handleButton = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
         .then(res =>{
            console.log(res)
            
            
         })
         .catch(err => {
            console.log(err)
         })
    }



  render() {
    return (
      <div>
        <Typography sx ={{mr:85}}variant='h5'>Are you new User?</Typography>
        <br/>
        <FormControl>
        <Typography sx ={{mr:55}}variant='body1'>Username</Typography>
        <TextField label='Enter your name'
        color='success'
        name="name"
        value={this.state.name}
        onChange={this.changeValue}
        variant='outlined'/>
        <Typography sx ={{mr:55}}variant='body1'>Email-id</Typography>
        <TextField label='Enter your email-id'
        color='success'
        name="email"
        value={this.state.email}
        onChange={this.changeValue}
        variant='outlined'/>
        <Typography sx ={{mr:45}}variant='body1'>Select your Gender</Typography>
        <RadioGroup
        row
        onChange={this.changeValue}
        value={this.state.gender}
        name="gender"
        >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
      <Button variant="contained" color='success' onClick={this.handleButton}>Submit</Button>
        </FormControl>

        
      </div>
    )
  }
}

export default Create

