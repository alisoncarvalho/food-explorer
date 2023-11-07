import { useState } from 'react'
import { Container  } from './styles'
import {IoMdHeart , IoMdHeartEmpty} from 'react-icons/io'
import defalutImageDish from '../../assets/images/camarao.png'
import {AiFillFund, AiOutlineMinus ,AiOutlinePlus } from 'react-icons/ai'
import { Button } from '../Button'
import {Link} from "react-router-dom"
import {BiEditAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { api } from '../../services/api'


export function Cards({ data ,title, description ,category, price , image, link ,showImage }){

    
    
    return(
       
        <Container >
                <button className='heart'><IoMdHeartEmpty/></button>
                <img src={image} alt="" />
            <Link to={link}>
                <h1>{title}</h1>
            </Link>
                <p>{description}</p>
                <h3>{data.id}</h3>
                
                <div id='include'>
                    <div className='amount'>
                        <button  className='button'><AiOutlineMinus/></button>
                        <span>05</span>
                        <button  className='button'><AiOutlinePlus/></button>
                    </div>
                    <Button title='incluir'/>
                </div>
        </Container>

    )
}
        