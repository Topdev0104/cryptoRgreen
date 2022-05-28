import React, { useState, useEffect } from "react";

// @import styles
import {
  LandingContainer,
  LandingLogo,
  LandingMobile,
  LandingMobileActions,
  LandingMobileContent,
  LandingMobileHeader,
  LandingMobileHeaderClose,
  LandingMobileHeaderContent,
  LandingNav,
  NavMobile,
  Socials,
  JoinBtn,
  ContentLogo,
} from "./style";
import { FaBars, FaTimes } from "react-icons/fa";
// @import resource
import { isScreenWidth } from "../../utils/getScreenWidth";
import logo from "../../assets/img/logo.JPG";
import trex from "../../assets/img/trex.jpeg";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import opensea from "../../assets/img/opensea.png";
const LandingHeader = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(860));
    });
    setIsMobile(isScreenWidth(860));
  }, []);

  return (
    <LandingContainer id="home">
      <LandingMobile isOpened={isOpened}>
        <LandingMobileContent>
          <LandingMobileHeader>
            <LandingMobileHeaderClose
              isOpened={isOpened}
              onClick={() => setIsOpened(!isOpened)}
            >
              <FaTimes />
            </LandingMobileHeaderClose>
            <LandingMobileHeaderContent>{"MENU"}</LandingMobileHeaderContent>
          </LandingMobileHeader>
          <LandingMobileActions>
            <JoinBtn href="https://ee.com" target="_blank">
              JOIN OUR DISCORD
            </JoinBtn>
            <LandingLogo>
              <img src={twitter} alt="logo" width="30px" />
            </LandingLogo>
            <LandingLogo>
              <img src={instagram} alt="logo" width="30px" />
            </LandingLogo>
            <LandingLogo>
              <img src={opensea} alt="logo" width="30px" />
            </LandingLogo>
          </LandingMobileActions>
        </LandingMobileContent>
      </LandingMobile>
      <LandingNav>
        <LandingLogo>
          <img src={logo} alt="logo" width="80px" />
        </LandingLogo>
        <ContentLogo>
          <img src={trex} alt="logo" width="350px" />
        </ContentLogo>

        <Socials>
          <JoinBtn href="https://ee.com" target="_blank">
            JOIN OUR DISCORD
          </JoinBtn>
          <LandingLogo>
            <img src={twitter} alt="logo" width="30px" />
          </LandingLogo>
          <LandingLogo>
            <img src={instagram} alt="logo" width="30px" />
          </LandingLogo>
          <LandingLogo>
            <img src={opensea} alt="logo" width="30px" />
          </LandingLogo>
        </Socials>

        <NavMobile isMobile={isMobile} onClick={() => setIsOpened(!isOpened)}>
          <FaBars />
        </NavMobile>
      </LandingNav>
    </LandingContainer>
  );
};

export default LandingHeader;
