import styled from 'styled-components';

function Boundary({children}){
    return(
        <StyledBoundary>{children}</StyledBoundary>
    )
}

export default Boundary;

const StyledBoundary = styled.div`
    display: flex;
    color:rgb(30, 35, 41);
    width: 100%;
    cursor:pointer;
    justify-content: center;
    align-items: center;
    background-color: rgb(254, 246, 216);
    height:40px;

`