import styled from "styled-components";
import { GrBitcoin } from "react-icons/gr";
function Banner() {
  return (
    <StyledBanner>
      <GrBitcoin size={24} />
      <div>Virtual Invest</div>
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
  width: 150px;
  height: 40px;
  font-size: 16px;

`;
