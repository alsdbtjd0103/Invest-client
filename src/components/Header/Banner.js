import styled from "styled-components";
import { GrBitcoin } from "react-icons/gr";
function Banner() {
  return (
    <StyledBanner>
      <GrBitcoin size={24} />
      <div style={{overflow:'hidden'}}>Virtual Invest</div>
    </StyledBanner>
  );
}

export default Banner;

const StyledBanner = styled.div`
  display: flex;
  flex-direction: "row";
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  min-width: 150px;
  min-height: 40px;
  font-size: 16px;
  z-index: 1;
`;
