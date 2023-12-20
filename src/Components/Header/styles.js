import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const Container = styled.header`
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600}

`;

export const Content = styled.div`
    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) {
        width: 100%;       

        padding: 2.4rem 0;

        .header , .headerAdmin{
            padding: 5rem 2.4rem 0 ;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 7%;
        }

        .mobile{

            button{
                background: none;
                border: none;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-size: 2.4rem;
            }
        }
    }       

    @media (min-width: ${DEVICE_BREAKPOINTS.S}) {
        width: 100%;
        padding: 2.4rem 0 ;

        .header , .headerAdmin{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15%;

            padding: 5rem 2.8rem 0 ;
        }

        .mobile{
            button{
                background: none;
                border: none;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-size: 2.4rem;
            }
        }
    }       

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 100%;
        

        padding: 2.4rem 0 ;

        .header , .headerAdmin{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 23%;

            padding: 5rem 2.8rem 0 ;
        }
        .mobile{
            button{
                background: none;
                border: none;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-size: 2.4rem;
            } 
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;  
        padding: 2.4rem 10rem ;

        .header , .headerAdmin{
            display: flex;
            align-items: center;
            gap: 30%;
            white-space: nowrap;            
        }
            
        .mobile{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20rem;
            
            button{
                background: none;
                border: none;
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                font-size: 2.4rem;
            }
        }
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3.2rem;

        padding: 2.4rem 12.3rem;

        .header , .headerAdmin{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1.6rem;
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
    @media (max-width:1023px) {
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
        gap: 1.4rem;
    }
`;

export const RedButton = styled.div`
    width: 22.6rem;
    display: flex;
    flex-direction: row;
    gap: .8rem;
    align-items: center;
    justify-content: center;

    @media (max-width:1023px) {
        display: none;
    }
`;

export const Exit = styled.div`
    a{
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.LIGHT_100};
        
        margin-top: 2rem;
    }

    @media (max-width:1023px) {
        display: none;
    }
`;

export const Menu = styled.div`
    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        display: none;
    }
`;



    