import { useState } from "react";

import api from "../services/api";

import "../styles/upload.css";

export default function Upload() {

    const [arquivo, setArquivo] = useState(null);

    async function enviar() {

        if (!arquivo) {
            alert("Selecione uma imagem.");
            return;
        }

        const formData = new FormData();

        formData.append("arquivo", arquivo);

        try {

            await api.post("/upload/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Foto enviada com sucesso!");

        } catch (error) {

            console.error(error);

            alert("Erro ao enviar a imagem.");

        }
    }

    return (


            <div className="upload-card">

                <h1>Enviar Foto</h1>

                <p>Escolha uma imagem para fazer upload.</p>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setArquivo(e.target.files[0])}
                />

                {arquivo && (
                    <img
                        src={URL.createObjectURL(arquivo)}
                        alt="Prévia"
                        className="preview-image"
                    />
                    

                )}

                <button onClick={enviar}>
                    Enviar Foto
                </button>

            </div>
    );

}