import styled from "styled-components";
import DT from "../../../static/design-token.json";

export const MainContainer = styled.div`
	width: 100%;
	height: 90%;
	background-color: #e7e7e8;
	position: relative;
	padding-bottom: 1rem;

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		height: 70vh;
	}

	@media screen and (max-width: ${DT.breakpoints.xl2}) {
		height: 80vh;
		padding-bottom: 0;
	}

	@media screen and (max-width: ${DT.breakpoints.xl}) {
		height: 67.8vh;
		padding: 0;
	}

	@media screen and (max-width: ${DT.breakpoints.lg}) {
		height: 60vh;
	}

	@media screen and (max-width: ${DT.breakpoints.sm}) {
		height: 60vh;
	}
`;

export const Background = styled.div`
	height: 90vh;
	width: 100%;
	margin-top: 10rem;

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		height: 60vh;
		margin-top: 25rem;
		margin-bottom: 5.6rem;
	}

	@media screen and (max-width: ${DT.breakpoints.xl2}) {
		height: 90vh;
		margin-bottom: 4.9rem;
	}

	@media screen and (max-width: ${DT.breakpoints.xl}) {
		height: 53.7vh;
	}

	@media screen and (max-width: ${DT.breakpoints.lg}) {
		height: 42.5vh;
	}

	@media screen and (max-width: ${DT.breakpoints.sm}) {
		height: 60vh;
		margin-bottom: 1rem;
	}
`;

export const TitleText = styled.p`
	font-size: 2.75rem;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;

	@media screen and (max-width: ${DT.breakpoints.lg}) {
		font-size: 2rem;
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const AdsTitle = styled.div`
	height: 20%;
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #e7e7e8;
	position: absolute;
	top: -20%;
	left: 50%;
	transform: translateX(-50%);
	clip-path: polygon(
		10% 0%,
		0% 0%,
		100% 0%,
		90% 0%,
		100% 100%,
		100% 100%,
		0% 100%,
		0% 100%
	);

	@media screen and (max-width: 768px) {
		height: 15%;
		top: -15%;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	align-items: center;
	padding-right: 0.3rem;
	height: 100%;
	width: 95%;
	margin: 0 auto;

	@media screen and (min-width: 1600px) {
		height: 100%;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		display: block;
		height: 100%;
		padding: 0 5px;
	}
`;

export const CarouselContainer = styled.div`
	width: 75%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 1rem;
	position: relative;

	.text {
		font-size: 3rem !important;
		font-weight: bold !important;
		text-transform: uppercase !important;
		opacity: 1 !important;
		background: none !important;
		bottom: 20px !important;
	}

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		width: 75%;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50%;
		margin-top: 1rem;

		.text {
			font-size: 1rem !important;
		}

		li {
			width: 10px !important;
		}
	}
`;

export const CarouselImage = styled.img`
	width: 100%;
	height: 600px;
	object-fit: cover;
	object-position: center;
	border-radius: 8px;

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		height: 31.5rem;
		object-fit: fill;
	}

	@media screen and (max-width: ${DT.breakpoints.xl2}) {
		height: 30rem;
		object-fit: fill;
	}

	@media screen and (max-width: ${DT.breakpoints.sm}) {
		height: 10rem;
		object-fit: cover;
	}
`;

export const CountersContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;
	height: 80%;

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		margin-top: 8rem;
	}

	@media screen and (max-width: 768px) {
		flex-direction: row;
		width: 100%;
		height: 50%;
		justify-content: space-around;
		align-items: baseline;
	}
`;

export const CounterBox = styled.div`
	background-color: #fff;
	width: 100%;
	height: 50%;
	margin-left: 2rem;
	border-radius: 1rem;
	-webkit-box-shadow: 0px 0px 15px 6px rgba(101, 101, 101, 0.6);
	box-shadow: 0px 0px 15px 6px rgba(101, 101, 101, 0.6);

	&:nth-child(1) {
		margin-bottom: 0.5rem;
	}

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		height: 40%;
	}

	@media screen and (max-width: ${DT.breakpoints.xl2}) {
		height: 40%;

		&:nth-child(1) {
			margin-top: 4rem;
		}
	}

	@media screen and (max-width: ${DT.breakpoints.xl}) {
		height: 45%;

		&:nth-child(1) {
			margin-top: 1rem;
		}
	}

	@media screen and (max-width: 768px) {
		margin: 0;
		width: 45%;
		height: 40%;

		&:nth-child(1) {
			margin: 0;
		}
	}
`;

export const CounterBoxTitle = styled.p`
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	margin-top: 2rem;

	@media screen and (max-width: 768px) {
		font-size: 16px;
		margin-top: 1rem;
	}
`;

export const CounterBoxValue = styled.p`
	font-size: 60px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	margin-top: 1.5rem;
	color: #90e040;

	@media screen and (max-width: 768px) {
		font-size: 20px;
		margin-top: 1rem;
	}
`;

export const GetRewardsBtn = styled.a`
	background: #90e040;
	width: 20%;
	padding: 1rem 1.5rem;
	text-align: center;
	text-transform: uppercase;
	font-size: 1rem;
	text-decoration: none;
	border-radius: 1rem;
	position: absolute;
	bottom: 1rem;
	right: 5rem;
	color: #242424;

	&:hover {
		background-color: #fff;
		border-radius: 8px;
		color: #242424;
	}

	@media screen and (min-width: ${DT.breakpoints.xl2}) {
		bottom: 3rem;
	}

	@media screen and (min-width: 1600px) {
		right: 7rem;
	}

	@media screen and (max-width: 768px) {
		width: 80%;
		margin: 0 auto;
		left: 50%;
		transform: translateX(-50%);
		bottom: 3rem;
	}
`;
