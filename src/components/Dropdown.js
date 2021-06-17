import * as React from "react";
import styled from "styled-components";
import { themes } from "../styles/themes";

const Dropdown = ({ buffer, theme }) => {
  const handleChange = (value) => {
    theme.updateTheme(value.target.value);
  };

  return (
    <Wrapper>
      <Select disabled={buffer ? { pointerEvents: "none" } : null} onChange={handleChange}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="DOGE">DOGE</option>
      </Select>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Select = styled.select`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 50px;
  color: ${(props) => themes[props.theme.name].primary};
  border: none;

  option {
    ${"" /* font-size: 25px; */}
    color: black;
    background: pink;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  :focus {
    outline: 0 !important;
  }

  :hover {
    outline: 0 !important;
  }

  @media (max-width: 450px) {
    font-size: 35px;
  }
`;
