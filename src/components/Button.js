import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { SmallText } from "../styles/TextStyles";

const Button = ({ isLoading, setIsLoading, theme, getItem, buffer, setBuffer }) => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    let interval = null;
    if (buffer) {
      let tmp = counter;
      interval = setInterval(() => {
        --tmp;
        setCounter(tmp);
        if (tmp === 0) {
          clearInterval(interval);
          setIsLoading(false);
          setBuffer(false);
          setCounter(3);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [buffer]);

  return (
    <Wrapper>
      <StyledButton
        onClick={() => {
          if (!isLoading) getItem(theme.name);
        }}
        style={isLoading ? { backgroundColor: "#cfcfc4", border: "0.1rem solid #cfcfc4" } : null}
      >
        {isLoading ? "Loading" : "Next Item"}
      </StyledButton>
      {buffer ? (
        <WaitMessage>
          The API's free plan only allows for 1 request / second.
          <br />
          Please wait {counter} second(s) before making another request.
          <br />
          Thank you!{" "}
          <span role="img" aria-label="red-heart">
            🥳
          </span>
        </WaitMessage>
      ) : null}
    </Wrapper>
  );
};

export default Button;

const WaitMessage = styled(SmallText)`
  padding-top: 15px;
  line-height: 20px;
  @media (max-width: 450px) {
    padding-top: 10px;
    font-size: 10px;
    line-height: 15px;
  }
`;

const StyledButton = styled.button`
  font-family: "Open Sans";
  font-weight: 700;
  background-color: ${(props) => themes[props.theme.name].primary};
  display: inline-block;
  height: 50px;
  border: 0.1rem solid ${(props) => themes[props.theme.name].primary};
  border-radius: 0.4rem;
  color: #fff;
  display: inline-block;
  letter-spacing: 2px;
  padding: 0 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
    transform: scale(0.95);
  }
  :active {
    transform: scale(0.9);
    box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.3);
  }
`;

const Wrapper = styled.div``;
