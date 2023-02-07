import React from "react";
import LeftTeam from "./LeftTeam";
import { BackgroundLinear, TeamContainer, VSText } from "./styles/TeamElements";
import RightTeam from "./RightTeam";

const Teams = () => {
	return (
		<>
			<TeamContainer>
				<BackgroundLinear />
				<LeftTeam />
				<VSText>VS</VSText>
				<RightTeam />
			</TeamContainer>
		</>
	);
};

export default Teams;
