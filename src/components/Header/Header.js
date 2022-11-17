import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./SideMenu";
import styled from "styled-components";
import Banner from "./Banner";
import MenuBlock from "./MenuBlock";
import { CgMenuGridR } from "react-icons/cg";
import { Colors } from "../../styles/Colors";
import { BrowserView} from "react-device-detect";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gridMenu, setGridMenu] = useState(false);
  const menuToggle = () => setMenuOpen((previous) => !previous);
  const gridMenuToggle = () => setGridMenu((previous) => !previous);
  return (
    <>
      <HeaderContainer>
        <Banner />
        <BrowserView>
          <StyledCgMenuGridR onClick={gridMenuToggle}>
            <CgMenuGridR size={30} />
          </StyledCgMenuGridR>
        </BrowserView>
        <MenuBlock isOpen={gridMenu} />
        <AiOutlineMenu
          size={24}
          style={{ cursor: "pointer" }}
          onClick={menuToggle}
        />
        <SideMenu isOpen={menuOpen} setOpen={menuToggle} />
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;

const StyledCgMenuGridR = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100px;
  cursor: pointer;
  :hover {
    color: ${Colors.primaryColor};
  }
  z-index: 1;
  @media (max-width: 600px) {
  display: none;
}
`
