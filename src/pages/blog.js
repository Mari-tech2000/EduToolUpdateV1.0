import * as React from 'react';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import {Link} from 'react-router-dom';

function Blog(){
  const actions = [
 
    { icon: <NoteAddOutlinedIcon />, name: 'Create Blog', src:'/createblog' },
   ];
    return(
      
        <>
        
        <h3>Create Blog</h3>
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
    
export default Blog;