import React from "react";
import styled from "styled-components";
import { H2 } from "../styles/TextStyles";
import AnimatedNumber from "react-animated-number";
import { dateFormatter } from "../utils";

const ItemDescription = ({ name = "N/A", price = 0, released = "2000-01-01" }) => {
  return (
    <Wrapper>
      <span className={`fiat ${name === "N/A" ? "blur" : null}`}>{name}</span> released on{" "}
      <span className={`fiat ${released === "2000-01-01" ? "blur" : null}`}>{dateFormatter(released)}</span> for{" "}
      <span className="fiat">
        $
        <AnimatedNumber initialValue={0} value={price} formatValue={(n) => parseFloat(n.toFixed(0)).toLocaleString("en")} />
      </span>
      ?
    </Wrapper>
  );
};

export default ItemDescription;

const Wrapper = styled(H2)`
  font-style: italic;
  padding: 20px 0;
  color: black;
  .fiat {
    color: #91c174;
  }
  .blur {
    color: transparent;
    text-shadow: 0 0 15px #000;
  }
`;
