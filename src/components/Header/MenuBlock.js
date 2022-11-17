import styled from "styled-components";
import { Colors } from "../../styles/Colors";

const menuData = [
  {
    id: 1,
    title: "About Us",
    path: "/",
  },
  {
    id: 2,
    title: "How To",
    path: "/",
  },
  {
    id: 3,
    title: "FAQ",
    path: "/",
  },
];

function MenuBlock({ isOpen }) {
  return (
    <StyledContainer isOpen={isOpen}>
      {menuData.map((data) => {
        return (
          <StyledMenu disabled href={data.path} key={data.id}>
            {data.title}
          </StyledMenu>
        );
      })}
    </StyledContainer>
  );
}

export default MenuBlock;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  position: relative;
  z-index: ${({ isOpen }) => {
    return isOpen ? 0 : -2;
  }};
  transition: 0.6s;
  left: ${({ isOpen }) => {
    return isOpen ? 0 : "-100px";
  }};
  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledMenu = styled.div`
  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    color: ${Colors.primaryColor};
  }
`;
