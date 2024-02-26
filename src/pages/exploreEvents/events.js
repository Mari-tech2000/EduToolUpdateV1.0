
import 'U:/website/edutool/src/pages/exploreEvents/event.css';
import Geolocation from '../../components/shared/GeoLocation';
import React from 'react';
const cardData = [
  { id: 1, title: 'Card 1', description: 'This is card 1 description.', imageUrl:require('U:/website/edutool/src/components/images/test.png') },
  { id: 2, title: 'Card 2', description: 'This is card 2 description.', imageUrl:require('U:/website/edutool/src/components/images/poster/Event1.png') },
  { id: 3, title: 'Card 3', description: 'This is card 3 description.', imageUrl:require('U:/website/edutool/src/components/images/poster/Event2.jpg') },
  { id: 4, title: 'Card 4', description: 'This is card 3 description.', imageUrl:require('U:/website/edutool/src/components/images/poster/Event3.jpg') },
  { id: 5, title: 'Card 5', description: 'This is card 3 description.', imageUrl:require('U:/website/edutool/src/components/images/poster/Event4.jpg') },
  { id: 6, title: 'Card 6', description: 'This is card 3 description.', imageUrl:require('U:/website/edutool/src/components/images/poster/Event5.png') },
  { id: 7, title: 'Card 7', description: 'This is card 3 description.', imageUrl: 'https://via.placeholder.com/250' },
  { id: 8, title: 'Card 8', description: 'This is card 3 description.', imageUrl: 'https://via.placeholder.com/250' },
  { id: 9, title: 'Card 9', description: 'This is card 3 description.', imageUrl: 'https://via.placeholder.com/250' },
  { id: 10, title: 'Card 10', description: 'This is card 3 description.',imageUrl:require('U:/website/edutool/src/components/images/poster/Event6.png') },

];

const Card = ({ title, description, imageUrl }) => {
  const handleRegisterClick=()=>{
    alert('Register button clicked for '+{title}+' card.')
  }
  const onClick = () => {
    window.open ('https://maps.app.goo.gl/N4FHyUMZmdgLmJ2RA','_blank');
  }
  
  return (
    <>
    <div className="card">
      <img src={imageUrl} alt={title} className='content-align card1' />
      <h3 className='content-align'>{title}</h3>
      <p className='content-align'>{description}</p>
      <button className='button' onClick={handleRegisterClick}>Register</button>
      <button className='button'onClick={onClick}>Get Direction</button>
<Geolocation></Geolocation>
    </div></>
  );
};

const Events = () => {
    return (
      <div className="app">
        {cardData.map(card => (
          <Card key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} buttonText={card.buttonText} />
        ))}
      </div>
    );
  };
  
  
    
    export default Events;