import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    

    width: 100%;
    height: 100vh;

    overflow: auto;
    overflow: overlay;

    background-color:${({theme})=>theme.COLORS.DARK_400};
`;







export const Content = styled.div`
    width: 100%;
    

    display: flex;
    flex-direction: column;

    max-width: 1368px;
    
    margin: auto;

`;

    







export const Main = styled.div`

    width: 100%;
    padding: 0 123px;

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

        background: linear-gradient(to left, transparent 0%, ${({ theme }) => theme.COLORS.BACKGROUND_900} 100% 0%, transparent 100%);

        
        
        
    }
    .cards::-webkit-scrollbar {
        display: none; 
    }



`;


export const Banner = styled.div`

text-align: center;
position: relative;


.img{
    width: 632px;
    height: 406px;

    padding: 24px 70px ;

    
    
    

        
}



.block{
    

    

    width: 1120px;
    height: 260px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 5px;
    margin: -235px  auto  63px ;
}


    
    

        
    

    

    
    

    .text{
        display: flex;
        flex-direction: column;
        
        margin-left: 598px;
        padding-top:90px ;
        
        

        text-align: center;
        
        width: 422px;
        height: 80px;
    
    
        font-family: 'Poppins' , sans-serif;

        
        
        
    


    

    

    

    

    

        h1{
        font-weight: 600;
        font-size: 38px;
        
        }
        p{
            font-weight: 400;
            font-size: 14px;
        }
            
            
            
    }
    

    
`;