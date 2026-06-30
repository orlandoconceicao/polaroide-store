import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../styles/navbar.css";


const NAV_LINKS = [
    { to: "/", label: "Home", end: true },
    { to: "/login", label: "Login" },
    { to: "/register", label: "Cadastro" },
    { to: "/dashboard", label: "Minha Conta" },
    { to: "/upload", label: "Enviar Fotos" },
    { to: "/pedido", label: "Novo Pedido" },
    { to: "/pedidos", label: "Meus Pedidos" },
];


export default function Navbar() {

    const { token, logout } = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    function handleLogout() {
        closeMenu();
        logout();
    }

    return (

        <nav className="navbar" aria-label="Navegação principal">

            <div className="navbar__inner">

                <Link to="/" className="navbar__logo" onClick={closeMenu}>
                    Polaroid Shop
                </Link>

                <button
                    type="button"
                    className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                </button>

                <div className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>

                    <ul className="navbar__links">
                        {NAV_LINKS.map((item) => (
                            <li key={item.to} className="navbar__item">
                                <NavLink
                                    to={item.to}
                                    end={item.end}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar__link navbar__link--active"
                                            : "navbar__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {token && (
                        <button
                            type="button"
                            className="navbar__logout"
                            onClick={handleLogout}
                        >
                            Sair
                        </button>
                    )}

                </div>

            </div>

            {menuOpen && (
                <button
                    type="button"
                    className="navbar__backdrop"
                    aria-label="Fechar menu"
                    onClick={closeMenu}
                />
            )}

        </nav>

    );

}
