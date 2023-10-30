import {Container, Content , Search, Exit,RedButton} from './styles'
import {AiOutlineMenu} from 'react-icons/ai'
import {TbReceipt} from 'react-icons/tb'
import {Logo} from '../Logo'
import {Input}  from '../Input'
import {AiOutlineSearch} from 'react-icons/ai'
import {Button} from '../Button'
import {RxExit} from 'react-icons/rx'

export function Header({isAdmin}){
    return(
        <Container>
            <Content>
                <Logo />
                <Search>
                    <label htmlFor="search">
                    <Input id="search" icon={AiOutlineSearch} placeholder="Busque por pratos ou ingredientes"/>
                    </label>
                </Search>
                <RedButton>
                    <Button className="buttonRed" icon={!isAdmin && TbReceipt} title={isAdmin ? "Novo prato" : "Pedidos (0)" } />

                </RedButton>
                
                <Exit>
                <a href="/">
                    <RxExit/>
                </a>
                </Exit>
                
                    
            </Content>
        </Container>
    )
}