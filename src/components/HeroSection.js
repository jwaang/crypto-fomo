import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { H1 } from "../styles/TextStyles";
import ItemDescription from "./ItemDescription";
import Button from "../components/Button";
import PriceToday from "../components/PriceToday";
import axios from "axios";
import Dropdown from "../components/Dropdown";

const HeroSection = ({ theme }) => {
  const [item, setItem] = useState({ totalUSD: 0, price: 0, totalCrypto: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [buffer, setBuffer] = useState(false);

  const getItem = async (cryptoName) => {
    setIsLoading(true);
    const response = await axios
      .get(`${process.env.GATSBY_BASE_PATH}/item/${cryptoName}`)
      .then((response) => {
        setItem(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return response;
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
    if (!response) {
      setBuffer(true);
    }
  };

  useEffect(() => {}, [buffer]);

  useEffect(() => {
    getItem(theme.name);
  }, [theme.name]);

  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            What if you bought <br />
            <Dropdown buffer={buffer} theme={theme} getItem={getItem} />
            instead of the
          </Title>
          <ItemDescription name={item.name} price={item.price} released={item.released} />
          <PriceToday theme={theme} totalCrypto={item.totalCrypto} totalUSD={item.totalUSD} />
          <Button isLoading={isLoading} setIsLoading={setIsLoading} theme={theme} getItem={getItem} buffer={buffer} setBuffer={setBuffer} />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;

const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  background: #ffffff;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 30px;

  @media (max-width: 450px) {
    padding: 30px 20px 20px;
  }
`;

const TextWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  > * {
    opacity: 0;
    animation: ${animation} 1s 0.1s forwards;

    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    }
    :nth-child(4) {
      animation: ${animation} 1s 0.8s forwards;
    }
  }
`;

const Title = styled(H1)`
  color: black;
  margin-top: 0;
  background: black;
  background-clip: text;
  -webkit-background-clip: text;

  span {
    color: #ff9500;
  }
  @media (max-width: 450px) {
    font-size: 35px;
  }
`;
