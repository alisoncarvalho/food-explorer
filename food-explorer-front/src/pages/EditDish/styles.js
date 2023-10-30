import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme})=> theme.COLORS.DARK_400};

    
    display: grid ;
    grid-template-rows: 114px auto 77px;
    
    overflow: auto;
    

   
    


    label{
        margin-top: 24px;
        margin-bottom: 16px;

        display: flex;
        
        

    }

    a{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 24px;
        
        

        color: ${({theme})=>theme.COLORS.LIGHT_300};
    }

    h1{
        display: flex;
        color: ${({theme})=>theme.COLORS.LIGHT_300}; 
        font-weight: 500;
    }

    

    

    
    
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    
    max-width: 1368px;
    
    margin: auto;
`;

export const Form = styled.form`

display: flex;
    flex-direction: column;
    padding: 40px 123px;

    
    
    .labelImage{
        
        label {
            flex-direction: column;
            align-items: flex-start;
            cursor: pointer;

            margin-bottom: 0;
            
        }


        span{
            display: flex;
            flex-direction: row;
            gap: 8px;
            align-items: center;
            position: absolute;
            top: 12px;
            left: 14px;
        }
        .changeImage{
            width: 100%;
            height: 48px;
            border-radius: 5px;
            background-color: ${({theme})=> theme.COLORS.DARK_800};
            display: flex;
            flex-direction: row;
            gap: 8px;
            position: relative;
            margin-top: 16px;


            

        

        }

        #image-file{
        display: none;
        }
        
        

    }   



    

    select{
        -webkit-appearance:none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        height: 48px;
        border-radius:5px;
        border: none;
        background-color: ${({theme})=>theme.COLORS.DARK_900};
        color: ${({theme})=>theme.COLORS.LIGHT_500};
        padding: 13px 14px ;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
            
        }
    }

    

    .tagsBox{
        width: 100%;
        height: fit-content;
        border: none;
        border-radius: 5px;

        background-color:${({theme})=>theme.COLORS.DARK_900} ;
        padding: 8px;
        

        .tags{
            width:100%;
            display: flex;
            flex-direction: row;
            gap: 8px;
            
            
        }

        button{
            background: none;
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    .buttons{
        
        display: flex;
        flex-direction: row;
        gap: 32px;
        padding: 24px 0;
    }
    .button1 {
        
        button{
            width: 160px;
            background-color: ${({theme})=>theme.COLORS.DARK_800};
        }
    }
    .button2 {
        
        button{
            width: 172px;
            background-color: ${({theme})=>theme.COLORS.TOMATO_400};
        }
    }

    @media (min-width: 900px) {
        width: 100%;
        .firstline{
            display: flex;
            flex-direction:row;
            gap: 32px;
            
            

            .labelImage{
                width: 60%;
                
                
            }

            .name{
                width: 100%;
            }
            .category{
                width: 80%;
            }
        }

        .secondLine{
            
            display: flex;
            flex-direction: row;
             gap: 32px;

            .tagsBox{
                width:837px;
                
            }

            .price{
                width: 100%;
            }
        }
        
        .buttons{
            
            align-self: end;
        }

        





    }




    

`;