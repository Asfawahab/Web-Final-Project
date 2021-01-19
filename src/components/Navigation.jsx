import React from "react"
import {Link, withRouter} from "react-router-dom" 
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'



function Navigation(props){

return(
    <div>
        
    <div>
 <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">FoodMania</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" class={`nav-item  ${
                 props.location.pathname === "/" ? "active" : ""
               }`}><Link Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span> </Link></Nav.Link>
      <Nav.Link href="#Breakfast"
      class={`nav-item  ${
        props.location.pathname === "/breakfast" ? "active" : ""
      }`}><Link class="nav-link" to='/breakfast'>Breakfast</Link></Nav.Link>
      <Nav.Link href="#Lunch/Dinner"class={`nav-item  ${
        props.location.pathname === "/lunch" ? "active" : ""
      }`}><Link class="nav-link" to='/lunch'>Lunch/Dinner</Link></Nav.Link>
      <Nav.Link href="#Deserts" class={`nav-item  ${
        props.location.pathname === "/dessert" ? "active" : ""
      }`}><Link class="nav-link" to='/dessert'>Desserts</Link></Nav.Link>
      <Nav.Link href="#Drinks" class={`nav-item  ${
        props.location.pathname === "/drink" ? "active" : ""
      }`}><Link class="nav-link" to='/drink'>Drinks</Link></Nav.Link>
      <Nav.Link href="#Ramzan"class={`nav-item  ${
        props.location.pathname === "/ramzan" ? "active" : ""
      }`}><Link class="nav-link" to='/ramzan'>Ramzan</Link></Nav.Link>
  
  <Link style={{marginRight:'20px',paddingTop:'17px',color:'gray'}} to="/shop">Shop</Link>
  <Link style={{marginRight:'20px',paddingTop:'17px',color:'gray'}}  to="/cart">My Items</Link>
                    

    </Nav>
    

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  
</div>
<div className='bar2' style={{backgroundColor:'darkred',height:'40px' }} >
<h3 style={{color:'cornsilk'}} >Welcome To FoodMania</h3>
</div>
</div>
);
}

export default withRouter(Navigation);