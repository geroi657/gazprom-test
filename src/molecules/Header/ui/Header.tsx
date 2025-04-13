import HeaderIcon from "../../../atoms/HeaderIcon/ui/HeaderIcon.tsx";
import HeaderH1 from "../../../atoms/HeaderH1/ui/HeaderH1.tsx";
import "./styles.scss"

export default function Header() {
    return <header className="Header">
        <HeaderIcon></HeaderIcon>
        <HeaderH1></HeaderH1>
    </header>
}