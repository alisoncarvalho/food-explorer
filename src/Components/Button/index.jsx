import { Container } from "./styles";

export function Button({icon:Icon ,title, loading=false , onPress , ...rest }){
    return(
        <Container type="button" disabled={loading} onClick={onPress}>
            {Icon && <Icon  size={20} />}
            {loading ? 'Carregando...' : title}
        </Container>
    )
}