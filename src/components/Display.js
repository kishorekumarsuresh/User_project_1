import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import VerifiedIcon from '@mui/icons-material/Verified';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Navig from './Navig';
import { useNavigate } from 'react-router-dom';



function Display() {

    const[details,setDetails] = useState(null)
    const [render,setRender] = useState(false);
    const [unames,setUnames]= useState([])


    const navig = useNavigate()

    

    useEffect(()=>{
        let getData = () => {axios.get('https://gorest.co.in/public/v2/users')
        .then(response=>{
            setDetails(response.data)
            setUnames(response.data.name)
        })};
        getData();
    },[render])

    let editHandler = (id)=>{
        // axios.patch(`https://gorest.co.in/public/v2/users/${id}`,{
        //     name:"Super man"
        // }, {
        //     headers:{
        //         Authorization:"Bearer bf0f401f79f16bfff0c3dd99cc7d2395f41b613717f92226522562487ceff6bf"
        //     },    
        // })
        // .then(response => {
        //     console.log("edited")
        // })
        console.log(id)
        console.log(unames)
    }
    let deletehandler = (id)=>{
        axios.delete(`https://gorest.co.in/public/v2/users/${id}`, {
            headers:{
                Authorization:"Bearer bf0f401f79f16bfff0c3dd99cc7d2395f41b613717f92226522562487ceff6bf"
            }
        })
        .then(response => {
            console.log("passed")
            setDetails((prv) => prv.filter(ele=>{
                if (ele.id!== id)
                return true
                else
                return false
            }));
            setRender(true);
        })
    }

    let displayInfo = (uname,email,gen,id) =>{
        alert(`Id:${id}
               Name: ${uname} 
               email: ${email} 
               gender:${gen}
                `)
    }
   return (
    
    <div>
         <Typography><VerifiedIcon color="success"/> -- Active user</Typography>
         <Typography><UnpublishedIcon color="action"/> -- Inactive user</Typography>
         
        {   


            details?
            
            <ul>

                
                {   
                
                    details.map(elem=>{
                        let id = elem.id
                        let uname = elem.name
                        let email = elem.email
                        let gen = elem.gender
                    
                        return(
                        
                        <Card  
                        sx={{ maxWidth: 375 ,mb:1}}
                        key={elem}>
                        
                        <CardContent>
                        

                        < >
                            {/* <h2>{elem.id}</h2> */}
                            <p> Name: {elem.name} {(elem.status==="active")? 
                            <VerifiedIcon color="success"/> :
                            <UnpublishedIcon color="action"/>}</p>
                           
                            {/* <p>{elem.email}</p>
                            <p>{elem.gender}</p> */}
                        </>
                        </CardContent>
                        <CardActions>
                        <Button  variant='contained' size="small" color='success' onClick={()=>{displayInfo(uname,email,gen,id)}}>view</Button>
                        <Button  variant='contained' size="small" color='secondary' 
                        onClick={()=>{editHandler(id)}}>edit</Button>
                        <Button  variant='contained' size="small" color='error' onClick={ () => {deletehandler(id)}}>delete</Button>
                        </CardActions>
                        </Card>
                        )
                        
                    })
               
                } 
                 
                 
                 {/* </center> */}
            </ul>:
            <h3>Loading...!</h3>


            
        }
    </div>
   
  )
}

export default Display
