import { Link } from "react-router-dom";


export default function Dashboard(){

    return(

        <div>

            <h1>Minha Conta</h1>

            <Link to = "/upload">
                Enviar fotos
            </Link>

            <br/>

            <Link to = "/pedido">
                Novo Pedido
            </Link>

            <br/>

            <Link to = "/pedidos">
                Meus pedidos
            </Link>

        </div>

    )
}