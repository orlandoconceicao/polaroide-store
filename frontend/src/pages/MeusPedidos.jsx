import { useEffect, useState} from "react";

import api from "../services/api";


export default function MeusPedidos(){

    const [pedidos, setPedidos] = useState([]);

    useEffect(()=>{

        api.get("/orders/")
            .then(response => 
                setPedidos(response.data))
    },[]);

    return(

        <div>

            <h1>Meus Pedidos</h1>

            {pedidos.map(pedido =>(
                <div key = {pedido.id}>

                    <h3>Pedido #{pedido.id}</h3>

                    <P>Quantidade: {pedido.quantidade}</P>

                    <p>Status {pedido.status}</p>

                </div>
            ))}

        </div>

    )

}