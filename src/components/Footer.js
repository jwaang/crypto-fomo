import React from "react";
import styled from "styled-components";
import { SmallText } from "../styles/TextStyles";
import { themes } from "../styles/themes";

const Footer = ({ theme }) => (
  <FooterGroup>
    <Text>
      <span>
        Made with{" "}
        <span role="img" aria-label="red-heart">
          ❤️
        </span>{" "}
        by{" "}
        <a href="https://github.com/jwaang" target="_blank" rel="noopener noreferrer">
          @jwaaang
        </a>
      </span>
    </Text>
    <Text>
      Shop responsibly, buy BTC!{" "}
      <span role="img" aria-label="star-eyes">
        🤩
      </span>
    </Text>
    <Text>
      <a href="https://nomics.com" target="_blank" rel="noopener noreferrer">
        <span role="img" aria-label="bar-chart">
          📊
        </span>{" "}
        Crypto Market Cap & Pricing Data Provided By Nomics
      </a>
    </Text>
  </FooterGroup>
);

export default Footer;

const FooterGroup = styled.div`
  padding: 15px 0;
  display: grid;
  grid-gap: 8px;
  background: #f2f2f2;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
  text-align: center;
`;

const Text = styled(SmallText)`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 10px;
  a {
    color: ${(props) => themes[props.theme.name].primary};
    text-decoration: none;
  }
`;
