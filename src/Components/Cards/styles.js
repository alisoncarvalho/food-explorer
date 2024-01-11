import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

   @media (min-width:${DEVICE_BREAKPOINTS.XS}) {
      min-width: 21rem;
      height:29.2rem;

      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      position: relative;
      
      border: none;
      background-color: ${({theme})=>theme.COLORS.DARK_200};
      border-radius: .8rem;
      border: solid 1px ${({theme})=>theme.COLORS.DARK_400};
      padding:  2.4rem;

      text-align: center;
      
      h1{
         color: ${({theme})=> theme.COLORS.LIGHT_300};
         font-weight: 500;
         font-size: 1.4rem;
      }

      p{
         display: none;
      }

      h3{
         font-family: 'Roboto';
         color: ${({theme})=> theme.COLORS.CAKE_200};
         font-size: 1.6rem;
         font-weight: 400;
      }         

      img{
         width: 8.8rem;
         height: 8.8rem;
         margin: 0 auto;      
      }
      
      #include{
         display: flex;
         flex-direction: column;
         gap: 1.6rem;

         align-items: center;

         .redButton{
            >button{
               padding:1.2rem 2.4rem;
               width: 16.2rem;
               height: 3.2rem;
            }
         }
         
         .amount{
            display: flex;
            flex-direction: row;
            gap:1.6rem;

            align-items: center;

            font-size: 2rem;
            font-weight: 700;
            color: ${({theme})=> theme.COLORS.LIGHT_300};

            button{
               background: none;
               border: none;
               font-size: 2rem;   
               color: ${({theme})=> theme.COLORS.LIGHT_100};        
            }
         }
      }
         
      .heart{
         position: absolute;
         right: 1.8rem;
         top: 1.6rem;

         background: none;
         border: none;

         font-size: 2.4rem;
         color: ${({theme})=> theme.COLORS.LIGHT_300};
         
      } 

      .edit{
         position: absolute;
         right: 1.8rem;
         top: 1.6rem;

         background: none;
         border: none;

         font-size: 2.4rem;
         color: ${({theme})=> theme.COLORS.LIGHT_300};
         
      } 

      .adminCard{
         
         margin-top: 4.2rem;

         display: flex;
         flex-direction: column;
         gap: 1.5rem;
         
      }

      .customerCard{
         display: flex;
         flex-direction: column;
         gap: 1.5rem;

         
      }
   }
   
   @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
      min-width: 30.4rem;
      height:46.2rem;

      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      position: relative;
      
      border: none;
      
      background-color: ${({theme})=>theme.COLORS.DARK_200};
      border-radius: .8rem;
      border: solid 1px ${({theme})=>theme.COLORS.DARK_400};
      padding:  2.4rem;

      text-align: center;      

      h1{
         color: ${({theme})=> theme.COLORS.LIGHT_300};
      }

      p{
         color: ${({theme})=> theme.COLORS.LIGHT_400};
      }

      h3{
         font-family: 'Roboto';
         color: ${({theme})=> theme.COLORS.CAKE_200};
         font-size: 3.2rem;
         font-weight: 400;
         margin-top: 1.5rem;
      }

      img{
         width: 17.6rem;
         height: 17.6rem;
         margin: 0 auto;      
      }
      
      #include{
         display: flex;
         flex-direction: row;
         gap: 1.6rem;

         align-items: center;

         padding: 0 2.4rem;

         .redButton{
            >button{
               padding:1.2rem 2.4rem;
               width: 9.2rem;
               height: 4.8rem;
            }
         }

         .amount{
            display: flex;
            flex-direction: row;
            gap:1.2rem;

            align-items: center;

            font-size: 2rem;
            font-weight: 700;
            color: ${({theme})=> theme.COLORS.LIGHT_300};

            button{
               background: none;
               border: none;
               font-size: 2rem;   
               color: ${({theme})=> theme.COLORS.LIGHT_100};        
            }
         }

      }

      .heart{
         position: absolute;
         right: 1.8rem;
         top: 1.6rem;

         background: none;
         border: none;

         font-size: 2.4rem;
         color: ${({theme})=> theme.COLORS.LIGHT_300};
         
      } 

      .edit{
         position: absolute;
         right: 1.8rem;
         top: 1.6rem;

         background: none;
         border: none;

         font-size: 2.4rem;
         color: ${({theme})=> theme.COLORS.LIGHT_300};
         
      } 

      .adminCard{
         
         margin-top: 4.2rem;

         display: flex;
         flex-direction: column;
         gap: 1.5rem;
         
      }

      .customerCard{
         display: flex;
         flex-direction: column;
         gap: 1.5rem;

         
      }
   }
      
   @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
      min-width: 30.4rem;
      height:46.2rem;

      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      position: relative;
      
      border: none;
      /* background-color: blue; */
      background-color: ${({theme})=>theme.COLORS.DARK_200};
      border-radius: .8rem;
      border: solid 1px ${({theme})=>theme.COLORS.DARK_400};
      padding:  2.4rem;

      text-align: center;      

      h1{
         color: ${({theme})=> theme.COLORS.LIGHT_300};
      }

      p{
         color: ${({theme})=> theme.COLORS.LIGHT_400};
      }

      h3{
         font-family: 'Roboto';
         color: ${({theme})=> theme.COLORS.CAKE_200};
         font-size: 3.2rem;
         font-weight: 400;
         margin-top: 1.5rem;
      }

      img{
         width: 17.6rem;
         height: 17.6rem;
         margin: 0 auto;      
      }
      
      #include{
         display: flex;
         flex-direction: row;
         gap: 1.6rem;

         align-items: center;

         padding: 0 2.4rem;

         .amount{
            display: flex;
            flex-direction: row;
            gap:1.2rem;

            align-items: center;

            font-size: 2rem;
            font-weight: 700;
            color: ${({theme})=> theme.COLORS.LIGHT_300};

            button{
               background: none;
               border: none;
               font-size: 2rem;   
               color: ${({theme})=> theme.COLORS.LIGHT_100};        
            }
         }

      }

      .heart{
         position: absolute;
         right: 1.8rem;
         top: 1.6rem;

         background: none;
         border: none;

         font-size: 2.4rem;
         color: ${({theme})=> theme.COLORS.LIGHT_300};
         
      } 

      .edit{
         position: absolute;
         right: 1.8rem;
         top: 1.6rem;

         background: none;
         border: none;

         font-size: 2.4rem;
         color: ${({theme})=> theme.COLORS.LIGHT_300};
         
      } 

      .adminCard{
         
         margin-top: 4.2rem;

         display: flex;
         flex-direction: column;
         gap: 1.5rem;
         
      }

      .customerCard{
         display: flex;
         flex-direction: column;
         gap: 1.5rem;

         
      }
   }
`;
      

      


      

      


      

