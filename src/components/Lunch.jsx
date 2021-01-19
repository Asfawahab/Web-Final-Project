import React from "react";
import b1 from './ld1.jfif'
import b2 from './ld2.webp'
import b3 from './ld3.jfif'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Lunch() {
  return (
    <div className="breakfast">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'maroon',paddingTop:'6px'}} >Lunch/Dinner</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b1} />
  <Card.Body>
    
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=slOtoPg1R5o" target="_blank" style={{color:'black'}}>Mutton Karahi</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b2} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=95BCU1n268w" target="_blank" style={{color:'black'}}>Chicken Biryani</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b3} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=no2OABEwsKo" target="_blank" style={{color:'black'}}>Gajrela</a>
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Lunch;