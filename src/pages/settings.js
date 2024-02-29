import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import 'U:/website/edutool/src/components/shared/style/settings.css'
function Settings(){
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
const now = 100;
    return(
        <>
        <Card className="settings1" style={{width:'95%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
        <Card.Title><b>Settings</b></Card.Title>
       <table style={{width:'100%'}}>
        <th style={{width:'10%'}}>
        <Col xs={6} md={4}>
          <Image src="https://via.placeholder.com/100" roundedCircle />
        </Col>
        </th>
        <th style={{width:'100%'}}>      
         
         <p>User details</p>
        </th>
          </table>
          <TextField
          id="outlined-read-only-input"
          label="Username"
          defaultValue="@Username"
          style={{width:'55%'}}
       
          InputProps={{
            readOnly: true,
          }}
        />
          <div className='textStyle'>
          <TextField
          id="outlined-password-input"
          label="Current Password"
          type="password"
          style={{marginTop:'5px',width:'55%'}}
          autoComplete="current-password"
        /></div>
         <TextField
         style={{marginTop:'10px',width:'55%'}}
          id="outlined-password-input"
          label="New Password"
          type="password"
          autoComplete="current-password"
        />
        <div>
           
        <ProgressBar now={now} label={`${now}% Storage Used`} style={{backgroundColor: "green", marginLeft: '22.5%', width: '55%',marginTop:'20px', borderRadius:'80px',color:'white'}}/>

        </div>
      
       
        <div>
         <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Public"
          labelPlacement="start"
        /> Private</div>
        <div>
         <Button variant="outlined" size="large" style={{marginTop:'5px'}}>
          Save
        </Button>
       <Link to='/feed'> <Button variant="contained" size="large" style={{marginTop:'5px',marginLeft:'5px'}}>
          Cancel
        </Button></Link>
        </div>
        <div style={{marginLeft:'45%',width:'50%'}}>
          <br></br>
          <Row>
      <Col>
        <Button onClick={toggleShowA} style={{color:'red'}}>
          Delete Account
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          
          <Toast.Body>Delete Account?</Toast.Body>
        <Link to='/settings'>  <Button variant="contained" size="small" style={{marginTop:'5px',marginLeft:'5px'}}>
          Cancel
        </Button></Link>
          <Link to='/'><Button variant="contained" size="small" style={{marginTop:'5px',marginLeft:'5px'}}>
          Delete
        </Button></Link>
        </Toast>
      </Col>
     
    </Row>
        </div>
      </Card>
      
      </>

    );
}
export default Settings;