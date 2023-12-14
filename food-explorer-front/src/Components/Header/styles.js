import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const Container = styled.header`
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600}

`;

export const Content = styled.div`
    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) {
        width: 100%;        

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 32px;
        white-space: nowrap;

        padding: 24px 0 ;

        .header , .headerAdmin{
            padding: 50px 28px 0 ;
        }
        .mobile{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;

            button{
                background: none;
                border: none;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-size: 24px;
            }
        }
    }       

    @media (min-width: ${DEVICE_BREAKPOINTS.S}) {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 32px;
        white-space: nowrap;

        padding: 24px 0 ;

        .header , .headerAdmin{
            padding: 50px 28px 0 ;
        }

        .mobile{

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 30px;

            button{
                background: none;
                border: none;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-size: 24px;
            }
        }
    }       

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 32px;
        white-space: nowrap;

        padding: 24px 0 ;

        .header , .headerAdmin{
            padding: 50px 28px 0 ;
        }
        .mobile{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 60px;

            button{
                background: none;
                border: none;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-size: 24px;
            } 
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;  

        display: flex;
        align-items: center;
        gap: 32px;
        white-space: nowrap;

        padding: 24px 0 ;

        .header , .headerAdmin{
            padding: 50px 28px 0 ;
        }
            
        .mobile{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 200px;
            
            button{
                background: none;
                border: none;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-size: 24px;
            }
        }
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 32px;

        padding: 24px 123px;

        .header , .headerAdmin{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
            padding: 0 ;
        }

       .mobile{
            button{
                display: none;
            }
        } 
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
       .mobile{
            button{
                display: none;
            }
        } 
    }

`;

export const Search = styled.div`
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        position: relative;

        flex: 1;
        width: 100%;
        justify-content: center;
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
        position: relative;

        flex: 1;
        width: 100%;
        justify-content: center;
        gap: 14px;
    }
`;

export const RedButton = styled.div`
    width: 226px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;

    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;

export const Exit = styled.div`
    a{
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.LIGHT_100};
        
        margin-top: 20px;
    }

    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;

export const Menu = styled.div`
    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        display: none;
    }
`;



    