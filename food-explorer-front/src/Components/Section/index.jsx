import { Children } from "react"
import { Container} from "./styles"

export function Section({title , children }){
    return (
        <Container>
            <label>
                {title}
            </label>
            <main>
                {Children}
            </main>
        </Container>
    )
}