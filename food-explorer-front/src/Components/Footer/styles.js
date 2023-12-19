import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
    width: 100%;
    background-color: ${({theme})=>theme.COLORS.DARK_600};
`;
    
export const Content = styled.div`

    @media (min-width:${DEVICE_BREAKPOINTS.XS}) {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 2.4rem 0  ;

        .logo{
            display: none;
        }

    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}) {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 2.4rem 0  ;

        .logo{
            display: none;
        }

    }

    @media (min-width:${DEVICE_BREAKPOINTS.SM}) {
        
        display: flex;
        flex-direction: row;        
        
        align-items: center;
        justify-content: space-between;
        padding: 2.4rem;

        width: 100%;
        margin: auto;
        
        .logo{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .8rem;
            white-space: nowrap;

            color:${({theme})=>theme.COLORS.LIGHT_700};
            
            svg{
                color: ${({theme})=>theme.COLORS.LIGHT_700};
                width: 1.7rem;
            }

            h1{
                font-family: 'Roboto';
                
                font-weight: 700;
                font-size: 1.5rem;
            }
        }
        p{
            font-size: 1.5rem;
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {

        display: flex;
        align-items: center;
        justify-content: space-between;
        
        margin: auto;

        padding: 2.4px 12.3rem;

        .logo{
            display: flex;
            flex-direction: row;
            gap: 1rem;
            white-space: nowrap;

            color:${({theme})=>theme.COLORS.LIGHT_700};
            
            svg{
                color: ${({theme})=>theme.COLORS.LIGHT_700};
            }

            h1{
                font-family: 'Roboto';
                
                font-weight: 700;
                font-size: 2.4rem;
            }
        }
    }
            
    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {

        display: flex;        
        align-items: center;
        justify-content: space-between;

        margin: auto;
        
        padding: 2.4rem 12.3rem;

        .logo{
            display: flex;
            flex-direction: row;
            gap: 1.0rem;
            white-space: nowrap;

            color:${({theme})=>theme.COLORS.LIGHT_700};
            
            svg{
                color: ${({theme})=>theme.COLORS.LIGHT_700};
            }

            h1{
                font-family: 'Roboto';
                
                font-weight: 700;
                font-size: 2.4rem;
            }
        }
    }
`;








    
        
        

        

    

    
    
    

