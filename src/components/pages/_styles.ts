import styled from "styled-components";

const NavLinkWrapper = styled.div`
	padding: 10px;
	font-size: 20px;

	& > a {
		text-decoration: none;
		color: #282c34;
	}

	& > a.active {
		color: #7fb8f1;
    	text-decoration: underline;
	}

	& > a:hover {
		color: #0b89e3
	}
`

const Header = styled.div`
	background-color: #000000;
	width: 100%;
	height: 100px;
	text-align: center;
	color: white;
`

const Body = styled.div`
	display: flex;
`

const Nav = styled.div`
	background-color: white;
	min-height: 400px;
	width: 30%;
	color: #282c34;
	font-size: 30px;
	display: flex;
	flex-direction: column;
`

const Content = styled.div`
	background-color: #282c34;
	min-height: 400px;
	width: 70%;
	color: white;
	font-size: 30px;
`

const Footer = styled.div`
	background-color: #000000;
	width: 100%;
	height: 120px;
	text-align: center;
	color: white;
`

export const s = {
	NavLinkWrapper, Header, Body, Nav, Content, Footer
}