import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import nailPic from './pressOns.jpeg'
import nailPic2 from './pressOns2.jpeg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/button'
import theLogo from './theLogo.jpeg'

function App() {


  return (

    <div style={{backgroundColor: 'lightpink'}}>   
      <div id="logo">
        <img src={theLogo} alt="TheeCookieShopp" style={{width: 150}}/>
      </div>
      <div id="mainContainer">
        <div className="theHeader">
          <header>TheeCookieShopp</header>
        </div>
      </div>
<Navbar style = {{"backgroundColor": "hotpink"}} data-bs-theme="dark">
<Container color="pink" id="navContainer">
<Navbar.Brand href="">Nail Essentials</Navbar.Brand>
<Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">About Me</Nav.Link>
          </Nav>
</Container>
</Navbar>
<div className="theCarousel">
<Carousel>
      <Carousel.Item interval={1000}>
        <img src={nailPic} alt="test1" style={{height: 600}} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={nailPic} alt="test2" style={{height: 600}} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={nailPic} alt="test3" style={{height: 600}} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>

<div id="homePageProducts">

  {/* card 1 */}

<Card style={{ width: '16rem' }}>
      <Card.Img variant="bottom" src={nailPic2} />
      <Card.Body>
        <Card.Title>Fabulous Nails</Card.Title>
        <Card.Text>
          Stylish, One of a kind Original
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    {/* card 2 */}

    <Card style={{ width: '16rem' }}>
      <Card.Img variant="bottom" src={nailPic2} />
      <Card.Body>
        <Card.Title>Fabulous Nails</Card.Title>
        <Card.Text>
          Stylish, One of a kind Original
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    {/* card 3 */}

    <Card style={{ width: '16rem' }}>
      <Card.Img variant="bottom" src={nailPic2} />
      <Card.Body>
        <Card.Title>Fabulous Nails</Card.Title>
        <Card.Text>
          Stylish, One of a kind Original
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    {/* card 4 */}

    <Card style={{ width: '16rem' }}>
      <Card.Img variant="bottom" src={nailPic2} />
      <Card.Body>
        <Card.Title>Fabulous Nails</Card.Title>
        <Card.Text>
          Stylish, One of a kind Original
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    {/* card 5 */}

    <Card style={{ width: '16rem' }}>
      <Card.Img variant="bottom" src={nailPic2} />
      <Card.Body>
        <Card.Title>Fabulous Nails</Card.Title>
        <Card.Text>
          Stylish, One of a kind Original
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>

    </div>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
