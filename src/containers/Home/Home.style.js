import styled from 'styled-components';

export const Image = styled.img`
	width: 100%;

`;

export const MyImage = styled.div`
	height: 75vh;
	width: 100%;
	background-image: url('${require('../../assets/trent2.jpg')}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;

	color: black;


	h1 {
		margin-bottom: 0px;
	}
	h1, h2 {
		padding-left: 10px;
	}
	-webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
    -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
    box-shadow: 0px 0px 10px rgba(0,0,0,.8);

  z-index: 100;
`;

export const RevealP = styled.p`
line-height: 120%;

`;

export const NavImages = styled.div`
	
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    padding-top: 10px;

`;

export const Links = styled.img`
	padding-left: 150px;
	padding-right: 150px;

`;

// export const Stack = styled.a`
// 	float: right;
// 	clear: right;
// `;