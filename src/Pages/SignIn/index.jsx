import { Container , Form} from "./styles";
import {Input} from '../../Components/Input'
import { Button } from "../../Components/Button";
import {Link} from "react-router-dom"

import { useAuth } from "../../hooks/auth";
import { useState } from "react";







export function SignIn(){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const {signIn} = useAuth()

    function handleSignIn(){
        signIn({email , password})
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
                <h1>Faça o login</h1>
                <Form>
                    <div className="input-wrapper">
                        <label  htmlFor="email">Email</label>
                        <Input  id="email" placeholder="Seu email" type="email" onChange={e => setEmail(e.target.value)} />
                    </div>                    
                    <div className="input-wrapper">
                        <label  htmlFor="password">Senha</label>
                        <Input id="password" placeholder="Sua senha" type="password" onChange={e => setPassword(e.target.value)} />
                    </div>                    
                    <Button title="Entrar" onPress={handleSignIn}/>
                    <Link to="/register">Criar conta</Link>
                </Form>
            </div>            
        </Container>
    )
}