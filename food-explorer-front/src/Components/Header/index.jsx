import {Container, Content , Search, Exit,RedButton} from './styles'
import {AiOutlineMenu} from 'react-icons/ai'
import {TbReceipt} from 'react-icons/tb'
import {Logo} from '../Logo'
import {Input}  from '../Input'
import {AiOutlineSearch} from 'react-icons/ai'
import {Button} from '../Button'
import {RxExit} from 'react-icons/rx'
import { USER_ROLES } from '../../utils/roles'
import {useAuth} from "../../hooks/auth"
import { useNavigate } from 'react-router-dom'


export function Header({search , dishAmount}){
    const navigate = useNavigate()
    
    function handleNavigateToNewDish(){
        navigate("/newdish")
    }

    

    const {user , signOut} = useAuth()
    const isAdmin = user.role == USER_ROLES.ADMIN
    return(
        <Container>
            <Content>
                <Logo />
                <Search>
                    <label htmlFor="search">
                    <Input 
                        id="search" 
                        icon={AiOutlineSearch} 
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={e => {search(e.target.value)}}
                    />
                    </label>
                </Search>

                   <RedButton>
                    
                        {
                            isAdmin ?                         
                            <Button className="buttonRed" onPress={handleNavigateToNewDish} title="Novo prato"/>
                            :
                            <Button className="buttonRed"  title={`Pedidos`} />

                        }
                        
                    </RedButton>
                


                
                <Exit>
                <a href="/" onClick={signOut}>
                    <RxExit/>
                </a>
                </Exit>
                
                    
            </Content>
        </Container>
    )
}