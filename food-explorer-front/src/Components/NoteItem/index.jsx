import { Container } from "./styles";
import { FiPlus , FiX } from "react-icons/fi";

export function NoteItem({isNew = false , value , onClick , onPress, ...rest}){
    return(
        <Container $isnew={isNew}>
            <input className="tag" type="text" value={value} readOnly={!isNew} {...rest} />
            <button type="button" onClick={onClick} className={isNew ? "button-add" : "button-delete"}>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>

        </Container>
    )
}