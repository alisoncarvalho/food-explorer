import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600}

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    white-space: nowrap;

    

    
    
    padding: 24px 123px;
    max-width: 1368px;
    margin: auto;
    

    

    

    

`;

export const Search = styled.div`
position: relative;

flex: 1;
width: 100%;
justify-content: center;

gap: 14px;
`;


export const RedButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    
    
    width: 226px;
`;

export const Exit = styled.div`
    a{
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.LIGHT_100};
        
        margin-top: 20px;
    }
`;



    