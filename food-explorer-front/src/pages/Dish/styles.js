import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Main = styled.div`
    @media (min-width:${DEVICE_BREAKPOINTS.XS}){
        width: 100%;
        padding: 31px 56px;

        a{
            display: flex;
            align-items: center;
            font-size: 20px;
            font-weight: 400;
            color: ${({theme})=>theme.COLORS.LIGHT_300};
        }
        
        .tags{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 5px;
        }

        .dishSelected{
            display: flex;
            flex-direction: column;
            align-items: center;

            >img{
                width:208px;
            }

            h1{ 
                font-family: Poppins;
                font-size: 22px;
                font-style: normal;
                font-weight: 500;
                flex-wrap: nowrap;
                text-align: center;
            }

            p{
                font-family: Poppins;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;  
                text-align: center;
            }

            .dados{
                display: flex;
                flex-direction: column;
                gap: 18px;
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
                width: 100%;
                
                flex-wrap: nowrap;
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
    }

    @media (min-width:${DEVICE_BREAKPOINTS.LG}){
        width: 100%;
        padding: 24px 123px;
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
            flex-direction: row;
            align-items: center;
            gap: 50px;
            padding-bottom: 120px;

            >img{
                width:390px;
            }

            h1{
                font-family: Poppins;
                font-size: 40px;
                font-style: normal;
                font-weight: 500;
                text-align: left;
            }

            p{
                text-align: left;
            }

            .dados{
                display: flex;
                flex-direction: column;
                gap: 24px;
            }

            .redButton{
                width: 131px;
                flex-wrap: nowrap;
            }
        }

        .addOrder , .amount{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .addOrder{
            gap: 33px;
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
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XL}){
        width: 100%;
        height:100%;
        padding: 24px 123px;

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
            flex-direction: row;
            align-items: center;
            gap: 50px;
            padding-bottom: 120px;

            >img{
                width:390px;
            }

            h1{
                font-family: Poppins;
                font-size: 40px;
                font-style: normal;
                font-weight: 500;
                text-align: left;
            }

            p{
                text-align: left;
            }

            .dados{
                display: flex;
                flex-direction: column;
                gap: 24px;
            }

            .redButton{
                width: 131px;
                flex-wrap: nowrap;
            }
        }

        .addOrder , .amount{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .addOrder{
            gap: 33px;
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
    }
`;









