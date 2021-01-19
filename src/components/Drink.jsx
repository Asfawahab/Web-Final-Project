import React from "react";
import b1 from './p1.jfif'
import b2 from './p2.jfif'
import b3 from './p3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Drink() {
  return (
    <div className="breakfast">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'maroon',paddingTop:'6px'}} >Drinks</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b1} />
  <Card.Body>
    
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=G7SzB2GW5hc" target="_blank" style={{color:'black'}}>Oreo Shake</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b2} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=xTGYLBQr56k" target="_blank" style={{color:'black'}}>Laung ilachi Chai</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b3} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=oSL2ekRBp6s" target="_blank" style={{color:'black'}}>Pina Colada</a>
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Drink;