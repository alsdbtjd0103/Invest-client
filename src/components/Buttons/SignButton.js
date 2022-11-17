import styled from "styled-components";
function SignButton({ title, onClick, color }) {
  return (
    <StyledSignButton color={color} onClick={onClick}>
      <div aria-disabled>{title}</div>
    </StyledSignButton>
  );
}

export default SignButton;

const StyledSignButton = styled.div`
  display: flex;
  height: 50px;
  font-size: 14px;
  cursor: pointer;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color ? color : "#ffffff")};
  margin-bottom: 20px;
  :hover {
    color: ${({ color }) => (color ? null : "rgb(252, 213, 53)")};
    opacity: ${({ color }) => (color ? 0.7 : null)};
  }
`;
