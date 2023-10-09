import { useRef } from 'react'
import {Container , Main , Content} from './styles'
import {Header} from '../../Components/Header'
import {Footer} from '../../Components/Footer'
import image from '../../assets/home-image.png'
import {Cards} from '../../Components/Cards'

import {MdKeyboardArrowLeft , MdKeyboardArrowRight} from 'react-icons/md'

//import images
import torradas from "../../assets/images/Mask group-1.png"
import spaguetti from "../../assets/images/Mask group-2.png"
import ravanello from "../../assets/images/Mask group.png"




export function Home({isAdmin = false}){
    // const carousel = useRef(null);

    // function handleRightCLick(e){
    //     e.preventDefault();
    //     console.log( carousel.current.offsetWidth)
    //     carousel.current.scrollLeft += carousel.current.offsetWidth
    // }

    // function handleLeftCLick(e){
    //     e.preventDefault();
    //     console.log( carousel.current.offsetWidth)
    //     carousel.current.scrollLeft -= carousel.current.offsetWidth
    // }


    
        
    return(
        <Container>
                <Content>
                    <div className="homeNotAdmin">
                    <Header />
                    <Main>
                        <div className="img">
                            <img src={image} alt="" />
                        </div>
                        
                        <div className="block">

                            <div id='text'>
                                <h1>Sabores inigualáveis</h1>
                                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                            </div>
                        </div>

                        <div className="category">
                            <div className="sides">
                                <button ><MdKeyboardArrowLeft/></button> 
                                <button ><MdKeyboardArrowRight/></button>
                            </div>
                                           
                            <h2 className='text'>Refeições</h2>
                            <div className="cards" /*ref={carousel}*/ >
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                            </div>
                            
                        </div>

                        <div className="category">
                            <div className="sides">
                                <button ><MdKeyboardArrowLeft/></button> 
                                <button ><MdKeyboardArrowRight/></button>
                            </div>
                            <h2 className='text'>Pratos principais</h2>                
                            <div className="cards" >
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                            </div>
                        </div>


                        <div className="category">
                        <div className="sides">
                                <button><MdKeyboardArrowLeft/></button> 
                                <button><MdKeyboardArrowRight/></button>
                            </div>
                            <h2 className='text'>Sucos</h2>                
                            <div className="cards" >
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <Cards/>
                            </div>
                        </div>


                    </Main>
                    <Footer/>
                    </div>
                    
                </Content>
        </Container>
    )
}