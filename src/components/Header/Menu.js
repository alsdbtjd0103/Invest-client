import { BsX } from "react-icons/bs";
import styled from "styled-components";
import React from "react";

function SignButton({ title, onClick, color }) {
  return (
    <StyledSignButton color={color} onClick={onClick} >
      <div aria-disabled>{title}</div>
    </StyledSignButton>
  );
}

function Menu({ isOpen, setOpen }) {
  return (
    <>
      <LeftContainer isOpen={isOpen} onClick={setOpen} />
      <SideMenu isOpen={isOpen}>
        <CloseButtonContainer>
          <BsX style={{ cursor: "pointer" }} size={30} onClick={setOpen} />
        </CloseButtonContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection:'column'
          }}
        >
          <SignButton title="Login" onClick={() => console.log("asd")} />
          <SignButton title="Register" color = {'rgb(252, 213, 53)'} onClick={() => console.log("asd")} />
        </div>
      </SideMenu>
    </>
  );
}

export default Menu;

const StyledSignButton = styled.div`
  display: flex;
  height: 50px;
  font-size: 14px;
  cursor: pointer;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: ${({color}) => color ? color : '#ffffff'};
  margin-bottom: 20px;
  
  :hover{
    color: ${({color}) => color ? null : 'rgb(252, 213, 53)' }
  };
`;

const SideMenu = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => {
    return isOpen ? '0px' : '-375px'
  }};
  transition: 0.8s;
  width: 375px;
  z-index: 999;
`;

const LeftContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backface-visibility: visible;
  top: 0;
  position: absolute;
  z-index: 998;
  transition: all 1s;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  overflow: hidden;
`;
