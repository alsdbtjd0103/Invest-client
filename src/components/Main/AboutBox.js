import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import {AiFillGift,AiFillApple,} from 'react-icons/ai';
import SignButton from "../Buttons/SignButton";
import GoogleButton from "../Buttons/GoogleButton";
import {FcGoogle} from 'react-icons/fc';
import {Link} from 'react-router-dom';
import { MainAddress } from "../../Address/MainAddress";
function GrayText(){
    return(
        <div style={{display:'flex',width:'100%',height:'50px',flexDirection:'row',height:'0.0001px',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>
            <div style={{borderStyle:'solid',borderColor:'#EAECEF',width:'100%',borderWidth:'0.00001px'}}></div>
            <text style={{color:'#707A8A', whiteSpace:'nowrap',paddingLeft:'10px',paddingRight:'10px'}}>or continue with</text>
            <div style={{borderStyle:'solid',borderColor:'#EAECEF',width:'100%',borderWidth:'0.00001px'}}></div>
        </div>
    )
}

function AboutBox() {

    return(
        <StyledRootContainer>
            <ItemContainer>
                <StyledTitle> Buy, trade, and hold 350+ cryptocurrencies on Binance</StyledTitle>
                <Link to={MainAddress+'/chart'}>
                <StyledStartText>
                    <AiFillGift size={22} color={Colors.primaryColor} style={{paddingRight:'10px'}}/>
                    <div style={{textDecorationLine:'none'}}>Trade Bitcoin for free!</div>
                </StyledStartText>
                </Link>
                <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <SignButton title={'Sign up with your E-mail'} color={Colors.primaryColor} onClick={()=>console.log('sign up')}/>
                <GrayText />
                <div style={{display:'flex' ,flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
                    <GoogleButton title='Google' logo={<FcGoogle/>}/>
                    <GoogleButton title='Apple' logo={<AiFillApple/>}/>
                </div>
                </div>
            </ItemContainer>
            <ItemContainer>

            </ItemContainer>

        </StyledRootContainer>
    )
}

export default AboutBox;

const StyledRootContainer=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width:100vw;
    height:100%;
`

const ItemContainer=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width:100%;
    height:500px;
    flex-direction: column;
    background-color: ${Colors.littleWhiteColor};
    padding-right: 16px;
    padding-left: 16px;
`

const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
`
const StyledStartText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 22px;
    color:'#1E2329';
    flex-direction: row;
    
`