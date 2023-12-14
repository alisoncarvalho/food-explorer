import styled from "styled-components";

export const Container = styled.button`
   
    width: 100%;
    height: 48px;
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

    padding: 24px;

`;
