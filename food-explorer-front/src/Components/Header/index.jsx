import {Container, Content , Search, Exit,RedButton} from './styles'
import {AiOutlineMenu} from 'react-icons/ai'
import {TbReceipt} from 'react-icons/tb'
import {Logo} from '../Logo'
import {Input}  from '../Input'
import {AiOutlineSearch} from 'react-icons/ai'
import {Button} from '../Button'
import {RxExit} from 'react-icons/rx'

import {useAuth} from "../../hooks/auth"

export function Header({search}){

    const {signOut} = useAuth()
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
                    {/* <Button className="buttonRed" icon={!isAdmin && TbReceipt} title={isAdmin ? "Novo prato" : "Pedidos (0)" } /> */}
                    <Button className="buttonRed" icon={TbReceipt} title="Pedidos (0)"  />


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