import { Container } from "./styles";

export function Input({icon:Icon ,label, title, ...rest}){
    return(
        <Container>
            {Icon && <Icon  size={20} />}
            <input {...rest}/>
        </Container>
    )
}

