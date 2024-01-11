import { Footer } from "../../Components/Footer";
import { Container  , Main ,Content } from "./styles";
import {GrFormClose} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'
import { Input } from "../../Components/Input";
import { HeaderMenu } from "../../Components/HeaderMenu";
import {useAuth} from "../../hooks/auth"
import { USER_ROLES } from "../../utils/roles";
import { useNavigate } from "react-router-dom";



export function Menu(){
    const {user , signOut} = useAuth()
    const isAdmin = user.role == USER_ROLES.ADMIN
    const navigate = useNavigate()

    return(
        <Container>
            <HeaderMenu/>
            {
                isAdmin ?
                <Content>
                        <Main>
                            <Input icon={BsSearch } placeholder="Busque por pratos ou ingredientes"/>
                            <div className="itens">
                                <a href="/newdish">Novo prato</a>
                                <div id="line"></div>
                                <a onClick={signOut} href="/">Sair</a>
                                <div id="line"></div>
                            </div>
                            
                        </Main>
                </Content>
                :
                <Content>
                    <Main>
                        <Input icon={BsSearch } placeholder="Busque por pratos ou ingredientes"/>
                        <a onClick={signOut} href="/">Sair</a>
                        <div id="line"></div>
                    </Main>
                </Content>
            }
            <div className="footer">
                <Footer/>
            </div>       
        </Container>
    )
}