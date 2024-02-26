import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import "U:/website/edutool/src/components/shared/style/CreatePost.css";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function CreateEvents()
{
    const [file, setFile] = useState();
    const [showTextBox,setShowTextBox] = useState(false);
    const handleCheckboxChange=()=>{
      setShowTextBox(!showTextBox);
    };
   
 
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
   
  }
  
    return(
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          
        ]}
      ></DemoContainer>
        <Card style={{ width: '30rem' }} className='containerPost'>
      <Card.Body>
        <Card.Title className='conten-align'><b>Create Events</b></Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <div className="App">
          

            <input type="file" onChange={handleChange} accept='image/*' />
            <img src={file} className='imgSyle'  alt=''/>
        </div>
        <TextField
          id="outlined-multiline-flexible"
          style={{ width: '100%', marginTop:'2%' }}
          label="Event Name"
          required
        />
        <TextField
           id="outlined-multiline-flexible"
          label="About your Event"
          style={{ width: '100%', marginTop:'2%' }}
          required
          multiline
        /> 
         <TextField
           id="outlined-multiline-flexible"
          label="Organisation Name"
          style={{ width: '100%', marginTop:'2%' }}
          required
          
        /> 
        <p className='labelE'>Event Date</p>
         <DemoItem style={{marginTop:"5%"}}>
          <DateTimePicker defaultValue={dayjs('2024-02-24T15:30')} />
        </DemoItem>
          <TextField
          id="outlined-multiline-flexible"
          style={{ width: '100%', marginTop:'2%' }}
          label="Phone Number"
          required
        />
        <TextField
          id="outlined-multiline-flexible"
          style={{ width: '100%', marginTop:'2%' }}
          label="Enter Website Link"
          required
        />
        <div style={{width:"100%"}}>
        <label className='checkbox-label'>
          <input type='checkbox' onChange={handleCheckboxChange}checked={showTextBox} />
         <p style={{display:"inline-block"}}>Physical Event</p> </label>
        {showTextBox&&  <TextField
          id="outlined-multiline-flexible"
          style={{ width: '100%', marginTop:'2%' }}
          label="Enter Location Link"
          required
        /> }
        
        </div>
      </Form.Group>
    </Form>

        <Button variant="warning" style={{width:"100%",marginTop:"1%"}}>Submit</Button>
      </Card.Body>
    </Card>
    </LocalizationProvider>
        </>
    )
}

export default CreateEvents;