import React from "react"
import './App.css';
import {Carousel,Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import a from './main.jpg'
import b from './ad1.jpg'
import c from './aa.jpg'
import d from './bb.webp'
import e from './cc.jpeg'
import x from './x.jpeg'
import y from './y.jpeg'
import z from './z.jpg'
import {
 Card, CardDeck
} from 'react-bootstrap';


function Home(props){

return(
    <div className="Home" >

<img style={{width:'49%',border:'solid crimson 2px',height:'300px',marginTop:'20px' }} src={a} />
<div style={{width:'28%',float:'left',position:'absolute',top:'20%',paddingRight:'15px'  }} >
  <h1 style={{textAlign:'center',fontStyle:'italic'}}>
  <a style={{color:'Darkred' }}href="">Recent Uploads</a>
  </h1>
  <p style={{textAlign:'centre' }}>
  <a style={{color:'darkolivegreen' }} href="https://www.youtube.com/watch?v=C7Je_4rdUlE" target="_blank">Sindhi Biryani</a>
  </p>
  <p style={{textAlign:'centre' }}>
  <a style={{color:'darkolivegreen' }}href="https://www.youtube.com/watch?v=KnXyjTRwt6c" target="_blank">Mutton Shinwari</a>
</p>
<p style={{textAlign:'centre' }}>
<a style={{color:'darkolivegreen' }}href="https://www.youtube.com/watch?v=GfyJS-flQQo" target="_blank">Egg Fried Rice</a>
</p>
<p style={{textAlign:'centre' }}>
<a style={{color:'darkolivegreen' }}href="https://www.youtube.com/watch?v=mCys5ND7r7s" target="_blank">Chicken Chowemin</a>
</p>
<p style={{textAlign:'centre' }}>
<a style={{color:'darkolivegreen'}}href="https://www.youtube.com/watch?v=rsOCOXIQQE0" target="_blank">Hot and Sour Soup</a>
</p>
<p style={{textAlign:'centre' }}>
<a style={{color:'darkolivegreen' }}href="https://www.youtube.com/watch?v=0EgsTXn4rq4" target="_blank">Kbab Masala</a>
</p>
<p style={{textAlign:'centre' }}>
<a style={{color:'darkolivegreen' }}href="https://www.youtube.com/watch?v=VCy6tpTfi-8" target="_blank">White Korma</a>
</p>
<p style={{textAlign:'centre' }}>
<a style={{color:'darkolivegreen' }}href="https://www.youtube.com/watch?v=lldzefSaH6Y" target="_blank">Alferedo Pasta</a>
</p>

</div>
<div>
<Card style={{ width: '19rem',position:'absolute',right:'0',top:'20%',paddingRight:'40px' }}>
  <Card.Img variant="top" src={b} />
  <Card.Body>
    <Card.Title>Ads by FoodPanda</Card.Title>
    <Card.Text>
      Get amazing offers on food ! Order here when mom not cooks :p
    </Card.Text>
    <Button variant="primary"><a style={{color:'white'}} href="https://www.foodpanda.pk/contents/deals" target="_blank">Click Here</a></Button>
  </Card.Body>
</Card>
</div>
<div className= 'x'  style = {{width:'40%',paddingTop:'25px',borderbottom:'black solid 2px',height:'300px'}}>
<h1 style={{textAlign:'center',fontStyle:'italic', fontsize:'50px', fontWeight :'bold',paddingTop:'20px'}} >We are here to make coooking easier and enjoyable :D </h1>
<p style={{marginleft:'10%',fontSize:'20px',color:'darkoilvegreen'}}>Your solution to AAj kia pakaay.   </p>
<p style={{marginleft:'10%',fontSize:'20px',color:'darkolivegreen'}}>Hub of Lahori Recipies.  </p>
</div>
<div style={{paddingTop:'280px'}} >
<Carousel>
  <Carousel.Item>
    <img 
    height="350px"
      className="d-block w-100"
      src={c}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> <a href="https://www.youtube.com/watch?v=mZOXDAvMCM4" target="_blank" style={{color:'black'}}> Beef Nihari</a></h3>
      <p style={{color:'black'}}>Spicy Tarka</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="350px"
      className="d-block w-100"
      src={d}
      alt="Third slide"
    />

    <Carousel.Caption>
       <h3 > <a href="https://www.youtube.com/watch?v=vjbelBxkKOg"  target="_blank"style={{color:'cornsilk'}}> Spicy Food </a>  </h3>
      <p>Tawa piece ka chatkhara :p </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="350px"
      className="d-block w-100"
      src={e}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3> <a href="https://www.youtube.com/watch?v=h1wCX4pDeC8"  target="_blank"style={{color:'cornsilk'}}> Smoked BBQ</a></h3>
      <p>Malai Botti , Tikka Kabab , Reshmi Kabab</p>
    </Carousel.Caption>.
  </Carousel.Item>
</Carousel>
</div>
<div style={{width:'100%',paddingTop:'15px'}}>
<h1 style={{marginLeft:'0%'}} >OUR RECIPIES</h1>
</div>


<div style={{height:'40px'}}>
<p style={{display:'inline',marginLeft:'3%',paddingRight:'20px',paddingTop:'15px',fontSize:'25px'}}><a href=""  style={{color:'maroon'}}>Most Recent</a></p>
<span style={{fontSize:'30px'}}>/</span>
<p style={{display:'inline',paddingLeft:'5px',paddingRight:'20px',paddingTop:'15px',fontSize:'25px'}}><a href="" style={{color:'maroon'}}>Most Viewed</a></p>
<span style={{fontSize:'30px'}}>/</span>
<p style={{display:'inline',paddingLeft:'5px',fontSize:'25px'}}><a href="" style={{color:'maroon'}}>Most Favourite</a></p>
</div>

<h1 style={{marginLeft:'2%',paddingTop:'15px'}} >Trending On <strong style={{color:'Maroon'}} > FoodMania </strong></h1>

<div style={{paddingTop:'5px'}} >
<div style ={{paddingtop:'5px',width:'54%',float:'left',paddingLeft:'11px'}}>
<a href = "https://www.youtube.com/watch?v=q77OLUU1IZg" target="_blank"><img  src = {y} style ={{width:'100%',height:'500px'}} /></a>
<p style = {{border:'black solid 2px', borderWidth:'8px',backgroundColor:'black',color:'red',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}><a style={{color:'cornsilk'}} href = "https://www.youtube.com/watch?v=q77OLUU1IZg" target="_blank" >Choclate Fudge Cake  </a></p>
  </div>


  <div style ={{paddingtop:'5px',width:'45%',float:'right'}}>
  <a href ="https://www.youtube.com/watch?v=5EAgEwjHaSk " target="_blank"><img  src = {x} style ={{width:'100%',height:'210px'}} /></a>
<p style = {{border:'black solid 2px', borderWidth:'8px',backgroundColor:'black',color:'red',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}><a style={{color:'cornsilk'}} href ="https://www.youtube.com/watch?v=5EAgEwjHaSk " target="_blank">Chicken Tikka Botti</a></p>
  </div>
  
  <div style ={{paddingtop:'1px',width:'45%',float:'right'}}>
  <a href ="https://www.youtube.com/watch?v=pfeQ6yMgRRE" target="_blank" ><img  src = {z} style ={{width:'100%',height:'227px'}}/></a>
<p style = {{border:'black solid 2px', borderWidth:'8px',backgroundColor:'black',color:'red',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}><a style={{color:'cornsilk'}} href ="https://www.youtube.com/watch?v=pfeQ6yMgRRE" target="_blank">Balochi Sajji</a></p>
  </div>

  </div>



<div style={{width:'33%',borderRight:'2px solid gray',position:'absolute',left:'0',top:'290%',marginTop:'80px'}} >
<h3><strong>About Us</strong></h3>
<h4><strong>Contact Us:</strong>asfawahab@gmail.com</h4>
</div>

<div style={{width:'33%',borderRight:'2px solid gray',position:'absolute',left:'34%',top:'290%',marginTop:'80px'}} >
<h3><strong>Media Partner</strong></h3>
<h4 style={{color:'red'}} >FoodPanda</h4>
<h4 style={{color:'red'}} >Cheetay</h4>
<h4 style={{color:'red'}} >Careem</h4>
<h4 style={{color:'red'}} >Uber</h4>
<h4 style={{color:'red'}} >Leopard</h4>
<h4 style={{color:'red'}} >Carefour</h4>
<h4 style={{color:'red'}} >Metro</h4>
</div>

<div style={{position:'absolute',left:'78%',top:'290%',marginTop:'80px'}} >
<h3><strong>Follow Us</strong></h3>
<h4 ><a href ="" >FaceBook</a></h4>
<h4  ><a href ="" >Instagram</a></h4>
<h4  ><a href ="" >Twitter</a></h4>
</div>
</div>
);
}

export default Home;