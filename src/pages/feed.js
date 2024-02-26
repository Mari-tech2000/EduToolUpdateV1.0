import * as React from 'react'
import "U:/website/edutool/src/components/shared/style/feed.css"
import MyImage from 'U:/website/edutool/src/components/images/Post1.jpg'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import Test from 'U:/website/edutool/src/components/images/test.png'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import {Link} from 'react-router-dom';
import { deepOrange, deepPurple} from '@mui/material/colors';
function Feed(){

  const actions = [
 
   { icon: <HelpOutlineOutlinedIcon />, name: 'Ask Anything', src:'/help' } ,
    
   { icon: <NoteAddOutlinedIcon />, name: 'Create', src:'/createpost' },
  ];

return(
     <>
     <div className="conten-align">
 <Card style={{ width: '29rem' }} className="container">
  <table>
    <th>
 <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Remy Sharp" style={{marginBottom:'10px'}}>U</Avatar>
 </th><th>
  <h5 style={{marginLeft:'20px'}}>User 1</h5>
 </th>
 </table>
      <Card.Img variant="top" src={MyImage} style={{width:'100%'}} />
      <Card.Body  className="text-align">
      <table style={{ width: '100%',textAlign:'center',marginTop:'10px' }}>
          <th><FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon></th>
          <th><LibraryAddRoundedIcon></LibraryAddRoundedIcon></th>
          <th><SendRoundedIcon></SendRoundedIcon></th>
        </table> 
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div>
        <TextField
          id="filled-textarea"
          label="Comments"
          style={{ width: '100%' }}
          multiline
          variant="filled" 
        />
        </div>
      </Card.Body>
    </Card>
    <br></br>
    <Card style={{ width: '29rem' }} className="container">
    <table>
    <th>
 <Avatar sx={{ bgcolor: deepPurple[500] }} alt="Remy Sharp" style={{marginBottom:'10px'}}>U</Avatar>
 </th><th>
  <h5 style={{marginLeft:'20px'}}>User 2</h5>
 </th>
 </table>
      <Card.Img variant="top" src={Test}  style={{width:'100%'}}/>
      <Card.Body className="text-align">        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <table style={{ width: '100%',textAlign:'center',marginTop:'10px' }}>
          <th><FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon></th>
          <th><LibraryAddRoundedIcon></LibraryAddRoundedIcon></th>
          <th><SendRoundedIcon></SendRoundedIcon></th>
        </table> 
        <TextField
          id="filled-textarea"
          label="Comments"
          style={{ width: '100%' }}
          multiline
          variant="filled" 
        /> 
      </Card.Body>
    </Card>
    <Card style={{ width: '29rem' }} className="container">   
    <table>
    <th>
 <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Remy Sharp" style={{marginBottom:'10px'}}>U</Avatar>
 </th><th>
  <h5 style={{marginLeft:'20px'}}>User 3</h5>
 </th>
 </table>
      <Card.Body className="text-align">        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>    
        <table style={{ width: '100%',textAlign:'center',marginTop:'10px' }}>
          <th><FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon></th>
          <th><LibraryAddRoundedIcon></LibraryAddRoundedIcon></th>
          <th><SendRoundedIcon></SendRoundedIcon></th>
        </table> 
        <TextField
          id="filled-textarea"
          label="Comments"
          style={{ width: '100%' }}
          multiline
          variant="filled"
        />
      </Card.Body>
    </Card> 
    </div>

    <Box sx={{ transform: 'translateZ(0px)'}} className="feedback">
      <SpeedDial
        ariaLabel="Create"
        sx={{ position: 'right-bottom' }}
        icon={<SpeedDialIcon />
        }>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            component={Link} to={action.src}
        />
        ))}
      </SpeedDial>
    </Box>

    </>
  );
}
    
export default Feed;