import { useContext } from "react"
import { UsuarioContext } from "../../../contexts/UsuarioContext.jsx";

export function IconeUsuario({ tamanho }) {
    const usuario = useContext(UsuarioContext);
    return (
        <div className="icone" style={{ width: tamanho || "auto" }}>
            <img src={usuario ? usuario.ftPerfil : "ft_perfil_default.png"} 
                alt="Foto de perfil do usuário" />
        </div>
    )
}