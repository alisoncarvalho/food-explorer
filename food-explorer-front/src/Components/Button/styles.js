import styled from "styled-components";

export const Container = styled.button`
   
    height: 48px;
    width: 100%;
    background-color: ${({theme})=>theme.COLORS.TOMATO_100};
    border: none;
    border-radius: 5px;
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    justify-content: center;

`;
