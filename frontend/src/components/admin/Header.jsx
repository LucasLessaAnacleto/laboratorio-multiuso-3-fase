import { IconeMenu } from "./icones/IconeMenu.jsx";
import { IconeUsuario } from "./icones/IconeUsuario.jsx";

export function Header() {
    return (
        <header className="header">
            <IconeMenu tamanho={40}/>
            <div style={{ marginLeft: "auto" }}>
                <IconeUsuario tamanho={40} />
            </div>
        </header>
    )
}