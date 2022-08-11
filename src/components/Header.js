import  React,{Component} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';


 class Header extends React.Component{
  render(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '90px' }} color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div"  display='flex' justifyContent='left' alignItem='left' sx={{ flexGrow: 10 ,mt:1 }}>
          Meta-Data
          </Typography>
          <Typography variant="h6" component="div"  display='flex' justifyContent='left' alignItem='left' sx={{ flexGrow: 10 ,mt:1 }}>
          The site for getting user<AssignmentIndRoundedIcon />s information...
          </Typography>

          <Button color="success" variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
}
export default Header
