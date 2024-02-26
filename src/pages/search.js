import * as React from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; 
import SearchModal from './Search/SearchModal';
import 'U:/website/edutool/src/pages/Search/searchmodal.css'
import  { useState, useEffect } from 'react';
import 'U:/website/edutool/src/pages/Search/search.css'
const ImageCard = ({ image }) => {
    return (
      <div className="image-gallery">
        <img src={image} alt="random"  className="image-gallery"/>
      </div>
    );
  };

function Search(){
     const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r);
    };
    const imagesArray = importAll(require.context('U:/website/edutool/src/components/images/poster', false, /\.(png|jpe?g|svg)$/));
    // Shuffle images array
   
    const shuffledImages = imagesArray.sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  }, []);

    return(
    <>
    <div className='search'>
        <Box sx={{ '& > :not(style)': { m: 1 } }} >
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Search" variant="standard" />
          <SearchModal/>
        </Box>
      </Box>

      <div className='image-gallery'>
      {images.slice(0, 10).map((image, index) => (
        <ImageCard key={index} image={image}  />        
      ))}

      </div>
         </div>
    </>
    );
}
    
export default Search;