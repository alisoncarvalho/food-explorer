import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_600}

`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: center;
    white-space: nowrap;

    width: 100%;

    
    
    padding:24px 123px;
    gap: 3.2rem;

    .redButton{
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        justify-content: center;

        width: 226px;
       
    }

    a{
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.LIGHT_100};
    }

    

`;

export const Search = styled.div`
position: relative;

flex: 1;
width: 100%;
justify-content: center;

gap: 14px;
`;



    