import styled from "styled-components";

export const Container = styled.div`
   width: 304px;
   height:462px;

   display: flex;
   flex-direction: column;
   gap: 15px;

   position: relative;
   
   border: none;
   /* background-color: pink; */
   background-color: ${({theme})=>theme.COLORS.DARK_200};
   border-radius: 8px;
   border: solid 1px ${({theme})=>theme.COLORS.DARK_400};
   padding:  24px;

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
      font-size: 32px;
      font-weight: 400;
   }

   img{
      width: 176px;
      height: 176px;
      margin: 0 auto;      
   }
   
   #include{
      display: flex;
      flex-direction: row;
      gap: 16px;

      align-items: center;

      padding: 0 24px;

      .amount{
         display: flex;
         flex-direction: row;
         gap:12px;

         align-items: center;

         font-size: 20px;
         font-weight: 700;
         color: ${({theme})=> theme.COLORS.LIGHT_300};

         button{
            background: none;
            border: none;
            font-size: 20px;   
            color: ${({theme})=> theme.COLORS.LIGHT_100};        
         }
      }

   }

   .heart{
      position: absolute;
      right: 18px;
      top: 16px;

      background: none;
      border: none;

      font-size: 24px;
      color: ${({theme})=> theme.COLORS.LIGHT_300};
      
   }
   


   


   

   


   
 
`;

