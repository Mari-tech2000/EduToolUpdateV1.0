import React from 'react';
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';
import 'U:/website/edutool/src/components/shared/style/blog.css';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//const CreateBlog = () => {
 // const [title, setTitle] = useState('');
  //const [content, setContent] = useState('');

////  const handleSubmit = (e) => {
    //e.preventDefault();
    // Save blog post to database
    // Example: firestore.collection('posts').add({ title, content })
  //};
function CreateBlog(){
  return (
    <> 
      <Card style={{ width:'90%',height:'100%', alignContent: "center",  display: "block", marginLeft:'auto',marginRight: 'auto'}}>
        <Card.Header><b>Create your Blog !</b></Card.Header>
        <Card.Body>
        <TextField
          id="filled-textarea"
          label="Title"
          style={{ width: '100%' }}
          required
          
        />
         <TextField
          id="filled-textarea"
          label="Write Here"
          placeholder='Start Writing !!'
          style={{ width: '100%', marginTop:'2%' }}
          rows={25}
          required
          multiline
        />
        </Card.Body>
        <Stack direction="row" spacing={2}>
      
      <Button variant="contained" className='sendButton' endIcon={<SendIcon />} style={{ marginTop: "2%",marginLeft: '75%',width:"100%"}}>
        POST
      </Button>
    </Stack>
      </Card>

    </>

  );
}

export default CreateBlog;