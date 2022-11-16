import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./SideMenu";
import styled from "styled-components";
import Banner from "./Banner";
import MenuBlock from "./MenuBlock";





function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = () => setMenuOpen((previous) => !previous);
  return (
    <>
      <HeaderContainer>
        <Banner />
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