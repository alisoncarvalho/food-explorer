import styled from 'styled-components'
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    width: 100%;

    position: relative;

    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        
        background-color:${({theme})=>theme.COLORS.DARK_400};
    }
`;

export const Content = styled.div`
    @media (min-width:${DEVICE_BREAKPOINTS.XS}) {
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 0  2.4rem 0 2.4rem;
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 0  12.3rem 0 12.3rem;
    }
`;

export const Main = styled.div`
    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        width: 100%;
        margin-top: 6.2rem;

        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        .category{        
            height:34.4rem;
        
            display: flex;
            flex-direction: column;
            position: relative;

            h2{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 1.8rem;
                margin-bottom: 2.4rem;
                align-self: start;
            }

            .sides{
                display: none;
            }

            h4{
            position: absolute;
            top: 40%;
            left: 35%;

            display: flex;
            flex-direction: column;
            align-items: center;

            >svg{
                font-size: 8rem;
            }
            }
        }

        .cards{
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
            overflow-x: auto;
            z-index: 0;
        }

        .cards::-webkit-scrollbar {
            display: none; 
        }

    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}){
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        .category{
            height:34.4rem;
        
            display: flex;
            flex-direction: column;
            position: relative;

            h2{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 1.8rem;
                margin-bottom: 2.4rem;
                align-self: start;
            }

            .sides{
                display: none;
            }
        }

        .cards{
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
            overflow-x: auto;
            z-index: 0;

            h4{
                position: absolute;
                top: 40%;
                left: 35%;

                display: flex;
                flex-direction: column;
                align-items: center;

                >svg{
                    font-size: 8rem;
                }
            }   
        }

        .cards::-webkit-scrollbar {
            display: none; 
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.MD}){
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        .category{            
            height:34.4rem;

            display: flex;
            flex-direction: column;
            position: relative;

            h2{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 1.8rem;
                margin-bottom: 2.4rem;
                align-self: start;
            }

            h4{
                position: absolute;
                top: 40%;
                left: 45%;

                display: flex;
                flex-direction: column;
                align-items: center;

                >svg{
                    font-size: 8rem;
                }
            }

            .sides{
                display: none;
            }
        }

        .cards{
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
            overflow-x: auto;
            z-index: 0;

            h4{
                position: absolute;
                top: 40%;
                left: 35%;

                display: flex;
                flex-direction: column;
                align-items: center;

                >svg{
                    font-size: 8.0rem;
                }
            }
        }

        .cards::-webkit-scrollbar {
            display: none; 
        }

    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        width: 100%;

        .category{            
            min-height: 50rem;
            
            display: flex;
            flex-direction: column;
            margin-bottom:4.7rem;
            
            h4{
                position: absolute;
                top: 40%;
                left: 50%;

                display: flex;
                flex-direction: column;
                align-items: center;

                >svg{
                    font-size: 8rem;
                }
            }

            .text{
                padding: 0 2.4rem;
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 1.8rem;
                margin-bottom: 2.4rem;
                align-self: start;
            }

            .sides{
                width: 112.2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: 0 3rem;
                position: absolute;
                top: 25rem;
                z-index: 1;

                button{
                    background:none;
                    border: none;
                    color: ${({theme})=> theme.COLORS.LIGHT_100};
                    font-size: 4rem;
                            
                }
            }
            

        }

        .cards{
            z-index: 0;
            min-height: 46.3rem;
            padding: 0 2.4rem;
            max-width: 112.2rem;
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
            overflow-x: auto;
        }

        .cards::-webkit-scrollbar {
            display: none; 
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
        width: 100%;

        .category{
            min-height: 50rem;
            position: relative;
            display: flex;
            flex-direction: column;
            padding-bottom:4.7rem;

            h4{
                position: absolute;
                top: 40%;
                left: 50%;

                display: flex;
                flex-direction: column;
                align-items: center;

                >svg{
                    font-size: 8rem;
                }
            }

            .text{
                padding: 0 2.4rem;
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 1.8rem;
                margin-bottom: 2.4rem;
                align-self: start;
            }

            .sides{
                width: 112.2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: 0 3rem;
                position: absolute;
                top: 25rem;
                z-index: 1;

                button{
                    background:none;
                    border: none;
                    color: ${({theme})=> theme.COLORS.LIGHT_100};
                    font-size: 4rem;
                            
                }
            }
        }

        .cards{
            z-index: 0;
            min-height: 46.3rem;
            padding: 0 2.4rem;
            max-width: 112.2rem;
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
            overflow-x: auto;
        }

        .cards::-webkit-scrollbar {
            display: none; 
        }


    }
`;

export const Banner = styled.div`

    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        margin-top: 2.5rem;

        img{
            display: none;
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}){
        img{
            display: none;
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.SM}){
        img{
            display: block;
            width: 19.1rem;            
            height: 14.9rem;
            margin-top: 1.5rem;
            margin-left: -2rem;
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.MD}) {
        img{
            display: block;
            width: 25rem;            
            height: 19.5rem;
            margin-top: 1.5rem;
            margin-left: -2rem;            
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}){
        margin-left: 0;
        img{
            width: 48rem;
            height: 34rem;
            margin-left: -4.5rem;
            margin-top: 2rem;
        }
    }   
        
    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
        text-align: center;
        margin-left: 0;
        z-index: 0;

        img{
            width: 63.2rem;
            height: 40.6rem;

            margin-left: -5.5rem;        
        }
    }
