import React, { Component } from 'react';
import About from '../about/index.js';
import Home from '../home/index.js';
import Asennuspalvelu from '../services/assenuspalvelu/index.js';
import Ikkunaremontti from '../services/ikkunaremontti/index.js'
import Oviremontit from '../services/oviremontit/index.js';
import Referenssikohteet from '../referenssikohteet/index.js';
import Ottaa from '../contact/index.js';
import FA from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem,
          NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return(
      <div>
        <Router>
          <div>
            <div className="primary-header">
              <div className="container">
                <span className="pull-left header-contact-details">
                  <a href="mailto:uudenmaanikkunapalvelu@elisanet.fi​​​​​​​" style={{'text-decoration': 'none'}}><span className="header-email hidden-xs"><span><FA name="envelope" /></span>uudenmaanikkunapalvelu@elisanet.fi​​​​​​​</span></a>
                  <span className="header-number"> <span><FA name="phone" /></span>+358 44 2936352 </span>
                </span>
                <span className="pull-right social-icons">
                  <a href="/"><FA name="facebook" /></a>
                  <a href="/"><FA name="twitter" /></a>
                  <a href="/"><FA name="instagram" /></a>
                  <a href="/"><FA name="youtube" /></a>
                  <a href="/" xsHidden><FA name="linkedin" /></a>
                </span>
              </div>
            </div>
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/"><img src="img/sample-logo1.png" alt="logo"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1}>
                    <NavLink exact to="/" activeClassName="active">KOTI</NavLink>
                  </NavItem>
                  <NavItem eventKey={2}>
                    <NavLink to="/yritys" activeClassName="active">YRITYS</NavLink>
                  </NavItem>
                  <NavDropdown eventKey={3} title="palvelut" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>
                      <NavLink to="/asennuspalvelu">asennuspalvelu</NavLink>
                    </MenuItem>

                    <MenuItem eventKey={3.2}>
                      <NavLink to="/ikkunaremontti">ikkunaremontti</NavLink>
                    </MenuItem>

                    <MenuItem eventKey={3.3}>
                      <NavLink to="/oviremontit">Oviremontit</NavLink>
                    </MenuItem>
                  </NavDropdown>
                  <NavItem eventKey={1} href="#">
                    <NavLink to="/referenssikohteet" activeClassName="active">referenssikohteet</NavLink>
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <NavLink to="/ottaa" activeClassName="active">ottaa yhteyttä</NavLink>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/yritys" component={ About } />
            <Route exact path="/" component={ Home } />
            <Route path="/asennuspalvelu" component={ Asennuspalvelu } />
            <Route path="/ikkunaremontti" component={Ikkunaremontti} />
            <Route path="/oviremontit" component={Oviremontit} />
            <Route path="/referenssikohteet" component={Referenssikohteet} />
            <Route path="/ottaa" component={Ottaa} />
          </div>
        </Router>
      </div>
    )
  }
};

export default Header;
