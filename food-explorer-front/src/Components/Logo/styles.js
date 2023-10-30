import styled from 'styled-components'

export const Container = styled.div`
width: fit-content;
    position: relative;

    h1{
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({theme})=>theme.COLORS.LIGHT_100};

    }
    h2{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1.2rem;
        color: ${({theme})=>theme.COLORS.CAKE_200};
        position: absolute;
        top: 2.2rem;
        left: 13.8rem;
    }
    


`;

export const Content = styled.div`
    
    

    .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.8rem;
        white-space: nowrap;

    }

    .logoUser{
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        white-space: nowrap;
    }


    @media (min-width: 700px) {

        
        
        
        h2{
            
        }
    }
`;