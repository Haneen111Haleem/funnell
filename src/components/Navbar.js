import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

function navbar() {
  return (
    <>
      <Navbar className='nevo shadow' expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
             <img src='https://www.funnelll.com/assets/img/site/white-logo-sidebyside.png'
                height="40px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle' />
                <Navbar.Collapse id="basic-navbar-nav" className='navbar-toggle'>
          <Nav className="ms-auto ">
            <Nav.Link href="#home" id='why' className='links fs-5'>Why Funnell</Nav.Link>
            <Nav.Link href="#features" className='links fs-5 ms-2'>Integrations</Nav.Link>
            <Nav.Link href="#pricing" className='links fs-5 ms-2'>Dashboards</Nav.Link>
            <Nav.Link href="#pricing" className='links fs-5 ms-2'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" id='get' className='links ms-4 '>Get Started Free</Nav.Link>
            <button type="button" class="links1 ms-1 fs-5 ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Login
         </button>
          </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar> 

       <div className="App">
            <div class="container p-5">
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title title" id="exampleModalLabel">Login Form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" required/>
                                </div>
                                <button type="submit" class="btns">Login</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>     
    </>
  )
}

export default navbar;