`;

export const Slogan = styled.div`
    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        position: relative;

        .text{
            position: absolute;
            top: 2.5rem;
            left: 3.6rem;

            width: 21.5rem;
            height: 6rem;

            display: flex;
            flex-direction: column;
            
            font-family: 'Poppins' , sans-serif;

            h1{
                font-weight: 600;
                font-size: 1.8rem;
            }
            
            p{
                font-weight: 400;
                font-size: 1.2rem;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}){
        position: relative;

        .text{
            position: absolute;
            top: 2.5rem;
            left: 6.5rem;

            width: 21.5rem;
            height: 6rem;

            display: flex;
            flex-direction: column;

            font-family: 'Poppins' , sans-serif;

            h1{
                font-weight: 600;
                font-size: 1.8rem;
            }
            
            p{
                font-weight: 400;
                font-size: 1.2rem;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.SM}){
        position: relative;

        .text{
            position: absolute;
            top: -9rem;
            left: 18rem;

            width: 20rem;
            height: 6rem;

            display: flex;
            flex-direction: column;
            
            
            font-family: 'Poppins' , sans-serif;

            h1{
                font-weight: 600;
                font-size: 1.7rem;
            }
            
            p{
                font-weight: 400;
                font-size: 1.1rem;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}){    
        position: relative;

        .text{
            position: absolute;
            top: -17rem;
            left: 55rem;

            width: 42.1rem ;
            
            font-family: 'Poppins' , sans-serif;

            display: flex;
            flex-direction: column;

            h1{
            font-weight: 600;
            font-size: 3.8rem;
            }

            p{
                font-weight: 400;
                font-size: 1.4rem;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}){
        position: relative;

        .text{
            position: absolute;
            top: -20rem;
            left: 68rem;

            width: 42.1rem ;

            font-family: 'Poppins' , sans-serif;

            display: flex;
            flex-direction: column;

            h1{
            font-weight: 600;
            font-size: 3.8rem;
            
            }
            p{
                font-weight: 400;
                font-size: 1.4rem;
            }
        }
    }
`;

export const Background = styled.div`

    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        width: 27.2rem;
        height: 12rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        border-radius: 3px;
    } 

    @media (min-width:${DEVICE_BREAKPOINTS.S}){
        width: 32.7rem;
        height: 12rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        border-radius: 3px;
    } 

    @media (min-width:${DEVICE_BREAKPOINTS.SM}){
        width: 37.7rem;
        height: 12rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        border-radius: 3px;
            
        position: absolute;
        top: 20.3rem;
        z-index: -1;
    } 
    
    @media (min-width:${DEVICE_BREAKPOINTS.LG}){
        width: 110rem;
        height: 26rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 3px;
        position: absolute;

        top: 22.1rem;
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}){
        width: 120rem;
        height: 32.3rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);        
        border-radius: 3px;
        position: absolute;

        top: 22.4rem;

        z-index: -1;
    } 
`;