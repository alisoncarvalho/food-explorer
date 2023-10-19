import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color:${({theme})=>theme.COLORS.DARK_400};

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

padding: 0 123px;

.img{
    margin-left: -67px;
}
    
.block{
    
    margin: -278px  auto  63px ;
 
    font-family: 'Poppins' , sans-serif;

    width: 1120px;
    height: 260px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 5px;
    
    h1{
    font-weight: 600;
    font-size: 38px;
    
    }
    p{
        font-weight: 400;
        font-size: 14px;
    }

}

#text{
    position: absolute;
    left: 700px;
    top: 310px;
    width: 422px;
    display: flex;
    flex-direction: column;
    
    
    
}

.category{
    
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom:47px;

    
    

    .text{
        padding: 0 24px;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 24px;
        align-self: start;
    }

    .sides{
        width: 1122px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 30px;
        position: absolute;
        top: 285px;
        z-index: 1;

        button{
            background:none;
            border: none;
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            font-size: 40px;
                      
        }
    }
    

}


.cards{
    z-index: 0;
    
    padding: 0 24px;
    max-width: 1122px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow-x: auto;
    
    
    
}
.cards::-webkit-scrollbar {
     display: none; 
}



`;