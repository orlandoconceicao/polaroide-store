import { useState } from "react";

import api from "../services/api"


export default function(){

    const[arquivo, setArquivo] = useState();

    async function enviar(){
        
        const formData = new formData();

        formData.append(

            "arquivo", arquivo

        );

        await api.post(
            
            "/upload/", formData
        
        );

        alert(

            "foto enviada"

        );

    }

}