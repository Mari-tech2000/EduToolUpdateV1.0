
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Events from './events'
import { useState } from 'react';
import Digitalevents from './digitalevents'
import { TextField } from '@mui/material';
function Eventchange()
{
    const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
    return(
        <>
    <table className='container'>
        <th style={{width:"10%"}}>Digital Events</th>
        <th>
        <FormGroup>
      <FormControlLabel style={{marginLeft:"1%"}} control={<Switch onChange={handleToggle} checked={isToggled} />}  />
     
    </FormGroup>
    </th>
    <th style={{width:"10%"}}>
        Physical Events
    </th>
    <th style={{width:"100%"}}><h2 style={{marginLeft:"50%",marginBottom:"1%",marginRight:"5%"}}> <TextField id="outlined-search" label="Search field" type="search" /></h2></th>
    </table>
    {isToggled ? <Events></Events> : <Digitalevents></Digitalevents>}
    
        </>
        
    )
}

export default Eventchange


