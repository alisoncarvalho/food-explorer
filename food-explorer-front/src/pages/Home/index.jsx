import {Container , Main , Content , Banner} from './styles';
import {Header} from '../../Components/Header'
import {Footer} from '../../Components/Footer'
import bannerImage from '../../assets/frutas.png'
import {Cards} from '../../Components/Cards'
import {MdKeyboardArrowLeft , MdKeyboardArrowRight} from 'react-icons/md'
import defalutImageDish from '../../assets/images/camarao.png'

import { useEffect, useState } from 'react';
import { api } from '../../services/api';








export function Home(){
    
    
    const [search, setSearch] = useState("")
    const [ dishes , setDishes] = useState([]) 
    const [meals, setMeals] = useState([])
    const [beverages, setBeverages] = useState([])
    const [desserts, setDesserts] = useState([])
    
    
    
    
    

    useEffect (()=>{
        async function fetchDishes(){
            const response = await api.get(`/dishes?title=${search}`)
            setDishes(response.data)

            const mealsArray = response.data.filter(
                (dish) => dish.category === 'refeições',
            )
            
            const beveragesArray = response.data.filter(
                (dish) => dish.category === 'bebidas',
            )
            
            const dessertsArray = response.data.filter(
                (dish) => dish.category === 'sobremesas',
            )
                
            setMeals(
                mealsArray.map((meal) => (
                    
                    <Cards 
                    key={meal.id} 
                    data={meal}  
                    />
                
                )),
              )
      
              setBeverages(
                beveragesArray.map((beverage) => (
                  <Cards 
                    key={beverage.id}
                    data={beverage}
                  
                    
                  />
                )),
              )
      
              setDesserts(
                dessertsArray.map((dessert) => (
                    <Cards 
                    key={dessert.id} 
                    data={dessert}  
                    />
                )))
  
        }
        fetchDishes()

        


    },[search])

        
    return(
        <Container>
                <Header search={setSearch} />
                <Content>
                    <Banner>
                        
                        <div className="img">
                            <img src={bannerImage} alt="" />
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
                                    meals
                                    
                                    
                                    
                                }
                            </div>
                            
                                    
                            
                        </div>

                        <div className="category">
                            <div className="sides">
                                <button ><MdKeyboardArrowLeft/></button> 
                                <button ><MdKeyboardArrowRight/></button>
                            </div>
                            <h2 className='text'>Sobremesas</h2>                
                            <div className="cards" >
                            {desserts}
                            </div>
                        </div>


                        <div className="category">
                        <div className="sides">
                                <button><MdKeyboardArrowLeft/></button> 
                                <button><MdKeyboardArrowRight/></button>
                            </div>
                            <h2 className='text'>Bebidas</h2>                
                            <div className="cards" >
                                {beverages}
                            </div>
                        </div>


                    </Main>
                    
                    
                </Content>
                <Footer/>
        </Container>
    )
}

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