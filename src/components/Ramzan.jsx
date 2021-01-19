import React from "react";
import b1 from './r1.jfif'
import b2 from './r2.jpg'
import b3 from './r3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Ramzan() {
  return (
    <div className="breakfast">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'maroon',paddingTop:'6px'}} >Ramzan Special</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b1} />
  <Card.Body>
    
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=n3mYK0c4ngo" target="_blank" style={{color:'black'}}>Allu Pakora</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b2} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=kNuI13PFggA" target="_blank" style={{color:'black'}}>Fruit Chaat</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b3} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=uRXo495gMl0" target="_blank" style={{color:'black'}}>Filled Dates</a>
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Ramzan;