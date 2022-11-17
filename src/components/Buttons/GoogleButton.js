import styled from "styled-components";

function GoogleButton({ title,logo, onCick, width, height, color,size }) {
  return <Container width={width} height={height} color={color} size={size}>
    <LogoContainer>{logo}</LogoContainer>
    <StyledTitle>{title}</StyledTitle>
  </Container>;
}

export default GoogleButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || 180}px;
  height: ${({ height }) => height || 48}px;
  cursor:pointer;
  flex-direction: 'row';
  background-color: #EAECEF;
  border-radius: 4px;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:${({size}) => size||16}px;
    height:${({size}) => size||16}px;
    padding-right: 5px;
`

const StyledTitle = styled.div`
    font-size:${({size}) => size||16}px;
    font-weight: 500;
`;
