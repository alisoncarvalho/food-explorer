import { useState } from 'react'
import { Container  } from './styles'
import {IoMdHeart , IoMdHeartEmpty} from 'react-icons/io'
import defalutImageDish from '../../assets/images/camarao.png'
import {AiFillFund, AiOutlineMinus ,AiOutlinePlus } from 'react-icons/ai'
import { Button } from '../Button'
import {Link} from "react-router-dom"
import {BiEditAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'



export function Cards({dish , ...rest}){
    

    return(
       

        <Container {...rest}>
                <button className='heart'><IoMdHeartEmpty/></button>
                <img src={defalutImageDish} alt="" />
            <Link to={`/dish/`}>
                <h1>{dish}</h1>
            </Link>
                <p>{}</p>
                <h3>{}</h3>
                
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
        // <Container {...rest}>
        //         <button className='heart'><IoMdHeartEmpty/></button>
        //         <img src={defalutImageDish} alt="" />
        //     <Link to="/dish/:id">
        //         <h1>Arroz carreteiro</h1>
        //     </Link>
        //         <p>Acompanhamento delicioso!!! </p>
        //         <h3>R$28,00</h3>
                
        //         <div id='include'>
        //             <div className='amount'>
        //                 <button  className='button'><AiOutlineMinus/></button>
        //                 <span>05</span>
        //                 <button  className='button'><AiOutlinePlus/></button>
        //             </div>
        //             <Button title='incluir'/>
        //         </div>
        // </Container>