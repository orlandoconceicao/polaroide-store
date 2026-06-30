import { Link } from "react-router-dom";

import Navbar from "../components/NavBar";

import "../styles/home.css";

import heroImg from "../styles/img/hero.jpeg";
import destaqueImg from "../styles/img/destaque.jpeg";
import amigosImg from "../styles/img/amigos.jpeg";
import aniversarioImg from "../styles/img/aniversario.jpeg";
import viagemImg from "../styles/img/viagem.jpeg";
import naturezaImg from "../styles/img/natureza.jpeg";
import petsImg from "../styles/img/pets.jpeg";
import casal2Img from "../styles/img/casal2.jpeg";
import casal3Img from "../styles/img/casal3.jpeg";

const categorias = [
    {
        src: amigosImg,
        titulo: "Amigos",
        descricao: "Registre risadas e momentos espontâneos.",
    },
    {
        src: aniversarioImg,
        titulo: "Celebrações",
        descricao: "Datas especiais merecem um lugar na parede.",
    },
    {
        src: viagemImg,
        titulo: "Viagens",
        descricao: "Leve cada destino para casa em formato Polaroid.",
    },
    {
        src: naturezaImg,
        titulo: "Natureza",
        descricao: "Paisagens e detalhes que contam histórias.",
    },
    {
        src: petsImg,
        titulo: "Pets",
        descricao: "Seu companheiro merece um quadro exclusivo.",
    },
    {
        src: casal2Img,
        titulo: "Casais",
        descricao: "Amor, memória e estética em cada clique.",
    },
];

const galeria = [
    { src: heroImg, legenda: "Suas memórias" },
    { src: destaqueImg, legenda: "Momentos a dois" },
    { src: amigosImg, legenda: "Entre amigos" },
    { src: aniversarioImg, legenda: "Celebração" },
    { src: viagemImg, legenda: "Por aí" },
    { src: naturezaImg, legenda: "Natureza" },
    { src: petsImg, legenda: "Pet favorito" },
    { src: casal2Img, legenda: "Juntos" },
    { src: casal3Img, legenda: "Para sempre" },
];

function Home() {
    return (
        <>
            <Navbar />

            <main className="home">

                <section className="home-hero">
                    <div className="home-hero__content">
                        <span className="home-hero__label">Polaroid Shop</span>

                        <h1>Suas memórias em forma de arte</h1>

                        <p>
                            Transforme momentos especiais em fotos no estilo Polaroid.
                        </p>

                        <div className="home-hero__actions">
                            <Link className="home-btn home-btn--primary" to="/upload">
                                Criar agora
                            </Link>

                            <Link className="home-btn home-btn--outline" to="/login">
                                Entrar
                            </Link>
                        </div>
                    </div>

                    <figure className="home-hero__figure polaroid-frame">
                        <img className="home-hero__image" src={heroImg} alt="Hero" />
                    </figure>
                </section>


                <section className="home-categories__grid">
                    {categorias.map((item, index) => (
                        <figure className="home-card polaroid-frame" key={index}>
                            <img className="home-card__image" src={item.src} alt={item.titulo} />
                            <figcaption className="home-card__body">
                                <h3>{item.titulo}</h3>
                                <p>{item.descricao}</p>
                            </figcaption>
                        </figure>
                    ))}
                </section>


                <section className="home-gallery__grid">
                    {galeria.map((item, index) => (
                        <figure className="home-gallery__item polaroid-frame" key={index}>
                            <img className="home-gallery__image" src={item.src} alt={item.legenda} />
                            <figcaption className="home-gallery__caption">
                                {item.legenda}
                            </figcaption>
                        </figure>
                    ))}
                </section>

            </main>
        </>
    );
}

export default Home;