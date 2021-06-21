import React from 'react';

import { useAuth } from '../auth';
import {Navbar as NavBar, Nav} from 'react-bootstrap'
import UsersService from '../services/UsersService';
import logo from '../fbla.png'
const usersService = new UsersService()

export default function Navbar(){
  const { authTokens, setAuthTokens } = useAuth();
  function logOut(){
      usersService.logOutUser()
        .then(()=>{
            setAuthTokens(null)
        })
  }
  
    return(
      <NavBar expand="lg">
            <NavBar.Brand href="/" style={{alignItems:'center',display:'flex'}}>
            <img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top mr-2"
      /><h2 style={{fontWeight:'600'}}>FBLA SMART</h2></NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
                
                <Nav className="ml-auto">
                { !authTokens ? 
                    <React.Fragment>
                         <Nav.Link href="/login">Login</Nav.Link>
                         <Nav.Link href="/signup">Sign up</Nav.Link>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/quizzes">Take Quizzes</Nav.Link>

                        <Nav.Link onClick={logOut}>Logout</Nav.Link>

                        
                    </React.Fragment>}
                </Nav>
                
            </NavBar.Collapse>
        </NavBar>
)
}