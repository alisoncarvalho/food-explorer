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
        padding: 0  24px 0 24px;


    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 0  123px 0 123px;

    }
`;

export const Main = styled.div`
    @media (min-width:${DEVICE_BREAKPOINTS.XS}){

    width: 100%;
    margin-top: 62px;

    display: flex;
    flex-direction: column;

    gap: 24px;

    .category{
        
       height:344px;
       
        display: flex;
        flex-direction: column;
        position: relative;

        
        

        
        

        h2{
            
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 24px;
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
               font-size: 80px;
           }
        }
        

    }


    .cards{
        z-index: 0;
        /* min-width: 390px; */
        
        display: flex;
        flex-direction: row;
        gap: 16px;
        overflow-x: auto;

        



        
        
        
        
    }
    .cards::-webkit-scrollbar {
        display: none; 
    }

    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}){

        width: 100%;
        /* margin-top: 62px; */

        display: flex;
        flex-direction: column;

        gap: 24px;

        .category{
            
        height:344px;
        
            display: flex;
            flex-direction: column;
            position: relative;

    
    

    
    

        h2{
            
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 24px;
            align-self: start;
        }

        .sides{
            display: none;
        }
        

        }


        .cards{
            z-index: 0;
            /* min-width: 390px; */
            
            display: flex;
            flex-direction: row;
            gap: 16px;
            overflow-x: auto;

            h4{
            position: absolute;
            top: 40%;
            left: 35%;

            display: flex;
            flex-direction: column;
            align-items: center;

            >svg{
                font-size: 80px;
            }
        }



            
            
            
            
        }
        .cards::-webkit-scrollbar {
            display: none; 
        }

    }

    @media (min-width:${DEVICE_BREAKPOINTS.MD}){

        width: 100%;
        /* margin-top: 62px; */

        display: flex;
        flex-direction: column;

        gap: 24px;

        .category{
            
            height:344px;

            display: flex;
            flex-direction: column;
            position: relative;







        h2{
            
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 24px;
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
                    font-size: 80px;
                }
            }

        .sides{
            display: none;
        }


        }


        .cards{
            z-index: 0;
            /* min-width: 390px; */
            
            display: flex;
            flex-direction: row;
            gap: 16px;
            overflow-x: auto;

            h4{
            position: absolute;
            top: 40%;
            left: 35%;

            display: flex;
            flex-direction: column;
            align-items: center;

            >svg{
                font-size: 80px;
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
            
            min-height: 500px;
            
            display: flex;
            flex-direction: column;
            margin-bottom:47px;

            
            h4{
                position: absolute;
                top: 40%;
                left: 50%;

                display: flex;
                flex-direction: column;
                align-items: center;

                >svg{
                    font-size: 80px;
                }
            }

            .text{
                padding: 0 24px;
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 18px;
                margin-bottom: 24px;
                align-self: start;
            }

            .sides{
                width: 1122px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: 0 30px;
                position: absolute;
                top: 250px;
                z-index: 1;

                button{
                    background:none;
                    border: none;
                    color: ${({theme})=> theme.COLORS.LIGHT_100};
                    font-size: 40px;
                            
                }
            }
            

        }


        .cards{
            z-index: 0;
            min-height: 463px;
            padding: 0 24px;
            max-width: 1122px;
            display: flex;
            flex-direction: row;
            gap: 16px;
            overflow-x: auto;

            
            
            
            
        }
        .cards::-webkit-scrollbar {
            display: none; 
        }


    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
        width: 100%;
        
        


        .category{
            
            min-height: 500px;
            position: relative;
            display: flex;
            flex-direction: column;
            padding-bottom:47px;

            
            h4{
                position: absolute;
                top: 40%;
                left: 50%;

                display: flex;
                flex-direction: column;
                align-items: center;

                >svg{
                    font-size: 80px;
                }
            }

            .text{
                padding: 0 24px;
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 18px;
                margin-bottom: 24px;
                align-self: start;
            }

            .sides{
                width: 1122px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: 0 30px;
                position: absolute;
                top: 250px;
                z-index: 1;

                button{
                    background:none;
                    border: none;
                    color: ${({theme})=> theme.COLORS.LIGHT_100};
                    font-size: 40px;
                            
                }
            }
            

        }


        .cards{
            z-index: 0;
            min-height: 463px;
            padding: 0 24px;
            max-width: 1122px;
            display: flex;
            flex-direction: row;
            gap: 16px;
            overflow-x: auto;

            
            
            
            
        }
        .cards::-webkit-scrollbar {
            display: none; 
        }


    }
`;

export const Banner = styled.div`

    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        margin-top: 25px;

        img{
            display: none;
            
            
        }

        
    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}){

        img{
            display: none;
            
            
        }

         
    }

    @media (min-width:${DEVICE_BREAKPOINTS.SM}) {
        
        
        img{
            display: block;
            width: 191px;            
            height: 149px;
            margin-top: 15px;
            margin-left: -20px;
        }



       


    }

    @media (min-width:${DEVICE_BREAKPOINTS.MD}) {
        /* margin-left: 85px; */
        
        
        img{
            display: block;
            width: 250px;            
            height: 195px;
            margin-top: 15px;
            margin-left: -20px;
            
            
        }



    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {

        text-align: center;
        margin-left: 0;

        img{
            width: 480px;

            
            margin-top: 20px;
            
            height: 340px;
            margin-left: -45px;
        }
    }   
        
    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {

        text-align: center;
        margin-left: 0;
        z-index: 0;
        
        img{
            width: 632px;
            
            
            height: 406px;

            margin-left: -55px;

            

            
            

           

            
           

            
            
            

                
        }
    
        

        
            
        

    }


`;

export const Slogan = styled.div`
    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        position: relative;
        .text{
            position: absolute;
            top: 25px;
            left: 36px;

            width: 215px;
            height: 60px;

            display: flex;
            flex-direction: column;
            
            
            font-family: 'Poppins' , sans-serif;

            h1{
                font-weight: 600;
                font-size: 18px;
            }
            
            p{
                font-weight: 400;
                font-size: 12px;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.S}){
        position: relative;
        .text{
            position: absolute;
            top: 25px;
            left: 65px;

            width: 215px;
            height: 60px;

            display: flex;
            flex-direction: column;
            
            
            font-family: 'Poppins' , sans-serif;

            h1{
                font-weight: 600;
                font-size: 18px;
            }
            
            p{
                font-weight: 400;
                font-size: 12px;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.SM}){
    
    position: relative;

    .text{
            position: absolute;
            top: -90px;
            left: 180px;

            width: 200px;
            height: 60px;

            display: flex;
            flex-direction: column;
            
            
            font-family: 'Poppins' , sans-serif;

            h1{
                font-weight: 600;
                font-size: 17px;
            }
            
            p{
                font-weight: 400;
                font-size: 11px;
            }
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}){
    
    position: relative;

    .text{
        position: absolute;
        top: -170px;
        left: 550px;

        width: 421px ;
        
        
        font-family: 'Poppins' , sans-serif;

        display: flex;
        flex-direction: column;

        h1{
        font-weight: 600;
        font-size: 38px;
        
        }
        p{
            font-weight: 400;
            font-size: 14px;
        }
    }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}){
    
        position: relative;

        .text{
            position: absolute;
            top: -200px;
            left: 680px;
            

            width: 421px ;
            
            
            font-family: 'Poppins' , sans-serif;

            display: flex;
            flex-direction: column;

            h1{
            font-weight: 600;
            font-size: 38px;
            
            }
            p{
                font-weight: 400;
                font-size: 14px;
            }
        }
    }
`;

export const Background = styled.div`
    

    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        
        width: 272px;
        height: 120px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
      
        
        border-radius: 3px;
            
        
            
    } 

    @media (min-width:${DEVICE_BREAKPOINTS.S}){
        
        width: 327px;
        height: 120px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
       
       
        border-radius: 3px;
            
        
            
    } 

    @media (min-width:${DEVICE_BREAKPOINTS.SM}){
        
        width: 377px;
        height: 120px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
       
       
        border-radius: 3px;
            
        z-index: -1;

        position: absolute;
        top: 203px;
        
            
    } 
    
    @media (min-width:${DEVICE_BREAKPOINTS.LG}){
        width: 1100px;
        height: 260px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 3px;
        position: absolute;

        top: 221px;
        
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}){
       
        width: 1200px;
        height: 323px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);        
        border-radius: 3px;
        position: absolute;

        top: 224px;

        z-index: -1;

       
    }

    

    
       
`;


