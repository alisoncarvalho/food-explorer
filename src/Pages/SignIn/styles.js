import styled from 'styled-components'
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const Container = styled.div`

    @media (min-width:${DEVICE_BREAKPOINTS.XS}) {
        background-color:${({theme})=>theme.COLORS.DARK_400};
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 10rem auto;

        h1{
            display: none;
        }

        .logo{
            width: 100%;
            padding: 3rem;
            
            display: flex;
            flex-direction:row;
            gap: 1rem;
            align-items: center;
        
            p{
                font-family: Roboto;
                font-size: 3.7rem;
                font-weight: 700;
                flex-wrap: nowrap;
        
            }
        }

        .block{
            width: 100%;

            background-color:${({theme})=>theme.COLORS.DARK_700};
            border-radius: 1.6rem;
            padding: 3rem;
            max-width: 47.6rem;

            h1 , a{
                text-align: center;
                font-family: Poppins;
            }

            h1{
                font-size: 3.2rem;
                font-weight: 500;
                margin-bottom: 3.2rem;
            }

            a{
                font-size: 1.4rem;
                font-weight:500;
            }   
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}){
        background-color:${({theme})=>theme.COLORS.DARK_400};
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 10rem auto;

        h1{
            display: none;
        }  

        .logo{
            width: 100%;            
            
            display: flex;
            flex-direction:row;
            justify-content: center;
            gap: 1rem;
            align-items: center;
        
            p{
                font-family: Roboto;
                font-size: 3.7rem;
                font-weight: 700;
                flex-wrap: nowrap;
        
            }
        }

        .block{
            width: 100%;
            
            background-color:${({theme})=>theme.COLORS.DARK_700};
            border-radius: 16px;
            padding: 6rem 5rem;
            max-width: 47.6rem;

            h1 , a{
                text-align: center;
                font-family: Poppins;
            }

            h1{
                font-size: 3.2rem;
                font-weight: 500;
                margin-bottom: 3.2rem;
            }

            a{
                font-size: 1.4rem;
                font-weight:500;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.SM}){
        background-color:${({theme})=>theme.COLORS.DARK_400};
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 10rem auto;
        
        h1{
            display: none;
        }

        .logo{
            width: 100%;
            
            display: flex;
            flex-direction:row;
            justify-content: center;
            gap: 1rem;
            align-items: center;
        
            p{
                font-family: Roboto;
                font-size: 3.7rem;
                font-weight: 700;
                flex-wrap: nowrap;        
            }
        }

        .block{
            width: 100%;

            background-color:${({theme})=>theme.COLORS.DARK_700};
            border-radius: 16px;
            padding: 6rem 5rem;
            max-width: 47.6rem;

            h1 , a{
                text-align: center;
                font-family: Poppins;
            }

            h1{
                font-size: 3.2rem;
                font-weight: 500;
                margin-bottom: 3.2rem;
            }

            a{
                font-size: 1.4rem;
                font-weight:500;
            }   
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.MD}) {
        background-color:${({theme})=>theme.COLORS.DARK_400};
        width: 100%;
        

        display: flex;

        flex-direction: column;
        align-items: center;
        
        
        h1{
            display: none;
        }
    

        .logo{
            display: flex;
            flex-direction:row;
            gap: 1.9rem;
            align-items: center;        
        }
        
        p{
            font-family: Roboto;
            font-size: 4.2rem;
            font-weight: 700;       
        } 

        .block{
            flex: 1;
            background-color:${({theme})=>theme.COLORS.DARK_700};
            border-radius: 16px;
            padding: 6.4rem;
            max-width: 47.6rem;

            h1 , a{
                text-align: center;
                font-family: Poppins;
            }

            h1{
                font-size: 3.2rem;
                font-weight: 500;
                margin-bottom: 3.2rem;
            }

            a{
                font-size: 1.4rem;
                font-weight:500;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        background-color:${({theme})=>theme.COLORS.DARK_400};
        width: 100%;
        

        display: flex;
        flex-direction: row;
        align-items: center;
        
        justify-content: space-around;
        padding:  7.5rem;

        margin: 0 0;
        

        .logo{
            display: flex;
            flex-direction:row;
            gap: 1.9rem;
            align-items: center; 
        }       
        
        
        p{
            font-family: Roboto;
            font-size: 4.2rem;
            font-weight: 700;       
        }

        .block{
            flex: 1;
            background-color:${({theme})=>theme.COLORS.DARK_700};
            border-radius: 16px;
            padding: 6.4rem;
            max-width: 47.6rem;

            h1 , a{
                text-align: center;
                font-family: Poppins;
            }

            h1{
                display: none;
                font-size: 3.2rem;
                font-weight: 500;
                margin-bottom: 3.2rem;
            }

            a{
                font-size: 1.4rem;
                font-weight:500;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
        background-color:${({theme})=>theme.COLORS.DARK_400};
        width: 100%;
        

        display: flex;
        flex-direction: row;
        align-items: center;
        
        justify-content: space-around;
        padding:  7.5rem;
        

        .logo{
            display: flex;
            flex-direction:row;
            gap: 1.9rem;
            align-items: center; 
        }       
        
        
        p{
            font-family: Roboto;
            font-size: 4.2rem;
            font-weight: 700;       
        }

        .block{
            flex: 1;
            background-color:${({theme})=>theme.COLORS.DARK_700};
            border-radius: 16px;
            padding: 6.4rem;
            max-width: 47.6rem;

            h1 , a{
                text-align: center;
                font-family: Poppins;
            }

            h1{
                display: none;
                font-size: 3.2rem;
                font-weight: 500;
                margin-bottom: 3.2rem;
            }

            a{
                font-size: 1.4rem;
                font-weight:500;
            }
        }
    }
`;

export const Form = styled.form`
    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        label{
            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;

            display: flex;
            flex-direction: row;
        }

        
        .input-wrapper{
            display: flex;
            flex-direction: column;
            gap:.8rem;
        }

        .form{
            h1{
                font-family: 'Poppins';
                
                font-weight: 500;
                font-size: 3.2rem;
            }   
        }

        input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        a{
            color:${({theme})=>theme.COLORS.LIGHT_100} ;
            
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}){
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        label{
            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;

            display: flex;
            flex-direction: row;
        }

        input{
            width: 34.8rem;
            
        }
        .input-wrapper{
            display: flex;
            flex-direction: column;
            gap:.8rem;
        }

        .form{
            h1{
                font-family: 'Poppins';
                
                font-weight: 500;
                font-size: 3.2rem;
            }   
        }

        input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        a{
            color:${({theme})=>theme.COLORS.LIGHT_100} ;
            
        }
    }
`;