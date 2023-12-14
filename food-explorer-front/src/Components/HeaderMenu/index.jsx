import { Container } from "./styles"


export function HeaderMenu(){
    return(
        <Container>
                <a href="/">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.263604 0.263604C0.615076 -0.0878679 1.18492 -0.0878679 1.5364 0.263604L9 7.72721L16.4636 0.263604C16.8151 -0.0878679 17.3849 -0.0878679 17.7364 0.263604C18.0879 0.615076 18.0879 1.18492 17.7364 1.5364L10.2728 9L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L9 10.2728L1.5364 17.7364C1.18492 18.0879 0.615076 18.0879 0.263604 17.7364C-0.0878679 17.3849 -0.0878679 16.8151 0.263604 16.4636L7.72721 9L0.263604 1.5364C-0.0878679 1.18492 -0.0878679 0.615076 0.263604 0.263604Z" fill="white"/>
                    </svg>
                </a>
                <p>Menu</p>
        </Container>
    )
}
