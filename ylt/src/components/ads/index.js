import React from "react";
import {
	AdsTitle,
	Background,
	CounterBox,
	CounterBoxTitle,
	CounterBoxValue,
	CountersContainer,
	GetRewardsBtn,
	InnerContainer,
	MainContainer,
	TitleText,
} from "./styles/AdsElements";
import { CarouselAds } from "./CarouselAds";

const Ads = () => {
	return (
		<Background>
			<MainContainer>
				<AdsTitle>
					<TitleText>
						get paid for every second <br /> you are watching ads
					</TitleText>
				</AdsTitle>

				<InnerContainer>
					<CarouselAds />
					<CountersContainer>
						<CounterBox>
							<CounterBoxTitle>watch time</CounterBoxTitle>
							<CounterBoxValue>00:12</CounterBoxValue>
						</CounterBox>
						<CounterBox>
							<CounterBoxTitle>coins received</CounterBoxTitle>
							<CounterBoxValue>0,37 YLT</CounterBoxValue>
						</CounterBox>
					</CountersContainer>
				</InnerContainer>
				<GetRewardsBtn href="/">get rewards</GetRewardsBtn>
			</MainContainer>
		</Background>
	);
};

export default Ads;
