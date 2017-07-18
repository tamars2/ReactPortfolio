import React, { Component } from 'react';
//import NavContainer from '../../theme/grid/NavContainer';
import { NavImages, Links} from '../Home/Home.style.js';
import { NavBackground } from './Nav.style.js';

export default class Nav extends Component {
	render() {
		return (
			<NavBackground>
			<NavImages>
			<a id="github" href="http://www.github.com/tamars2"><Links src={require('../../assets/GitHub64.png')}></Links></a>
			<a id="linkedin" href="https://www.linkedin.com/in/trentmarshall/"><Links src={require('../../assets/LinkedIn66.png')}></Links></a>
			<a id="email" href="mailto:trentallen.marshall@gmail.com?subject=Hello!&body=Hey there, Trent!"><Links src={require('../../assets/email.png')}></Links></a>
			</NavImages>
			</NavBackground>
		);
	}
}