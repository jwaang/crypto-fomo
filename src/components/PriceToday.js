import * as React from "react";
import styled from "styled-components";
import { H1, H2 } from "../styles/TextStyles";
import AnimatedNumber from "react-animated-number";
import { themes } from "../styles/themes";

const PriceToday = ({ theme, totalCrypto = 0, totalUSD = 0 }) => {
  return (
    <Wrapper>
      <Intro>Right now, you would have</Intro>
      <Main>
        <div className="crypto">
          <AnimatedNumber initialValue={0} duration={2000} value={totalCrypto} formatValue={(n) => parseFloat(n.toFixed(2)).toLocaleString("en")} />{" "}
          {theme.name}
        </div>
        <div className="fiat">
          ($
          <AnimatedNumber initialValue={0} duration={2000} value={totalUSD} formatValue={(n) => parseFloat(n.toFixed(2)).toLocaleString("en")} />)
        </div>
      </Main>
    </Wrapper>
  );
};

export default PriceToday;

const Wrapper = styled.div``;

const Intro = styled(H2)`
  color: black;
  margin-bottom: 0;
`;

const Main = styled(H1)`
  margin-top: 0;
  .crypto {
    color: ${(props) => themes[props.theme.name].primary};
  }
  .fiat {
    color: #85bb65;
  }
`;
