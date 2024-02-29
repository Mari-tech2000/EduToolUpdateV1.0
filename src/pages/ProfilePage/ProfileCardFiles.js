import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ProfileContent from './ProfileContent';
function ProfileCardFiles()
{
return(
    <>
    <Card style={{width:'90%', margin:'25px'}}>
        <CardContent>
            <h3>Uploads</h3>
            <ProfileContent></ProfileContent>
        </CardContent>
    </Card>
    </>
)
}

export default ProfileCardFiles