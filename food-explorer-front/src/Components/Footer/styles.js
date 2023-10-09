import styled from "styled-components";

export const Container = styled.div`

    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    

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
    @media (min-width:1000px) {
        grid-area: "footer";

        width: 100%;
        height: 77px;

        background-color: ${({theme})=>theme.COLORS.DARK_600};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 800px;
        
        

        

    }

    @media (min-width: 428px) {
        grid-area: "footer";
        width: 100%;
        
        
        background-color: ${({theme})=>theme.COLORS.DARK_600};

        
        .logo{
            width: 140px;
        }
        p{
            width: 220px;
            white-space: nowrap;
        }

        
        
        padding: 0 29px;

        

        

    }
    
    


`;