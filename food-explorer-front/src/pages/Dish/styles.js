import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    position: relative;
    


    
`;




export const Main = styled.div`
    width: 100%;
    padding: 24px 123px;

    margin-bottom: 100px;

    max-width: 1368px;
    
    margin: auto;

    
    a{
        display: flex;
        align-items: center;
        font-size: 24px;

        font-weight: 700;
        color: ${({theme})=>theme.COLORS.LIGHT_300};
    }
    
    .tags{
        display: flex;
        align-items: center;
        gap: 5px;
    }


    .dishSelected{
        display: flex;
        align-items: center;
        gap: 50px;

        >img{
            width:390px;
        }

        h1{
            font-family: Poppins;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
        }

        .dados{
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
    }

    .addOrder , .amount{
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    .addOrder{
        gap: 33px;

        .redButton{
            width: 40%;
        }
    }

    .amount{
        gap: 14px;

        span{
            font-size: 20px;
            
            font-weight: 700;
        }

        button{
            background: none;
            border: none;
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            gap: 20px;

            font-size: 24px;
        }
        

    }


`;



export const FooterStyles = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;





