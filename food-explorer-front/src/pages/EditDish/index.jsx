import { Container , Form , Content } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import {Input} from '../../Components/Input'
import {IoIosArrowBack} from 'react-icons/io'
import {Button} from '../../Components/Button'
import {FiUpload} from 'react-icons/fi'
import {TextArea} from '../../Components/TextArea'
import { useNavigate, useParams } from "react-router-dom";
import { NoteItem } from "../../Components/NoteItem";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export function EditDish(){
    const {user} = useAuth()
    const navigate = useNavigate()
    const params = useParams()

    const [dishImage , setDishImage] = useState("")
    const [dishImageFile , setDishImageFile] = useState(null)

    
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [ingredients , setIngredients] = useState([])
    const [newIngredients , setNewIngredients] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
   
    

    

    function handleChangeDishImage (event) {
        const file = event.target.files[0]
        setDishImageFile(file)

        const imagePreview = URL.createObjectURL(file)
        setDishImage(imagePreview)
    }

    async function handleUpdateDish(){
        const fileUploadForm = new FormData()

        fileUploadForm.append("image" , dishImageFile )
        fileUploadForm.append('title', title)
        fileUploadForm.append('category', category)
        fileUploadForm.append('ingredients', JSON.stringify(ingredients))        
        fileUploadForm.append('price', price)
        fileUploadForm.append('description', description)
        await api.put(`dishes/${params.id}`, fileUploadForm)
        alert('Prato atualizado com sucesso!')
        navigate("/")
    }

    function handleAddIngredient(){
        setIngredients(prevState =>[ ...prevState , newIngredients] )
        setNewIngredients("")
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleRemoveDish(){
        await api.delete(`/dishes/${params.id}`)

        alert("Prato removido com sucesso!")
        navigate("/")

    }
    

    

    

    return(
        <Container>
            <Header />
            <Content>
                <Form>
                    
                    <a href="/"><IoIosArrowBack size={22}/> voltar</a>
                    
                    <h1>Editar prato</h1>

                    <div className="firstline">
                        <div className="labelImage" >
                            <label  htmlFor="image-file" >Imagem do prato
                                <div className="changeImage">
                                    <Input type="file" id="image-file" onChange={handleChangeDishImage} />
                                        <span>
                                        <FiUpload size={24}/>
                                        {dishImage ? "Imagem selecionada" : "Selecione a imagem"}
                                    </span>
                                </div>
                            </label>
                        </div>
                        <div className="name">
                            <label className="label" htmlFor="name" >Nome</label>
                            <Input id="name" type="text"  placeholder="Ex: Salada Ceasar" onChange={e => setTitle(e.target.value)} value={title} />
                        </div> 
                        <div className="category">
                            <label className="label" htmlFor="category" >Categoria</label>
                            <select name="category" id="category" onChange={e => setCategory(e.target.value)}>
                            <option value="selecionar categoria">Selecionar categoria</option>
                                <option value="refeições">Refeições</option>
                                <option value="sobremesas">Sobremesas</option>
                                <option value="bebidas">Bebidas</option>
                            </select>
                        </div>
                    </div>

                    <div className="secondLine">
                        <div className="ingredients">
                            <label className="label" >Ingredientes</label>
                            <div className="tagsBox">
                                <div className="tags">
                                    {
                                        ingredients.map((ingredient , index) => (
                                        <NoteItem 
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={()=>{handleRemoveIngredient(ingredient)}}
                                        
                                        />

                                        ))
                                    }
                                    <NoteItem isNew placeholder="Adicionar" onChange={e => setNewIngredients(e.target.value)} value={newIngredients} onClick={handleAddIngredient}/>
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <label className="label" htmlFor="price"> Preço</label>
                        <   Input id="price" type="money" placeholder="R$ 25,00" onChange={e => setPrice(e.target.value)}/>
                        </div>
                        
                    </div>
                    
                    <label className="label" > Descrição </label>
                        <TextArea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                        />
                    <div className="buttons">
                        <div className="button1">
                            <Button 
                                title="Excluir prato"
                                onPress={handleRemoveDish}
                            />
                        </div>
                        <div className="button2">
                            <Button title="Salvar alterações" onPress={handleUpdateDish} />
                        </div>
                    </div>
                    
                    

                    
                    
                </Form>
            </Content>
            
            <Footer/>
        </Container>
    )
}