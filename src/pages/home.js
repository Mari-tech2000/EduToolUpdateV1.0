//import Button from 'react-bootstrap/Button';
//import { useState,useEffect } from "react";
import { Route,Routes } from "react-router-dom";
import React from 'react';
import "U:/website/edutool/src/components/shared/style/style.css";
import Logins from "./login";
import Register from "./register";
import { Card } from "react-bootstrap";
function Home(){
   
return(
  <>

  <div className="column text-content" >
    <h2>Search for events near you !</h2>
    <p>Explose yourself to the world <br></br>Create a Account Now !  </p>
  </div>
  <div className="column text-content" style={{marginRight:"auto",marginLeft:"auto"}}>
    <Card>
  <Routes>
    <Route path="/" element={<Logins></Logins>}></Route>
   
    <Route path="/register" element={<Register></Register>}></Route>
  </Routes>
  </Card>
  </div>

  </>
);
}

export default Home;