import styled from "styled-components";

export const Container = styled.button`
   
    width: 100%;
    height: 4.8rem;
    background-color: ${({theme})=>theme.COLORS.TOMATO_100};
    border: none;
    border-radius: .5rem;
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
    justify-content: center;

    padding: 2.4rem;

`;
