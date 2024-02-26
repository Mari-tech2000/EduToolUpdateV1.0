import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import CreatePost from './CreatePost';
import CreateEvents from './CreateEvents';
function CreatePage()
{
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    };
    return(
        <>
        <table className='container'>
            <th>Create Post</th>
            <th>
            <FormGroup>
          <FormControlLabel control={<Switch onChange={handleToggle} checked={isToggled} />}  />
         
        </FormGroup>
        </th>
        <th>
            Create Events
        </th>
        </table>
        {isToggled ? <CreateEvents></CreateEvents> : <CreatePost></CreatePost>}
            </>    )
}

export default CreatePage