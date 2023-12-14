import {Container , Main , Content , Banner , Slogan , Background} from './styles';
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import bannerImage from '../../assets/frutas.png'
import {Cards} from '../../components/Cards'
import { MdDoNotDisturbAlt} from 'react-icons/md'
import { Carousel } from '../../Components/Carousel';
import { useEffect, useState , useRef } from 'react';
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
                        <img src={bannerImage} alt="" />
                        <Slogan>
                            <div className="text">
                                <h1>Sabores inigualáveis</h1>
                                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                            </div>
                        </Slogan>
                        <Background/>
                    </Banner>
                    <Main>
                        <div className="category">
                            <h3>Refeições</h3>
                            {
                                meals.length > 0 ? <Carousel content={meals}></Carousel> 
                                :
                                <h4><MdDoNotDisturbAlt/> Nada por aqui </h4>
                            }
                        </div>
                        <div className="category">
                            <h3>Sobremesas</h3>
                            {
                                desserts.length > 0 ? <Carousel content={desserts}></Carousel> 
                                :
                                <h4><MdDoNotDisturbAlt/> Nada por aqui </h4>
                            }
                        </div>
                        <div className="category">
                            <h3>Bebidas</h3>
                            {
                                beverages.length > 0 ? <Carousel content={beverages}></Carousel>
                                :
                                <h4><MdDoNotDisturbAlt/> Nada por aqui </h4> 
                            }
                        </div>
                    </Main>
                </Content>
                <Footer/>
        </Container>
    )
}