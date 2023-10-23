import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    
    

    background-color: ${({theme , isNew})=> isNew ? "transparent" : theme.COLORS.LIGHT_600 };
    color: ${({theme , isNew})=> isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100 };
    border: ${({ theme , isNew}) => isNew ? `2px dashed ${theme.COLORS.LIGHT_600}` : "none"};
    
    padding-right: 16px;
    border-radius:10px;
    

    >button{
        border:none;
        background:none;

    }

    .button-delete{
        color: ${({theme})=>theme.COLORS.LIGHT_100};
    }

    .button-add{
        color: ${({theme})=>theme.COLORS.LIGHT_600};
    }
    
    .tag{
        height:32px; 
        
        
        padding: 10px 16px;
        
        text-align:center;
        
        


        color:${({theme})=> theme.COLORS.LIGHT_100 };
        background: transparent;

        border:none;

        &::placeholder{
            
            color: ${({theme})=>theme.COLORS.LIGHT_500 };
        }

        &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
        
    }

    




`;
