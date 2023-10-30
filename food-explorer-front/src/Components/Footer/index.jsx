import { Container, Content } from "./styles";



export function Footer(){
    return(
        <Container>
            <Content>
            <div className="logo">
                <div className="svg">
                    <svg width="29" height="29" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#4D585E"/>
                    </svg>
                </div>
                <div className="h1">
                        <h1>food explorer</h1>
                </div>
            </div>
            <p>© 2023 - Todos os direitos reservados.</p>
            </Content>

            
        </Container>
    )
}