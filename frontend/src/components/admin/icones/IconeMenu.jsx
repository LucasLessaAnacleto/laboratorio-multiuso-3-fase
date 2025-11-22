import iconeMenu from "../../../assets/icone-menu.svg";
export function IconeMenu({ tamanho }) {
    return (
        <div class="icone icone-menu-nav" style={{ width: tamanho || "auto" }}>
            <img src={iconeMenu} alt="Icone Menu Nav Mobile" />
        </div>
    )
}