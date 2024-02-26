import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import "U:/website/edutool/src/components/shared/style/CreatePost.css";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function CreatePost()
{
  const [file, setFile] = useState();
 
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
    return(

        <>
        <Card style={{ width: '30rem' }} className='containerPost'>
      <Card.Body>
        <Card.Title className='conten-align'><b>Create Post</b></Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <div className="App">
          
            <input type="file" onChange={handleChange} accept='image/*,.pdf' />
            <img src={file} className='imgSyle'  alt=''/>
        </div>
        
        <TextField
          id="filled-textarea"
          label="What's on your mind?"
          style={{ width: '100%', marginTop:'2%' }}
          multiline
          variant="filled" 
        /> 
      </Form.Group>
      <FormControlLabel required control={<Checkbox />} label="Private" />
    </Form>

        <Button variant="warning">Submit</Button>
        <p style={{fontSize:'10px'}}>* Make your post private no one other than you can view this post</p>
      </Card.Body>
    </Card>
        </>
    )
}

export default CreatePost