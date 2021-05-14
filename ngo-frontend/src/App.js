import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Events from './components/events/create-event-form';
import EventIndex from './components/events/index';
import EventShow from './components/events/show';
import BloodInfoForm from './components/bloodintimation/intimation-form';
import HomePage from './components/home/index';
import ScribeInoForm from './components/scribeIntimation/intimation-form';
import EditForm from './components/events/form-edit';
import AdminRegister from './components/user/admin-register';
import AdminLogin from './components/user/admin-login';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  
import AboutUs from './components/about';
import { register } from './serviceWorker';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar color="warning" light expand="md">
            <NavbarBrand style={{fontFamily:"Trebuchet MS", fontSize:40}}>Amrutha Bindu</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/" style={{fontFamily:"Trebuchet MS", fontSize:20}}>Home</NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink href="/aboutUs" style={{fontFamily:"Trebuchet MS", fontSize:20}}>What we are</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/scribe/register" style={{fontFamily:"Trebuchet MS", fontSize:20}}>Scribe</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/contactUs" style={{fontFamily:"Trebuchet MS", fontSize:20}}>Contact Us</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{fontFamily:"Trebuchet MS", fontSize:20}}>
                    MORE
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="/causes" style={{fontFamily:"Trebuchet MS", fontSize:15}}>What we do</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/events" style={{fontFamily:"Trebuchet MS", fontSize:15}}>Events</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/gallery" style={{fontFamily:"Trebuchet MS", fontSize:15}}>Gallery</NavLink>
                    </DropdownItem>

                    <DropdownItem>
                      <NavLink href="/donations/list" style={{fontFamily:"Trebuchet MS", fontSize:15}}>Donate here</NavLink>
                    </DropdownItem>

                    <DropdownItem>
                      <NavLink href="/volunteers/list" style={{fontFamily:"Trebuchet MS", fontSize:15}}>Volunteers</NavLink>
                    </DropdownItem>

                    <DropdownItem>
                      <NavLink href="/volunteer/register" style={{fontFamily:"Trebuchet MS", fontSize:15}}>Become a volunteer</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
          </Navbar>

          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/event/new" component={Events} />
            <Route path="/events" component={EventIndex} exact/>
            <Route path="/events/:id" component={EventShow} />
            <Route path="/event/edit/:id" component={EditForm} />
            <Route path="/blood/intimationform" component={BloodInfoForm} />
            <Route path="/scribe/intimationform" component={ScribeInoForm} />
            <Route path="/admin/register" component={AdminRegister} />
            <Route path="/admin/login" component={AdminLogin} />
            
          </Switch>
        </div>
      
      
      </BrowserRouter>
    )

  }
}

export default App;
