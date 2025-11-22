import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
    const dt = new Date(2025, 10, 9, 18, 44);
    const nm = "Lucas Lessa";
    const usuarioData = {
        nome: nm,
        email: "lucas.lessa@gmail",
        ftPerfil: "ft_perfil_lucas_lessa_09_11_2025.png",
        dtSessao: dt,
        idSessao: btoa(`${nm}${dt.getFullYear()}${String(dt.getMonth()+1).padStart(2,0)}${String(dt.getDate()+1).padStart(2,0)}${String(dt.getHours()+1).padStart(2,0)}${String(dt.getMinutes()+1).padStart(2,0)}`)
    };
    const [usuario] = useState(usuarioData);
    useEffect(() => {
        console.log("Usuario Contexto");
    }, []);

    return (
        <UsuarioContext.Provider value={usuario}>
            { children }
        </UsuarioContext.Provider>
    )
}