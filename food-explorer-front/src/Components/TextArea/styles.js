import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 17.2rem;

    background-color: ${({theme})=>theme.COLORS.DARK_900};
    color: ${({theme})=>theme.COLORS.LIGHT_500};

    border: none;
    resize: none;

    margin-bottom: .8rem;
    border-radius: 1rem;
    padding: 1.4rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;

    &::placeholder{
        color: ${({theme})=>theme.COLORS.LIGHT_500};
    }

`;