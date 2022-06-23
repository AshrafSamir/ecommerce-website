import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.png";
import cartLogo from "../assets/shopping-cart.png";
import arrow from "../assets/arrow-down-sign-to-navigate.png";

const AppHeader = styled.header`
  display: flex;
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 7vh;
`;

const NavigationLinksDiv = styled.div`
  display: flex;
  flex: 1;
  margin-left: 5vw;
`;

const LogoDiv = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CartCurrencyDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: end;
  margin-right: 5vw;
  width: 100%;
`;

const NavigationLinks = styled.a`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  &:link,
  &:visited {
    color: #1d1f22;
    padding: 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  &:hover,
  &:active {
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }
`;

const Button = styled.button`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
    img {
      opacity: 0.5;
    }
  }
`;

const DropDownArrow = styled.img`
  width: 7px;
  height: 7px;
  margin-right: 1vw;
`;

const ImageLogo = styled.img`
  width: 41px;
  height: 41px;
`;
const ImageCart = styled.img`
  width: 22px;
  height: 22px;
`;

export default function Header() {
  return (
    <AppHeader>
      <NavigationLinksDiv>
        <NavigationLinks href="url">WOMEN</NavigationLinks>
        <NavigationLinks href="url">MEN</NavigationLinks>
        <NavigationLinks href="url">KIDS</NavigationLinks>
      </NavigationLinksDiv>

      <LogoDiv>
        <ImageLogo src={logo} alt="logo" />
      </LogoDiv>

      <CartCurrencyDiv>
        <Button type="button">
          <DropDownArrow src={arrow} alt="arrow" />
        </Button>

        <Button type="button">
          <ImageCart src={cartLogo} alt="logo" />
        </Button>
      </CartCurrencyDiv>
    </AppHeader>
  );
}
