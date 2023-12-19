import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:${({theme})=>theme.COLORS.DARK_400};
`;

export const Content = styled.div`
    width: 100%;
    
    padding: 3.3rem 2.8rem;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    a{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 2.4rem;
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.LIGHT_300};
    }

    #line{
        height: .1rem;
        width: 100%;
        background-color:${({theme})=>theme.COLORS.DARK_900};
        margin-top: 1rem;
        margin-bottom: .5rem;
    }
`;