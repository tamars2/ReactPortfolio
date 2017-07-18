import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavBackground } from './Nav.style.js';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
      	<NavBackground>
        <Navbar color="#006064" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Trent Marshall - Full Stack Web Developer</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink target="_blank" href="http://www.github.com/tamars2">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://www.linkedin.com/in/trentmarshall/">LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:trentallen.marshall@gmail.com?subject=Hello!&body=Hey there, Trent!">Email</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </NavBackground>
      </div>
    );
  }
}



// import React, { Component } from 'react';
// //import NavContainer from '../../theme/grid/NavContainer';
// import { NavImages, Links} from '../Home/Home.style.js';
// import { NavBackground } from './Nav.style.js';

// export default class Nav extends Component {
// 	render() {
// 		return (
// 			<NavBackground>
// 			<NavImages>
// 			<a id="logo" href="http://www.github.com/tamars2"><Links src={require('../../assets/GitHub64.png')}></Links></a>
// 			<a id="logo" href="https://www.linkedin.com/in/trentmarshall/"><Links src={require('../../assets/LinkedIn66.png')}></Links></a>
// 			<a id="logo" href="mailto:trentallen.marshall@gmail.com?subject=Hello!&body=Hey there, Trent!"><Links src={require('../../assets/email.png')}></Links></a>
// 			</NavImages>
// 			</NavBackground>
// 		);
// 	}
// }