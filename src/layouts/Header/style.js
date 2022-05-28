import styled from "styled-components";

export const LandingContainer = styled.div``;

export const LandingNav = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto 0 auto;

  @media screen and (max-width: 1400px) {
    width: 90%;
  }
`;
export const LandingLogo = styled.div`
  cursor: pointer;
`;
export const ContentLogo = styled.div`
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  margin-top: 20px;
  @media screen and (max-width: 860px) {
    display: none;
  }
`;
export const JoinBtn = styled.a`
  width: max-content;
  padding: 5px;
  display: flex;
  align-items: center;
  background: rgb(247, 193, 67);
  font-size: 26px !important;
  color: black !important;
  text-shadow: none !important;
  cursor: pointer;
  text-decoration: none;
`;
export const NavMobile = styled.div`
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  position: fixed;
  right: 25px;
  color: #fff;
  margin-top: 10px;
  font-size: 28px;
  font-weight: 700;
  background: var(--accent);
  padding: 6px 12px;
  border-radius: 8px;
  transition: 0.3s ease;
  z-index: 100;
  cursor: pointer;
  & > svg {
    width: 35px;
    color: #fff;
  }
  &:hover {
    background: var(--hover);
    transition: 0.3s ease;
  }
`;

// mobile menubar styles

export const LandingMobile = styled.div`
  height: 100%;
  width: ${(props) => (props.isOpened ? "100%" : 0)};
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  background: #111111;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const LandingMobileContent = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LandingMobileHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: 100px;
  text-align: center;
  padding: 0px 25px;
`;

export const LandingMobileHeaderClose = styled.div`
  font-size: 24px;
  text-align: right;
  padding: 0px 25px;
  font-weight: 700;
  color: #fff;
  display: ${(props) => (props.isOpened ? "block" : "none")};
  position: fixed;
  top: 20px;
  right: 20px;
`;

export const LandingMobileHeaderContent = styled.p`
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  position: relative;
  top: -10px;
  color: var(--accent);
`;

export const LandingMobileActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;
