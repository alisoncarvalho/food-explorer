import styled from 'styled-components'

export const Container = styled.div`
    
    background-color:${({theme})=>theme.COLORS.DARK_400};
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    gap: 30.6rem;
    place-content: center;
    

    .logo{
        display: flex;
        flex-direction:row;
        gap: 1.9rem;
        align-items: center;

        p{
            font-family: Roboto;
            font-size: 4.2rem;
            font-weight: 700;
        }
    }
    
    


    .block{
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

