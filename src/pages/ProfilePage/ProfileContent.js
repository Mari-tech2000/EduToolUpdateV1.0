import * as React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imagess from 'U:/website/edutool/src/components/images/poster/Event3.jpg'
import imagesss from 'U:/website/edutool/src/components/images/poster/Event4.jpg'
import imagessss from 'U:/website/edutool/src/components/images/poster/Event5.png'
import 'U:/website/edutool/src/pages/ProfilePage/ProfileStyle.css'

function ProfileContent(){
    return(
<>
<h4>This is my profile page</h4>

<Row xs={1} md={2} className="g-4" style={{display:'flex',flexWrap:'wrap' }}>
     
        <Col >
          <Card>
            <Card.Img variant="top" src={imagess} className='CardImage' />
            <Card.Body>
              <Card.Title>Event 1</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
 

        <Col >
          <Card>
            <Card.Img variant="top" src={imagesss}  className='CardImage' />
            <Card.Body>
              <Card.Title>Event 2</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Body>
              <Card.Title>Event 2</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src= {imagessss} className='CardImage' />
            <Card.Body>
              <Card.Title>Event 2</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>

</>
    )
}

export default ProfileContent