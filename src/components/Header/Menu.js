import { BsX } from "react-icons/bs";
import styled from "styled-components";
import React from "react";



function Menu({ isOpen, setOpen }) {
  return (
    <>
    <LeftContainer isOpen={isOpen} onClick={setOpen} />
      <SideMenu isOpen={isOpen}>
        <CloseButtonContainer>
          <BsX style={{ cursor: "pointer" }} size={30} onClick={setOpen} />
        </CloseButtonContainer>
      </SideMenu>
    </>
  );
}

export default Menu;


const SideMenu = styled.div`
  display: flex;
  height: 100%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.8s;
  width: ${({ isOpen }) => {
    if (isOpen) {
      return "375px";
    } else {
      return "0px";
    }
  }};
  z-index: 999;
`;

const LeftContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backface-visibility: visible;
  top: 0;
  position: absolute;
  z-index:998;
  transition:all 1s;
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 10px;
  height: 40px;
  overflow: hidden;
`;
