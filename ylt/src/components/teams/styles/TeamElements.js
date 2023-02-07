import styled from "styled-components";
import DT from "../../../static/design-token.json";

export const TeamContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: 40px;
	margin-right: 40px;
	height: 70vh;
	position: relative;

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		height: 70vh;
		margin-bottom: 2rem;
		margin-top: 6rem;
	}

	@media screen and (max-width: ${DT.breakpoints.xl}) {
		height: 50vh;
	}

	@media screen and (max-width: ${DT.breakpoints.lg}) {
		height: 85vh;
		margin-top: 5.9rem;
	}

	@media (max-width: 768px) {
		margin: 0;
		justify-content: center;
		height: 80vh;
	}
`;

export const BackgroundLinear = styled.div`
	position: absolute;
	background: linear-gradient(
		90deg,
		rgba(123, 158, 227, 0.9) 0%,
		rgba(255, 255, 255, 0.01) 50%,
		rgba(123, 158, 227, 0.9) 100%
	);
	width: 120%;
	height: 150%;
	left: -10%;
	top: -53%;
	opacity: 0.6;

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		height: 100vh;
	}
`;

export const VSText = styled.p`
	font-size: 58px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: center;
	line-height: 250px;
	align-self: flex-start;
	width: 100%;

	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 270px;
		flex: 1;
	}
`;
