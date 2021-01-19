import React from "react";
import b1 from './d1.jpg'
import b2 from './d3.jfif'
import b3 from './d3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Dessert() {
  return (
    <div className="breakfast">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'maroon',paddingTop:'6px'}} >Desserts</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b1} />
  <Card.Body>
    
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=no2OABEwsKo" target="_blank" style={{color:'black'}}>Ras Malai</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b2} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=Gz0FjmjTIh8" target="_blank" style={{color:'black'}}>Trifle</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b3} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=hCytP2U4Gdo" target="_blank" style={{color:'black'}}>seviyan</a>
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Dessert;