import { useState } from "react";

import api from "../services/api"

import fundoLogin from "../styles/img/fundo de login.jpeg";

export default function Register(){

    const [form, setForm] = useState({});

    async function cadastrar(){

    await api.post("/register/", form)

    alert("Conta criada");    

}

return(

    <div>

    <h1>Cadastro</h1>

    <input
    placeholder = "Usuário"
    
    onChange = { e => setForm({
        ...form, 
        username:e.target.value
    })}
    
    />
    
    <input placeholder="Email"

    onChange = { e => setForm({
        ...form,
        email:e.target.value
    })}

    />

    <input placeholder="Telefone"

    onChange = { e => setForm({
        ...form,
        telefone:e.target.value
    })}

    />

    <input type = "password" placeholder="Senha"
    
    onChange={ e => setForm({
        ...form,
        password:e.target.value
    })}

    />

    <button onClick={cadastrar}>
        Cadastrar
    </button>

    </div>

    )

};
