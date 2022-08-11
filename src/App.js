import React  from 'react';
import './App.css';
import Home from './components/Home';
import Display from './components/Display';
import Login from './components/Login'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete'
import Navig from './components/Navig';
import PageNotFound from './components/PageNotFound';
import Typography from '@mui/material/Typography';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import Header from './components/Header';


function App() {
  return (
    <div className="App" >
     <Header/>
   <BrowserRouter> 

        
        
       <Navig/>
       
        <Routes>
          
            <Route path='/' element={<Home/>}/>
            <Route path='/display' element={<Display/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/delete' element={<Delete/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      


      </BrowserRouter>

      
      
    </div>
  )
}

export default App;
