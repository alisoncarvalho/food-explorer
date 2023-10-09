import {Container , Main , Content } from './styles'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'
import {Button} from '../../Components/Button'
import {Tag} from '../../Components/Tag'
import {TbReceipt} from 'react-icons/tb'

import pratoDePedreiro from '../../assets/images/Mask group-1.png'
import { useEffect, useState } from 'react'







export function Dish(){
    


    return(
        <Container>
            <Content>

                <Header isAdmin/>
                <Main>
                    <a><IoIosArrowBack/> voltar </a>
                    {loading ? (
                        <div>
                            <p>carregando...</p>
                        </div>
                    ) : (
                        <div className="dishSelected">
                            <img src={pratoDePedreiro}/>
                            <div className="dados">
                                <h1>Salada Ravanello</h1>
                                <p>Rabanetes, folhas verdes e molho agridoce salpicados <br/> com gergelim. O pão naan dá um toque especial.</p>
                            
                                <div className="tags">
                                    <Tag title="alface"/>
                                    <Tag title="cebola"/>
                                    <Tag title="pepino"/>
                                    <Tag title="rabanete"/>
                                    <Tag title="tomate"/>
                                    <Tag title="pão naan"/>
                                </div>
    
                                {dataUser.admin ? (
                                    <div className="editOrder">
                                        <Button title="Editar prato"/>
                                    </div>
                                ) : (
                                    <div className="addOrder">
                                        <div className='amount'>
                                            <button className='background'><AiOutlineMinus/></button>
                                            <span>01</span>
                                            <button className='background'><AiOutlinePlus/></button>
                                        </div>
                                        <Button icon={TbReceipt} title="pedir - R$25,00"/>
                                    </div>
                                )}                        
                            </div>
                        </div>
                    )}
                    
                    

                </Main>
                <Footer/>


            </Content>
        </Container>
    )
}

