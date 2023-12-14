import styled from 'styled-components'
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const Container = styled.div`

    @media (min-width:${DEVICE_BREAKPOINTS.XS}) {
            background-color:${({theme})=>theme.COLORS.DARK_400};
            width: 100%;
            /* height: 100vh; */

            display: flex;
            flex-direction: column;
            align-items: center;

            margin: 100px auto;

            
            

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
                border-radius: 16px;
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
        /* height: 100vh; */

        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 100px auto;

        
        

        h1{
            display: none;
        }
    

        .logo{
            width: 100%;
            /* padding: 3 rem; */
            
            justify-content: center;
            
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
        /* height: 100vh; */

        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 100px auto;

        
        
        h1{
            display: none;
        }
        
    

        .logo{
            width: 100%;
            /* padding: 3 rem; */
            
            justify-content: center;
            
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
        height: 100%;

        display: flex;

        flex-direction: column;
        align-items: center;
        
        gap: 0;
        /* place-content: center; */

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
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding:  5rem;
        
        
        /* place-content: center; */
    

        
        
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
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: space-between; */
        gap: 30rem;
        padding: 5rem;
        
        
        place-content: center;
    

        
        
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
    
    
    display: flex;
    flex-direction: column;
    gap: 32px;

    label{
        font-family: Roboto;
        font-size: 1.6rem;
        font-weight: 400;

        display: flex;
        flex-direction: row;
    }

    input{
        width: 348px;
        
        
        
        
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
            font-size: 32px;
        }

        /* label{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom:8px ;
        } */

        

        
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    

    

    a{
        color:${({theme})=>theme.COLORS.LIGHT_100} ;
        
    }
    
`;

