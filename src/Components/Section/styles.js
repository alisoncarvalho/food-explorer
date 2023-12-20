import styled from "styled-components";

export const Container = styled.section`
    margin: 2.8rem 0;

    >label{
        
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 1.6rem;
        font-weight: 400;
    }

    main{
        width: 100%;
        height: fit-content;
        border-radius: .5rem;
        background-color: ${({theme})=>theme.COLORS.DARK_900};
        
        padding:  .8rem  .8rem .8rem;
    }
`;

