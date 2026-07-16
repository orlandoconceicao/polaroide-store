import { useEffect, useState } from "react";

import api from "../services/api";

import "../styles/criarPedido.css";


export default function CriarPedido(){


    const [imagens, setImagens] = useState([]);


    const [pedido, setPedido] = useState({

        imagem:null,
        nome_cliente:"",
        telefone:"",
        endereco:"",
        quantidade:1,
        pagamento:"PIX"

    });

    useEffect(()=>{

        async function carregarImagens(){

            try{

                const response = await api.get("/images/");


                console.log(
                    "Imagens recebidas:",
                    response.data
                );

                setImagens(response.data);

            }catch(error){

                console.log(
                    "Erro ao carregar imagens:",
                    error.response?.data
                );


            }


        }

        carregarImagens();


    },[]);

    function selecionarImagem(id){


        setPedido({

            ...pedido,

            imagem:id

        });

    }

    async function enviar(){


        try{

            if(!pedido.imagem){


                alert(
                    "Selecione uma imagem"
                );


                return;

            }

            console.log(
                "Enviando pedido:",
                pedido
            );

            const response = await api.post(

                "/orders/",

                pedido

            );

            console.log(
                response.data
            );

            alert(
                "Pedido criado com sucesso!"
            );

            setPedido({

                imagem:null,
                nome_cliente:"",
                telefone:"",
                endereco:"",
                quantidade:1,
                pagamento:"PIX"

            });

        }catch(error){

            console.log(

                "Erro:",
                error.response?.data

            );

            alert(
                "Erro ao criar pedido"
            );

        }

    }

    function urlImagem(imagem){

        if(imagem.imagem){

            return `http://127.0.0.1:8000${imagem.imagem}`;

        }

        if(imagem.arquivo){

            return `http://127.0.0.1:8000${imagem.arquivo}`;

        }

        if(imagem.image){

            return `http://127.0.0.1:8000${imagem.image}`;

        }

        return imagem.url;

    }

    return(

        <div className="pedido-layout">

            <div className="area-imagens">

                <h2>
                    Escolha sua foto
                </h2>

                <div className="lista-imagens">

                    {imagens.map((imagem)=>(

                        <div

                            key={imagem.id}

                            className={

                                pedido.imagem === imagem.id

                                ?

                                "foto selecionada"

                                :

                                "foto"

                            }

                            onClick={()=>{

                                selecionarImagem(
                                    imagem.id
                                )

                            }}

                        >

                            <img

                                src={
                                    urlImagem(imagem)
                                }

                                alt="Foto enviada"

                            />

                        </div>

                    ))}

                </div>

            </div>

            <div className="area-formulario">


                <h1>
                    Criar Pedido
                </h1>

                <input

                    type="text"

                    placeholder="Nome"

                    value={
                        pedido.nome_cliente
                    }


                    onChange={(e)=>

                        setPedido({

                            ...pedido,

                            nome_cliente:e.target.value

                        })

                    }


                />

                <input

                    type="text"

                    placeholder="Telefone"

                    value={
                        pedido.telefone
                    }

                    onChange={(e)=>

                        setPedido({

                            ...pedido,

                            telefone:e.target.value

                        })

                    }


                />

                <input

                    type="text"

                    placeholder="Endereço"

                    value={
                        pedido.endereco
                    }

                    onChange={(e)=>

                        setPedido({

                            ...pedido,

                            endereco:e.target.value

                        })

                    }


                />

                <input

                    type="number"

                    min="1"

                    value={
                        pedido.quantidade
                    }

                    onChange={(e)=>

                        setPedido({

                            ...pedido,

                            quantidade:Number(
                                e.target.value
                            )

                        })

                    }

                />

                <select


                    value={
                        pedido.pagamento
                    }

                    onChange={(e)=>

                        setPedido({

                            ...pedido,

                            pagamento:e.target.value

                        })

                    }


                >

                    <option value="PIX">

                        PIX

                    </option>

                    <option value="CARTAO">

                        Cartão

                    </option>

                </select>

                <button onClick={enviar}>

                    Finalizar Pedido

                </button>

            </div>

        </div>
    );
}