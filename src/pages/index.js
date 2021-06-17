import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout/layout";
import HeroSection from "../components/HeroSection";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../styles/ThemeContext";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeContext.Consumer>
        {(theme) => (
          <ThemeProvider theme={theme}>
            <HeroSection theme={theme}></HeroSection>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
