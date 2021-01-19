import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom" 
import {Navigation,Home,Breakfast,Lunch,Dessert,Drink,Ramzan} from './components'
import Shop from './components/Shop'
import Cart from './components/Cart'
import './App.css';
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

import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Card,Carousel} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
       

  

       <Router>      
      <Navigation/>    
   
<Switch>
<Route path="/" exact component={() => <Home />} />
<Route path="/breakfast" exact component={() => <Breakfast />} />
<Route path="/lunch" exact component={() => <Lunch />} />
<Route path="/dessert" exact component={() => <Dessert />} />
<Route path="/drink" exact component={() => <Drink />} />
<Route path="/ramzan" exact component={() => <Ramzan />} />
<Route path="/shop" component={Shop}/>
<Route path="/cart" component={Cart}/>
</Switch>
</Router>





 


    </div>
  );
}

export default App;
