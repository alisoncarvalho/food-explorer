import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_600}

`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

    width: 100%;

    
    
    padding: 1rem 6rem;
    gap: 3.2rem;

    .redButton{
        width: 100%;
        max-width: 12rem;
    }

    a{
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.LIGHT_100};
    }

    

`;

export const Search = styled.div`
align-self: center;
width: 100%;

#search{
    text-align:center;
    
}
svg{
    margin-left:4rem;
    margin-right: -4rem;
}

    

    
`;