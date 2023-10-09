import styled from "styled-components";

export const Container = styled.div`
   width: 304px;
   border: none;
   
   height:462px;
   background-color: ${({theme})=>theme.COLORS.DARK_200};
   border-radius: 8px;
   border: solid 1px ${({theme})=>theme.COLORS.DARK_300};
   padding:  24px;

   text-align: center;

   
   position: relative;


   span{
      font-family: 'Roboto';
   }

   h1, p {
      color: white;
   }

   @media (max-width: 428px) {
      width: 210px;
      min-width: 210px;
      height:292px;
   }

   


   
 
`;

export const Content = styled.div`

   .admin{
      display: flex;
     
      gap: 12px;

      button{
         position: absolute;
         right: 16px;
         top:16px;
         background: none;
         border: none;
         color: ${({theme})=> theme.COLORS.LIGHT_100};
      }

      img{
         margin: 46px auto 0;
      }

      h1{
      
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 14px;
      
      
   }

   p{
      max-width: 256px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
   }

   h2{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      color:${({theme})=>theme.COLORS.CAKE_100} ;
   }
      
   }

   .detail{
      background:none;
      border: none;
   }

   .notAdmin{
      display: flex;
      flex-direction: column;
      gap: 12px;

      #heart{

         background: none;
         border: none;
         color: ${({theme})=>theme.COLORS.LIGHT_300};

         position: absolute;
         top: 16px;
         right: 16px;
      }

      img{
         width: 176px;
         height: 176px;
         margin: 0 auto;
      
      
   }

   h1{
      font-family: 'Poppins';
      font-weight: 700;
      font-size: 24px;
      white-space: nowrap;
   }
   p{
      max-width: 256px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      white-space: nowrap;
   }

   h3{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 32px;
      color:${({theme})=>theme.COLORS.CAKE_100} ;
   }

   #include{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      align-items: center;

      width: 208px;
      margin: 0 auto ;
      
   }
      
      
      .amount{
      display: flex;
      flex-direction: row;
      gap: 14px;
      justify-content: center;
      
      
      
      .button{
         font-size: 24px;
         background: none;
         border: none;
         color: ${({theme})=>theme.COLORS.LIGHT_300}
      }

      span{
         font-size: 20px;
      }
   
   }

   


   }

   @media (max-width: 428px) {

      h1{
      
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 24px;
      
      
   }

   img{
      width: 88px;
      height: 88px;
      margin: 0 auto;
   }

   .amount{
      display: flex;
      flex-direction: row;
      gap: 14px;
      justify-content: center;
      margin-bottom: 10px;
      align-items: center;
      .button{
         background: none;
         border: none;
         color: ${({theme})=>theme.COLORS.LIGHT_300}
      }
   }

   #include{
      button{
         height: 32px;
      }
   }
}



`;