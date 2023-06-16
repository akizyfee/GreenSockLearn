import React, {useEffect, useState} from "react";
import styled from "styled-components";

const StyledCursor = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid #ffffff;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 10;
    mix-blend-mode: difference;
    transition-property: opacity, background-color, transform;
    transition-duration: 500ms;
    transition-timing-function: ease;
`;

function Cursor () {

    const [position, setPosition] = useState({ x:0, y:0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(()=>{
        document.addEventListener("mousemove",_onMouseMove);
        document.addEventListener("mousedown", _onMouseDown);
        document.addEventListener("mouseup", _onMouseUp);
        document.body.addEventListener("mouseleave", _onMouseLeave);
        document.body.addEventListener("mouseenter", _onMouseEnter);
        handleLinkHoverEvents();

        return ()=>{
            document.removeEventListener("mousedown", _onMouseDown);
            document.removeEventListener("mouseup", _onMouseUp);
            document.removeEventListener("mousemove", _onMouseMove);
            document.body.removeEventListener("mouseleave", _onMouseLeave);
            document.body.removeEventListener("mouseenter", _onMouseEnter);
        };
    }, [])
    
    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const _onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY, });
    };
    const _onMouseLeave = () => {
        setHidden(true);
    };
    const _onMouseEnter = () => {
        setHidden(false);
    };
    const _onMouseDown = () => {
        setClicked(true);
    };

    const _onMouseUp = () => {
        setClicked(false);
    };

    const getBackgroundColor = () => {
        if (clicked) {
            return "#ffffff";
        } else if (linkHovered) {
            return "#ffffff";
        } else {
            return "transparent";
        }
    };

    const setScaleLinkHovered = () => {
        if (clicked) {
            return "translate(-50%,-50%) scale(0.9)";
        } else if (linkHovered) {
            return "translate(-50%, -50%) scale(1.5)";
        } else {
            return "translate(-50%,-50%) scale(1)";
        }
    };

    return (
        <StyledCursor
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            opacity: hidden ? 0 : 1,
            backgroundColor: getBackgroundColor(),
            transform: setScaleLinkHovered(),
        }}
        />
    )
}

export default Cursor