import { Container , Content } from "./styles";

export function Logo({isAdmin = false}){
    return(
        <Container>
            <Content>
                <div>
                    <div className="logo">
                        <div className="svg">
                            <svg width="30" height="30" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/>
                            </svg>
                        </div>
                        <div className="h1">
                                <h1>food explorer</h1>
                        </div>
                    </div>
                    {isAdmin && (
                        <div className="h2">
                            <h2>admin</h2>
                        </div>
                    )
                    }
                    
                    
                </div>
                
                
                
                
            </Content>
                
            
            
            
        </Container>
        

        
    )
}