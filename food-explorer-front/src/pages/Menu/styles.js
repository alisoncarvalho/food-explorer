import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    height: 100vh;
    background-color:${({theme})=>theme.COLORS.DARK_400};

    display: grid;
    grid-template-rows: 114px auto 77px;
    grid-area: 
    "header"
    "main"
    "footer";
    
`;

export const Content = styled.div`
    height: 100vh;
    .isAdmin{
        display: grid;
    grid-template-rows: 144px auto 77px;
    grid-area: 
    "header"
    "main"
    "footer";
    }
    
`;



export const Main = styled.div`
    grid-area: "main";
    width: 100%;
    
    padding: 0 28px;
    display: flex;
    flex-direction: column;
    
    align-items: flex-start;

    min-height:612px;
    

    
    a:nth-child(2){
        margin-top: 36px;
    }

    a{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.LIGHT_300};
        
        padding: 10px;


        
    }
    #line{
        height: 1px;
        width: 372px;
        background-color:${({theme})=>theme.COLORS.DARK_900};
        
    }

    
    

    
`;

