import styled from "styled-components";

export const Container = styled.div`

    grid-area: "footer";

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    width: 100%;
    height: 77px;

    background-color: ${({theme})=>theme.COLORS.DARK_600};
    
    

    padding: 0 123px;

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


    


    
        
        

        

    

    
    
    

