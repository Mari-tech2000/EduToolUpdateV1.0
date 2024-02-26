import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Button } from 'react-bootstrap';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function SearchModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <FilterAltOutlinedIcon  sx={{ color: 'action.active', mr: 1, my: 0.5 }} onClick={handleOpen}/>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
         
        >
          <Box sx={style}>
          <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        City
        options={City.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
       <Autocomplete
        id="free-solo-demo"
        City
        options={Department.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Department" />}
      />
  <Button>Submit</Button>
    </Stack>
    
          </Box>
        </Modal>
      </div>
    );
  }
  const City = [
    { title: 'Coimbatore' },
    { title: 'Chennai'}, 
  ];
  const Department = [
    { title: 'Medical' },
    { title: 'Engineering'}, 
    {title:'Arts and Science'}
  ];