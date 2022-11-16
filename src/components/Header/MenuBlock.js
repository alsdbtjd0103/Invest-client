import styled from "styled-components"

const menuData = [
    {
        id:1,
        title:'About Us',
        path:'',
        
    },
    {
        id:2,
        title:'How To',
        path:''
    },
    {
        id:3,
        title:'FaQ',
        path:''
    }
]

function MenuBlock(){
    return(
        <StyledContainer>

        </StyledContainer>
    )
}

export default MenuBlock;

const StyledContainer = styled.div`
    display: flex;
    width:100%;
    height:100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-style: solid;
    
`

const StyledMenu = styled.a`

`