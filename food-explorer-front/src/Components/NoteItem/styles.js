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
    
    >input{
        height:32px;
        width:100%;
        padding: 0 12px;
        


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
