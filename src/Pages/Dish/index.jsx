import {Container , Main} from './styles'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'
import {Button} from '../../Components/Button'
import {Tag} from '../../Components/Tag'
import {Link} from "react-router-dom"
import { useParams , useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import defaultImage from '../../assets/images/Mask group-1.png'
import { useAuth } from '../../hooks/auth'
import { USER_ROLES } from '../../utils/roles'


export function Dish(){  
    const {user} = useAuth()
    const isAdmin = user.role == USER_ROLES.ADMIN

    const [dish , setDish] = useState(null)
    const [dishAmount, setDishAmount] = useState(1)

    const params = useParams()
    const navigate = useNavigate()

    function decrease() {
        if (dishAmount > 1) {
        setDishAmount((prevState) => prevState - 1)
        }
    }

    function increase() {
        setDishAmount((prevState) => prevState + 1)
    }

    function priceToInclude(){
        String(dishAmount) * String(dish.price)
    }

    function handleNavigate(){
        navigate(`/editdish/${dish.id}`)
    }

    useEffect (()=>{
        async function fetchDishes(){
            const response = await api.get(`/dishes/${params.id}`)
            setDish(response.data)
            
        }
        fetchDishes()
    },[])
    
    return(
        <Container>
            <Header/>
            {
                dish && 
                <Main>
                <Link to="/"><IoIosArrowBack/> voltar </Link>
                
                    { isAdmin ? 
                        (
                            <div className="dishSelected">
                                <img src={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : `${defaultImage}` }/>
                                <div className="dados">
                                    <h1>{dish.title}</h1>
                                    <p>{dish.description}</p>
                                    <div className="tags">
                                        {
                                            dish.ingredients.map(tag => (
                                                <Tag
                                                    key={tag.id}
                                                    title={tag.name}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className='redButton'>
                                        <Button onPress={handleNavigate} title="Editar prato"/>
                                    </div>              
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="dishSelected">
                            <img src={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : `${defaultImage}` }/>
                                <div className="dados">
                                    <h1>{dish.title}</h1>
                                    <p>{dish.description}</p>
                                    <div className="tags">
                                        {
                                            dish.ingredients.length > 0 &&
                                            dish.ingredients.map(tag => {
                                                <Tag
                                                    key={tag.id}
                                                    tit={tag.name}
                                                />
                                            })
                                        }
                                    </div>
                                    <div className="addOrder">
                                        <div className='amount'>
                                            <button className='background' onClick={decrease}><AiOutlineMinus/></button>
                                            <span>{dishAmount}</span>
                                            <button className='background' onClick={increase}><AiOutlinePlus/></button>
                                        </div>
                                        <div className='redButton'>
                                            <Button  
                                                title={(Number(dish.price) * Number(dishAmount))
                                                    .toFixed(2)
                                                    .toString()
                                                    .replace('.', ',')}
                                            />
                                        </div>
                                    </div>                 
                                </div>
                            </div>
                        )
                    }
                </Main>
            }
            <Footer/>
        </Container>
    )
}