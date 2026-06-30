import { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import fundoLogin from "../styles/img/fundo de login.jpeg";

import "../styles/login.css";


export default function Login(){

    const {login} = useAuth();

    const [email, setEmail] = useState("");

    const [senha, setSenha] = useState("");

    async function entrar(){

        await login(email, senha);

        window.location = "/dashboard"
        
    }

    return(

        <div
            className="login-page"
            style={{ backgroundImage: `url(${fundoLogin})` }}
        >

            <div className="login-card">

                <header className="login-card__header">
                    <span className="login-card__badge">Área segura</span>
                    <h1>Bem-vindo de volta</h1>
                    <p className="login-card__subtitle">
                        Acesse sua conta e continue transformando fotos em lembranças.
                    </p>
                </header>

                <div className="login-form">

                    <div className="login-field login-field--email">
                        <label className="login-field__label" htmlFor="login-email">
                            E-mail
                        </label>
                        <input
                            id="login-email"
                            type="email"
                            placeholder="seu@email.com"
                            autoComplete="email"
                            onChange={e => setEmail(
                                e.target.value
                            )}
                        />
                    </div>

                    <div className="login-field login-field--password">
                        <label className="login-field__label" htmlFor="login-senha">
                            Senha
                        </label>
                        <input
                            id="login-senha"
                            type="password"
                            placeholder="Digite sua senha"
                            autoComplete="current-password"
                            onChange={e => setSenha(
                                e.target.value
                            )}
                        />
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={entrar}
                    >
                        Entrar
                    </button>

                </div>

                <footer className="login-card__footer">
                    <p className="login-card__footer-text">
                        Não possui uma conta?
                    </p>
                    <Link to="/register" className="login-card__cta-secondary">
                        Criar conta
                    </Link>
                </footer>

            </div>
            
        </div>

    )

}
