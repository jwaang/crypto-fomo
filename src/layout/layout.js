import React from "react";
import Footer from "../components/Footer";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "../styles/ThemeContext";
import ParticlesBackground from "../components/ParticlesBackground";

function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <ThemeProvider theme={theme}>
          <Wrapper>
            <ContentWrapper>
              <ParticlesBackground theme={theme} />
              <main>{children}</main>
            </ContentWrapper>
            <Footer theme={theme} />
          </Wrapper>
        </ThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
}

export default Layout;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-bottom: 3rem;
`;
