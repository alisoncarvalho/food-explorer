import { Container , Form} from "./styles";
import {Input} from '../../Components/Input'
import { Button } from "../../Components/Button";
import { Logo } from "../../Components/Logo";
import { Link , useNavigate } from "react-router-dom";

import { useState } from "react";

import {api} from "../../services/api"


export function SignUp(){
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
           return alert("Preencha todos os campos")
        }

        api.post("/users" , {name , email , password})
        .then(()=> {
            alert("Usuário cadastrado com sucesso.")
            navigate("/")
        })
        .catch((error)=> {
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível cadastrar o usuário.")
            }
        })
    }

    return(
        <Container>
            <div className="logo">
                <svg width="30" height="30" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/>
                </svg>
                <p>food explorer</p>
            </div>            
            <div className="block">
                <h1>Faça login</h1>
                <Form>
                    <div className="input-wrapper">
                        <label htmlFor="name">Seu nome</label>
                        <Input  id="name" placeholder="Exemplo: Maria da Silva" type="email" onChange={ e => setName(e.target.value)} />
                    </div>                    
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <Input id="email" placeholder="Exemplo: exemplo@email.com" type="email" onChange={ e => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Senha</label>
                        <Input id="password" placeholder="No mínimo 6 caracteres" type="password" onChange={ e => setPassword(e.target.value)} />
                    </div>                    
                    <Button title="Criar conta" onPress={handleSignUp}/>
                    <Link to="/">Já tenho conta conta</Link>
                </Form>
            </div>
        </Container>
    )
}