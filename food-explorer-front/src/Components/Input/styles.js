import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 48px;
    display: flex ;
    align-items: center;
    background-color: ${({theme})=>theme.COLORS.DARK_900};
    color: ${({theme})=>theme.COLORS.LIGHT_500};
    border-radius: 5px;
    padding: 14px 12px;

    >input{
        width:100%;
        background-color: transparent;
        padding: 14px 14px;
        color:${({theme})=>theme.COLORS.LIGHT_500};
        height: 48px;
        
        border: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;   
    }
    
    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;