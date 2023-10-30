import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 77px;
    
    background-color: ${({theme})=>theme.COLORS.DARK_600};
    

    
    
`;


export const Content = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: space-between;

    max-width: 1368px;
    margin: auto;
    
    padding: 24px 123px;
    



    
    


    .logo{
        display: flex;
        flex-direction: row;
        gap: 10px;
        white-space: nowrap;

        color:${({theme})=>theme.COLORS.LIGHT_700};
        
        svg{
            color: ${({theme})=>theme.COLORS.LIGHT_700};
        }

        h1{
            font-family: 'Roboto';
            
            font-weight: 700;
            font-size: 24px;
        }

    }
`;


    
        
        

        

    

    
    
    

