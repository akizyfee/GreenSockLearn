import React, { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Project from "./components/Project";

const StyledMainWrapper = styled.div`
    position: relative;
`;


function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <StyledMainWrapper>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <Content />
            <Project />
            <Menu isMenuOpen={isMenuOpen} />
        </StyledMainWrapper>
    );
}

export default App;
