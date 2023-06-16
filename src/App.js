import logo from "./assets/logo.svg";
import styled from "styled-components";

import ParallaxHeroSection from "./components/ParallaxHeroSection";
import ContentSection from "./components/ContentSection";
import CrossRevealSection from "./components/CrossRevealSection";
import ProductSection from "./components/ProductSection";
import VideoSequenceSection from "./components/VideoSequenceSection"
import Cursor from "./components/Cursor";

import FaceOne from "./assets/images/faceOne.jpg";
import LandscapeOne from "./assets/images/landscapeOne.png";
import LandscapeTwo from "./assets/images/landscapeTwo.png";

const StyledHeroSection = styled.section`
	position: relative;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	img {
		height: 25vmin;
		pointer-events: none;
	}
`;

const StyledTitle = styled.h1`
	color: black;
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 4px;
	text-align: center;
	text-transform: uppercase;
	padding-top: 4rem;
`;

function App() {
	return (
		<>
			<Cursor/>
			<StyledHeroSection>
				<img src={logo} alt="logo" />
				<StyledTitle>Back to smooth and firm skin</StyledTitle>
				<ParallaxHeroSection />
			</StyledHeroSection>
			<ProductSection />
			<ContentSection
				title={"Take Care Two"}
				text={"lets you customize your Lock Screen in fun new ways Layer a photo to make it popTrack your Activity rings And see live updates from your favorite apps"}
			/>
			<CrossRevealSection
				face={FaceOne}
				landscape={LandscapeOne}
				name={"Chirstan Guard"}
				job={"Founder"}
				sentenceOne={"We only launch"}
				sentenceTwo={"what we love"}
				crossreveal={"xPercent"}
			/>
			<ContentSection
				title={"Take Care Two"}
				text={"lets you customize your Lock Screen in fun new ways Layer a photo to make it popTrack your Activity rings And see live updates from your favorite apps"}
			/>
			<CrossRevealSection
				face={FaceOne}
				landscape={LandscapeTwo}
				name={"Chirstan Guard"}
				job={"Founder"}
				sentenceOne={"We only launch"}
				sentenceTwo={"what we love"}
				crossreveal={"yPercent"}
			/>
			<ContentSection
				title={"Take Care Two"}
				text={"lets you customize your Lock Screen in fun new ways Layer a photo to make it popTrack your Activity rings And see live updates from your favorite apps"}
			/>
			<VideoSequenceSection />
		</>
	);
}

export default App;
