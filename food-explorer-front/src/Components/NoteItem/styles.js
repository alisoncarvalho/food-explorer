import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width:max-content;

    background-color: ${({theme , $isnew})=> $isnew ? "transparent" : theme.COLORS.LIGHT_600 };
    color: ${({theme , $isnew})=> $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100 };
    border: ${({ theme , $isnew}) => $isnew ? `2px dashed ${theme.COLORS.LIGHT_600}` : "none"};
    
    padding-right: 1.6rem;
    border-radius:1rem;

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
        height:3.2rem; 
        
        width: ${($isnew) => $isnew && '100px'};
        background: none;
        border: none;
        outline: none;

        padding: 1rem 1.6rem;

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
