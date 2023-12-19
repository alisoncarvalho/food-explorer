import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 11.4rem;
    background-color: ${({theme})=>theme.COLORS.DARK_700};
    
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1.6rem;
    font-size: 2rem;
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    padding-left: 2.8rem;
    padding-top: 5.6rem;


    a{
        text-decoration: none;
        color: #fff;
        
    }
    
   
`;