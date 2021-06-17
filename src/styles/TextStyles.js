import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 50px;
  @media (max-width: 450px) {
    font-size: 40px;
  }
`;

export const H2 = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const H3 = styled.h3`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const BodyMain = styled.p`
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  font-size: 35px;
  line-height: 140%;
`;

export const SmallText = styled.p`
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;
