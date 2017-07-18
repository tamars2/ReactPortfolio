import React, { Component } from 'react';
import {Container} from '../../theme/grid';
import Nav from '../Nav/Nav.js';
import {
	MyImage,
	RevealP
 } from './Home.style';


export default class Home extends Component {
	render() {
		return(
			<div>
				<Nav />
				<Container>
					<MyImage>
						
					</MyImage>
				<RevealP>Hi! I'm Trent, a full stack web developer specializing in MERN. Welcome to my portfolio! (Built 100% with React). I am a fast learning and adaptable person.  Click the GitHub link above to see some of my featured work!  New features are coming soon..</RevealP>
				</Container>
			</div>
		)
	}

}

// <h1><u>MERN Stack</u></h1>
// <h2>MongoDB</h2>
// <h2>Express</h2>
// <h2>React</h2>
// <h2>NodeJS</h2>