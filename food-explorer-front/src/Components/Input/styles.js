import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;
    display: flex ;
    align-items: center;
    background-color: ${({theme})=>theme.COLORS.DARK_900};
    color: ${({theme})=>theme.COLORS.LIGHT_500};
    border-radius: .5rem;
    padding: 1.4rem 1.2rem;

    >input{
        width:100%;
        background-color: transparent;
        padding: 1.4rem 1.4rem;
        color:${({theme})=>theme.COLORS.LIGHT_500};
        height: 4.8rem;
        
        border: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;   
    }
    
    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;