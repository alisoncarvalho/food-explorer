import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;


    
`;

export const Content = styled.div`
    width: 100%;
    position: relative;
    height: 100vh;
    grid-template-rows: 114px auto 77px;
    grid-area: 
    "header"
    "main"
    "footer";



    

`;

export const Main = styled.div`
    grid-area:"main";
    margin-top: 1.5rem;
    padding:  0 7.5rem;

    .dishSelected{
        display: flex;

        >img{
            width:24.4rem;
    }

  }
`;




