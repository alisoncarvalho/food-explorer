import { useState } from 'react'
import { Container  } from './styles'
import {IoMdHeart , IoMdHeartEmpty} from 'react-icons/io'
import defalutImageDish from '../../assets/images/camarao.png'
import {AiFillFund, AiOutlineMinus ,AiOutlinePlus } from 'react-icons/ai'
import { FiEdit2 } from "react-icons/fi";
import { Button } from '../Button'
import {Link} from "react-router-dom"

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { api } from '../../services/api'
import {useAuth} from '../../hooks/auth'
import { USER_ROLES } from '../../utils/roles'


export function Cards({ data , isFavorite = false } ){

    const [dishAmount, setDishAmount] = useState(1)

    function decrease() {
        if (dishAmount > 1) {
        setDishAmount((prevState) => prevState - 1)
        }
    }

    function increase() {
        setDishAmount((prevState) => prevState + 1)
    }
    

    console.log(dishAmount)

    const {user} = useAuth()
    const isAdmin = user.role == USER_ROLES.ADMIN

    const dishImage = data.image ? `${api.defaults.baseURL}/files/${data.image}`: `${defalutImageDish}`
    
    const navigate = useNavigate()

    function handleEdit(){
        navigate("/editdish")
    }
    
    
    return(
       
        <Container >
            {isAdmin ? 
                (
                    <div className="adminCard">
                    <button className='edit' onClick={handleEdit}><FiEdit2 /></button>
                    <img src={dishImage} alt="" />

                    <h1>{data.title}</h1>
                    <Link to={`/dish/${data.id}`}>
                    <p>{data.description}</p>
                    <h3>{data.price}</h3>
                    </Link>
                    </div>
                ):

            (<div className="customerCard">
                <button className='heart'  >
                    { isFavorite ? <IoMdHeart/> : <IoMdHeartEmpty/>}
                    
                    
                    
                    
                </button>
                <img src={dishImage} alt="" />

                <h1>{data.title}</h1>
                <Link to={`/dish/${data.id}`}>
                <p>{data.description}</p>
                <h3>{data.price}</h3>
                </Link>
            
                
                <div id='include'>
                    <div className='amount'>
                        <button  className='button' onClick={decrease}><AiOutlineMinus/></button>
                        <span>{dishAmount}</span>
                        <button  className='button' onClick={increase}><AiOutlinePlus/></button>
                    </div>
                    <Button title='incluir'/>
                </div>
            </div>)
            }
                
        </Container>

        

           
            
                

    )
}
        