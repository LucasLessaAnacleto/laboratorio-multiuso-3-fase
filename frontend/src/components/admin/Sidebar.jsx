import iconeHome from "../../assets/home.png";
import iconeDatas from "../../assets/datas.png";
import iconeEquipamento from "../../assets/equipamento.png";
import iconeEspaco from "../../assets/espaco.png";
import iconeConfig from "../../assets/config.png";

export function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li className="menu-nav-item"><img width={30} height={30} src={iconeHome} alt="Icone Dashboard" />Dashboard</li>
                    <li className="menu-nav-item"><img src={iconeDatas} alt="Icone Calendario" />Calendário</li>
                    <li className="menu-nav-item"><img src={iconeEquipamento} alt="Icone Equipamentos" />Equipamentos</li>
                    <li className="menu-nav-item"><img src={iconeEspaco} alt="Icone Espaços" />Espaços</li>
                    <li className="menu-nav-item"><img src={iconeConfig} alt="Icone Configurações" />Configurações</li>
                </ul>
            </nav>
        </div>
    )
}