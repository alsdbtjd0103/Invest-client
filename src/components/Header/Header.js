import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./Menu";
import styled from "styled-components";
import Banner from "./Banner";

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
      </HeaderContainer>
      <Menu isOpen={menuOpen} setOpen={menuToggle} />
      </>
  );
}

export default Header;
