import React, { Component } from 'react';
import {Container} from '../../theme/grid';
import Nav from '../Nav/Nav.js';
import {
	Image,
	MyImage,
	RevealP
 } from './Home.style';



{/*			 <Image src={require("../../assets/trent.jpg")} alt="trent-jpg" /> */}

export default class Home extends Component {
	render() {
		return(

			<Container>
			<Nav />
			<MyImage>
			<h1>Trent Marshall</h1>
			<h2>Full Stack Developer</h2>
			</MyImage>
			{/*			 <Image src={require("../../assets/trent.jpg")} alt="trent-jpg" /> */}

			<RevealP>Hi! I am Trent, a full stack web developer specializing in MERN. Welcome to my portfolio! (Built 100% with React). I am a fast learning and adaptable person.  Click the GitHub link above to see some of my featured work!  Connect with me via email at trentallen.marshall@gmail.com</RevealP>
			</Container>
		)
	}

}