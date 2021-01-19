import React from "react";
import b1 from './H1.jpg'
import b2 from './h2.jfif'
import b3 from './h3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Drink() {
  return (
    <div className="breakfast">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'maroon',paddingTop:'6px'}} >Healthy Foods</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b1} />
  <Card.Body>
    
    <Card.Text>
      dish name here
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b2} />
  <Card.Body>
    <Card.Text>
      dish name here
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b3} />
  <Card.Body>
    <Card.Text>
      dish name here
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Drink;