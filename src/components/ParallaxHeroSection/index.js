import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import ForegroundHero from "./ForegroundHero";
import MidgroundHero from "./MidgroundHero";
import BackgroundHero from "./BackgroundHero";

const StyledSVGWrapper = styled.div`
    position: relative;
    width: 50vw;
    height: 30vw;
`;

function ParallaxHeroSection () {

    const foregroundHeroRef = useRef();
    const backgroundHeroRef = useRef();
    const midgroundHeroRef = useRef();

    useEffect(()=>{
        const onMove = ({ clientX, clientY }) =>{
            foregroundHeroRef.current.moveTo(clientX / 25, clientY / 15);
            backgroundHeroRef.current.moveTo(clientX / 25, clientY / 5);
            midgroundHeroRef.current.moveTo(clientX / 15, clientY / 35);
        };

        const onLeave = ()=>{
            foregroundHeroRef.current.moveTo(0, 0);
            backgroundHeroRef.current.moveTo(0, 0);
            midgroundHeroRef.current.moveTo(0, 0);
        }

        document.addEventListener("mousemove", onMove);
        document.body.addEventListener("mouseleave", onLeave);

        return ()=>{
            document.addEventListener("mousemove", onMove);
            document.body.addEventListener("mouseleave", onLeave);
        }
    }, []);

    return (
        <StyledSVGWrapper>
            <BackgroundHero ref={backgroundHeroRef} />
            <MidgroundHero ref={midgroundHeroRef} />
            <ForegroundHero ref={foregroundHeroRef} />
        </StyledSVGWrapper>
    );
}

export default ParallaxHeroSection;