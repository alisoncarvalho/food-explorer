import { Container , Form , Content } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import {Input} from '../../Components/Input'
import {IoIosArrowBack} from 'react-icons/io'
import {Button} from '../../Components/Button'
import {FiUpload} from 'react-icons/fi'
import {TextArea} from '../../Components/TextArea'

import { NoteItem } from "../../Components/NoteItem";

export function EditDish(isAdmin){

    return(
        <Container>
            <Header isAdmin/>
            <Content>
                <Form>
                    <a href="#"><IoIosArrowBack size={22}/> voltar</a>
                    <h1>Editar prato</h1>

                    <div className="firstline">
                        <div className="labelImage" >
                            <label  htmlFor="image-file" >Imagem do prato
                                <div className="changeImage">
                                    <Input type="file" id="image-file"/>
                                        <span>
                                        <FiUpload size={24}/>
                                        Selecione a imagem
                                    </span>
                                </div>
                            </label>
                        </div>
                        <div className="name">
                            <label className="label" htmlFor="name" >Nome</label>
                            <Input id="name" type="text"  placeholder="Ex: Salada Ceasar" />
                        </div> 
                        <div className="category">
                            <label className="label" htmlFor="category" >Categoria</label>
                            <select name="category" id="category">
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
                                    <NoteItem value="Pão Naan"/>
                                    <NoteItem isNew placeholder="Adicionar"/>
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <label className="label" htmlFor="price"> Preço</label>
                        <   Input id="price" type="money" placeholder="R$ 25,00"/>
                        </div>
                        
                    </div>
                    
                    <label className="label" > Descrição </label>
                        <TextArea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        />
                    <div className="buttons">
                        <div className="button1">
                            <Button title="Excluir prato" />
                        </div>
                        <div className="button2">
                            <Button title="Salvar alterações" />
                        </div>
                    </div>
                    
                    

                    
                    
                </Form>
            </Content>
            
            <Footer/>
        </Container>
    )
}