import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "../components/NavBar";

import Home from "../pages/Home";

import Login from "../pages/Login";

import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";

import UploadFotos from "../pages/UploadFotos";

import CriarPedido from "../pages/CriarPedido";

import MeusPedidos from "../pages/MeusPedidos";


import ProtectedRoute from "../components/ProtectedRoute";


export default function AppRoutes(){

    return(

        <BrowserRouter>

        <Routes>

        <Route
        path = "/"
        element = {<Home/>}
        />

        <Route
        path = "/login"
        element = {<Login/>}
        />

        <Route
        path = "/register"
        element = {<Register/>}
        />

        <Route
        path = "/dashboard"
        element = {
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        }
        />

        <Route
        path = "/upload"
        element = {
            <ProtectedRoute>
                <UploadFotos/>
            </ProtectedRoute>
        }
        />

        <Route
        path = "/pedido"
        element = {
            <ProtectedRoute>
                <CriarPedido/>
            </ProtectedRoute>
        }
        />

        <Route
        path="/pedidos"
        element = {
            <ProtectedRoute>
                <MeusPedidos/>
            </ProtectedRoute>
        }
        />

        </Routes>

        </BrowserRouter>
    )
}

