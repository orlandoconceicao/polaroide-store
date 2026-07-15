import { createContext, useState, useContext } from "react";

import api from "../services/api";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    async function login(username, password) {

        const response = await api.post("/login/", {
            username,
            password,
        });

        localStorage.setItem(
            "token",
            response.data.access
        );

        setToken(response.data.access);
    }

    function logout() {

        localStorage.removeItem("token");

        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}