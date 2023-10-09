import { useState } from 'react'
import { Container  , Content} from './styles'
import {IoMdHeart , IoMdHeartEmpty} from 'react-icons/io'
import dish from '../../assets/Dish.png'
import {AiFillFund, AiOutlineMinus ,AiOutlinePlus } from 'react-icons/ai'
import { Button } from '../Button'
import {BiEditAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'



export function Cards({isAdmin = false , title ,paragrafe , price,image, isFavorite, routeProduct = '',id,  ...rest}){
    // const [quantity , setQuantity] = useState(1)

    // const navigate = useNavigate()

    // const handleGoToDescriptionProduct = () => {
    //     navigate(routeProduct)
    // }
    
    // function increase(){
    //     if(quantity > 9){
    //         alert("A quantidade máxima de pedidos é 10 unidades")
    //         return;
    //     };
    //     setQuantity(prevState => prevState+1)
    // }
    // function decrease(){
    //     if(quantity<2){
    //         alert("A quantidade mínima de pedidos é 1 unidade")
    //         return;
    //     }
    //     setQuantity(prevState => prevState - 1)
    // }
    // function handleFavorite(id){
    //     const algo ={
    //         id, 
    //         isFavorite: !isFavorite,
    //     }
    // }

    return(
        <Container >
            <Content>
                <div className={isAdmin ? "admin" : "notAdmin"}>
                    {isAdmin ? (
                        <button id='edit'><BiEditAlt size={32}/></button>
                    ) : (
                        <button id='heart' >
                            {isFavorite? <IoMdHeart size={24}/>  : <IoMdHeartEmpty size={24}/>}
                        </button>
                    )}
                    <button className='detail'>

                    <img src={dish} alt="" />
                    <h1>{title}</h1>
                    <p>{paragrafe} </p>
                    <h3>{price}</h3>
                    </button>
                    {!isAdmin && (
                        <div id='include'>
                            <div className='amount'>
                                <button  className='button'><AiOutlineMinus/></button>
                                <span>5</span>
                                <button  className='button'><AiOutlinePlus/></button>
                            </div>
                            <Button title='incluir'/>
                        </div>
                    )}
                </div>
            </Content>
        </Container>
    )
}
