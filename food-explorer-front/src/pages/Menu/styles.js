import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:${({theme})=>theme.COLORS.DARK_400};
    
`;

export const Content = styled.div`
    width: 100%;
    
    padding: 33px 28px;
    display: flex;
    flex-direction: column;
    
`;



export const Main = styled.div`
    
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    gap: 36px;

    
    
    a{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.LIGHT_300};
        
        


        
    }
    #line{
        height: 1px;
        width: 100%;
        background-color:${({theme})=>theme.COLORS.DARK_900};
        margin-top: 10px;
        margin-bottom: 5px;
        
    }

    
    

    
`;

