import React from "react";
import b1 from './br1.jpg'
import b2 from './br2.jpg'
import b3 from './br3.jfif'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Breakfast() {
  return (
    <div className="breakfast">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'maroon',paddingTop:'6px'}} >BreakFast</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b1} />
  <Card.Body>
    
    <Card.Text>
      <a href="https://www.youtube.com/watch?v=t4t1Vj5-NLQ" target="_blank" style={{color:'black'}}>Healthy Breakfast</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b2} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=PiqB0Rye4q0" target="_blank" style={{color:'black'}}>Baked Egg</a>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b3} />
  <Card.Body>
    <Card.Text>
    <a href="https://www.youtube.com/watch?v=UJfqp1dmJ3I" target="_blank" style={{color:'black'}}>Fruity Tower</a>
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Breakfast;