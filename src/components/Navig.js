import React from 'react'
import {Link} from 'react-router-dom'

function Navig() {
  return (
    <nav>
    <div>
    <ul style={{display:"flex" ,
                justifyContent:"space-evenly" ,
                flexDirection:"row" ,
                backgroundColor: 'rgb(255, 255, 128)',
                border:'2px solid black',
                height:'30px',
                textDecoration:'none',
                marginTop:'2px'
                }}>

        <li style={{}}><Link to='/'>Home</Link></li>

        <li><Link to='/display'>Display</Link></li>

        <li><Link to='/create'>Create</Link></li>

        <li> <Link to='/edit'>Edit</Link></li>

        
    </ul>
    </div>

    </nav>
  )
}

export default Navig
