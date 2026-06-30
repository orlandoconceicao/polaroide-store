import { useState } from "react";

import api from "../services/api"


export default function CriarPedido(){

    const[pedido, setPedido] = useState({});

    async function enviar(){

        await api.post("/orders/", pedido);

        alert(

            "Pedido criado"

        );
    }

    return (

        <div>

            <input placeholder = "Nome"

            onChange={e => setPedido({
                ...pedido,
                nome_cliente:e.target.value
            })}
            
            />

            <input placeholder = "Telefone"
            
            onChange={e => setPedido({
                ...pedido,
                telefone:e.target.value
            })}
            
            />


            <input placeholder = "Endereço"

            onChange={e => setPedido({
                ...pedido,
                endereco:e.target.value
            })}
            
            />

            <input 
            type = "number"
            placeholder = "Quantidade"

            onChange={e => setPedido({
                ...pedido,
                quantidade:e.target.value
            })}

            />

            <select
            
            onChange={e => setPedido({
                ...pedido,
                pagamento:e.target.value
            })}

            >

            <option>
                PIX
            </option>

            <option>
                Cartão
            </option>

            </select>


            <button onClick = {enviar}>
                Finalizar
            </button>

        </div>

    )

}