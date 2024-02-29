import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import {ProfileImg} from 'U:/website/edutool/src/components/shared-image/profile-user.png'
import { Button } from 'react-bootstrap';
function ProfileCard(){
    return(
    <>
      <div style={{textAlign:'center', margin:'50px'}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
   <div style={{marginTop:'18px'}}><Avatar
  alt="Remy Sharp"
  src= {ProfileImg} 
  sx={{ width: 100, height: 100, marginLeft:'113px' }}
/></div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            User Name
          </Typography>
          <Typography gutterBottom variant="body2" style={{marginLeft:'-15px'}} >
            <SchoolTwoToneIcon style={{marginTop:'-6px'}}/>College Name 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I'm a Student and I'm passionate
          </Typography>
          <table style={{textAlign:'center', width:'100%'}}>
            <th>
             258
            </th><th>45</th>
            <th>
                100
            </th>
          </table>
          <table style={{textAlign:'center', width:'100%'}}>
            <th>
             <Button>Follow</Button>
            </th>
            <th>
                <Button>Message</Button>
            </th>
          </table>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
    )
}
export default ProfileCard;