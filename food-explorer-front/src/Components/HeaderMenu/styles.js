import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 114px;
    background-color: ${({theme})=>theme.COLORS.DARK_700};
    
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 16px;
    font-size: 20px;
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    padding-left: 28px;
    padding-top: 56px;


    a{
        text-decoration: none;
        color: #fff;
        
    }
    
   
`;