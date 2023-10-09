import styled from "styled-components";

export const Container = styled.section`
margin: 28px 0;



>label{
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 16px;
    font-weight: 400;
}

main{
    width: 100%;
    height: fit-content;
    border-radius: 5px;
    background-color: ${({theme})=>theme.COLORS.DARK_900};
    
    padding:  8px  8px 8px;
}
`;

