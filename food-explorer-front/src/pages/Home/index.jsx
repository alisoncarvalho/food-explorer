import {Container , Main , Content , Banner} from './styles';
import {Header} from '../../Components/Header'
import {Footer} from '../../Components/Footer'
import image from '../../assets/frutas.png'
import {Cards} from '../../Components/Cards'
import {MdKeyboardArrowLeft , MdKeyboardArrowRight} from 'react-icons/md'

import { useEffect, useState } from 'react';
import { api } from '../../services/api';








export function Home(){
    const [search, setSearch] = useState("")
    const [ dishes , setDishes] = useState([]) 

    


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

    


    useEffect (()=>{
        async function fetchDishes(){
            const response = await api.get(`/dishes/?title=${search}`)
            setDishes(response.data)

            
        }
        fetchDishes()

        console.log(dishes)
    },[search])
        
    return(
        <Container>
                <Header search={setSearch} />
                <Content>
                    <Banner>
                        
                        <div className="img">
                            <img src={image} alt="" />
                        </div>
                        <div className="block">
                            <div className="text">
                                <h1>Sabores inigualáveis</h1>
                                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                            </div>
                        </div>
                                
                                

                                
                    </Banner>
                        

                    <Main>
                        <div className="category">
                            <div className="sides">
                                <button ><MdKeyboardArrowLeft/></button> 
                                <button ><MdKeyboardArrowRight/></button>
                            </div>
                                           
                            <h2 className='text'>Refeições</h2>
                            <div className="cards" /*ref={carousel}*/ >
                                {
                                    dishes.map( dish => (

                                        <Cards 
                                        key={dish.id}
                                        dish={dish}
                                        />
                                    ))
                                }
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
                    
                    
                </Content>
                <Footer/>
        </Container>
    )
}