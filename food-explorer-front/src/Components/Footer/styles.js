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
        
        
        padding: 24px 0  ;
        
        
        
        
        .logo{
        display: none;

        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}) {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        
        padding: 24px 0  ;
        
        
        
        
        .logo{
        display: none;

        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.SM}) {
        
        display: flex;
        flex-direction: row;
        /* padding: 24px 10px  ; */
        
        align-items: center;
        justify-content: space-between;
        padding: 24px  ;

        /* gap: 50px; */

        width: 100%;
        margin: auto;
        
        .logo{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            white-space: nowrap;

            color:${({theme})=>theme.COLORS.LIGHT_700};
            
            svg{
                color: ${({theme})=>theme.COLORS.LIGHT_700};
                width: 17px;
            }

            h1{
                font-family: 'Roboto';
                
                font-weight: 700;
                font-size: 15px;
            }

            

        }
        p{
            font-size: 15px;
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {

        display: flex;

        align-items: center;
        justify-content: space-between;

        /* max-width: 1368px; */
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
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {

        display: flex;
        
        align-items: center;
        justify-content: space-between;

        /* max-width: 1368px; */
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
    }
`;


    
        
        

        

    

    
    
    

