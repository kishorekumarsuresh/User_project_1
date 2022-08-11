
import React from 'react'
import { TextField ,FormControl, Box, Button, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {useState,useEffect} from 'react'
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
//import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import ManSharpIcon from '@mui/icons-material/ManSharp';
import WomanSharpIcon from '@mui/icons-material/WomanSharp';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

//import Navig from './Navig';
//import { CardMedia } from '@material-ui/core';
//import { Container } from '@mui/system'
//import Grid from '@mui/material/Grid';



function Home() {


  const[details,setDetails] = useState(null)

  const[searchTerm,setSearchterm] = useState("")

  useEffect(()=>{
    let getData = () => {axios.get('https://gorest.co.in/public/v2/users')
    .then(response=>{
        setDetails(response.data)
    })};
    getData();
},[])
    
  return (
    //<Container>
    <div>
      
       <Box
       sx={{m:5, color: 'text.primary',}}>
       <FormControl >
        
       <TextField  
        sx={{width:400}}
       label='Search by name ,email ,gender'
       color='success'
       value={searchTerm}
       onChange={(e)=>{
        setSearchterm(e.target.value)
       }}
       variant='outlined'
       align='center'
       required/>
       <Button
        sx={{ml:13,mr:3,mt:1,width:170}}
        variant='contained'
        endIcon={ <SearchIcon/>}
        >
        Search
       </Button>
       <br/>
       <br/>
       <br/>
       </FormControl >
       </Box>
       <div>
        <Typography sx ={{mr:6}}variant='h5'>User Details</Typography>
        {   


            details?
            
            <p>

                
                {   
                
                    details.map(elem=>{
                        let id = elem.id
                        let gen = elem.gender
                        const G = <p></p>
                        return(
                        <Box display='flex' justifyContent='center' alignItem='center'>
                        <span>
                        <Card  
                        sx={{ width: 395 ,mb:1,ml:1}}>

                        <CardMedia sx={{ml:22 ,mt:2}}>
                        
                        <Avatar src="/broken-image.jpg" />
                        
                        </CardMedia>
                        
                        <CardContent>
                        

                        <p >
                            {/* <h2>ID:{elem.id}</h2> */}
                            <p><b>Name:</b>{elem.name} </p>
                            
                            <p> <Grid conatianer direction="column" alignItems="left"><AttachEmailRoundedIcon src={{mt:11}}/></Grid> &nbsp; {elem.email}</p>
                            
                           
                        </p>
                        </CardContent>

                        </Card>
                        </span>
                        </Box>
                        )
                        
                    })
               
                } 
                 
                 
                 
            </p>:
            <h3>Loading...!</h3>


            
        }
    </div>
   
       

       
      <Stack spacing={2} sx={{ml:64,mb:15,mt:7}}>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={10} color="primary" />
      </Stack>


    </div>
    //</Container>
  )
}

export default Home


