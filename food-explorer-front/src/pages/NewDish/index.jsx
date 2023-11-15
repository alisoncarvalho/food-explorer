import { Container , Form , Content } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import {Input} from '../../Components/Input'
import {IoIosArrowBack} from 'react-icons/io'
import {Button} from '../../Components/Button'
import {FiUpload} from 'react-icons/fi'
import {TextArea} from '../../Components/TextArea'
import { Section } from "../../Components/Section";
import { NoteItem } from "../../Components/NoteItem";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {Link} from "react-router-dom"

export function NewDish(){

    const {user} = useAuth()

    const [dishImage , setDishImage] = useState("")
    const [dishImageFile , setDishImageFile] = useState("")

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [ingredients , setIngredients] = useState([])
    const [newIngredients , setNewIngredients] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const navigate = useNavigate() 
    
    function handleChangeDishImage (event) {
        const file = event.target.files[0]
        setDishImageFile(file)
        
        const imagePreview = URL.createObjectURL(file)
        setDishImage(imagePreview) 
        
        
        
        
    }

    function handleAddIngredient(){
        setIngredients(prevState =>[ ...prevState , newIngredients] )
        setNewIngredients("")
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleNewDish(){

        
        
        
        if(!title){
            return alert("É obrigatório informar o nome do prato.")
        }

        if(!category){
            return alert("É obrigatório informar a categoria do prato.")
        }

        if(!ingredients){
            return alert("É obrigatório informar os ingredientes do prato.")
        }

        if(!price){
            return alert("É obrigatório informar o preço do prato.")
        }

        if(!description){
            return alert("É obrigatório informar uma descrição do prato.")
        }

        if(newIngredients) {
            return alert("Ingrediente não adicionado")
        }

        const fileUploadForm = new FormData()

        fileUploadForm.append("image" , dishImageFile)
        fileUploadForm.append('title', title)
        fileUploadForm.append('category', category)
        fileUploadForm.append('ingredients', JSON.stringify(ingredients))
        fileUploadForm.append('price', price)
        fileUploadForm.append('description', description)

        

        await api.post("/dishes" , fileUploadForm)
            
        
        alert("Prato criado com sucesso")
        navigate("/")
        
        
    }

    return(
        <Container>
            <Header />
            <Content>
                <Form>
                    <Link to="/">
                        <a href="#"><IoIosArrowBack size={22}/> voltar</a>
                    </Link>
                    <h1>Novo prato</h1>
                    
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
                            <Input 
                                id="name" 
                                type="text"  
                                placeholder="Ex: Salada Ceasar" 
                                onChange={e => setTitle(e.target.value)} 
                                value={title}
                            />
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
                                    <NoteItem 
                                        isNew placeholder="Adicionar" 
                                        onChange={e => setNewIngredients(e.target.value)} 
                                        value={newIngredients} 
                                        onClick={handleAddIngredient}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <label className="label" htmlFor="price"> Preço</label>
                        <   Input 
                        id="price" 
                        type="money" 
                        placeholder="R$ 25,00"
                        onChange={e => setPrice(e.target.value)}
                        />
                        </div>
                        
                    </div>
                    
                    <label className="label" > Descrição </label>
                        <TextArea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)} 
                            
                        />
                    <div className="button">
                        <Button className="button" title="Criar prato" onPress={handleNewDish}/>
                    </div>    
                    

                    
                    
                </Form>
            </Content>
            
            <Footer/>
        </Container>
    )
}
