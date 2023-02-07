import styled from "styled-components";
import DT from "../../static/design-token.json";

export const FooterContainer = styled.footer`
	background-color: #242424;
	height: 5rem;
	width: 100%;
	position: relative;
	padding: 30px;
	margin: 0 auto;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px) {
		padding: 10px;
		height: 10rem;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 7%;

	@media screen and (max-width: 768px) {
		width: 5%;
	}
`;

export const NavLogo = styled.img`
	width: 50%;
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 8rem;
	}
`;

export const NavText = styled.a`
	font-size: 1.8rem;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	margin-left: 1rem;
	text-decoration: none;

	@media screen and (max-width: 768px) {
		font-size: 0.8rem;
		margin-left: 0.2rem;
	}
`;

export const FooterInnerContainer = styled.ul`
	width: 28%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
	list-style-type: none;

	@media screen and (max-width: ${DT.breakpoints.lg}) {
		width: 40%;
	}

	@media screen and (max-width: 768px) {
		width: 40%;
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const NavLink = styled.a`
	display: flex;
	color: #fff;
	text-transform: uppercase;
	text-decoration: underline;
	text-decoration-color: #d2fa64;
	text-underline-offset: 4px;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		text-underline-offset: 6px;
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
		color: #fff;
		font-size: 0.87rem;

		img {
			height: 10px;
		}
	}
`;
