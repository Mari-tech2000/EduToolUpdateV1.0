import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'U:/website/edutool/src/components/shared/style/settings.css'
function Settings(){


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
         <Button variant="outlined" size="large" style={{marginTop:'5px'}}>
          Save
        </Button>
        </div>
      </Card>
      
      </>

    );
}
export default Settings;