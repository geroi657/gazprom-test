import { ReactNode } from "react";
import "./styles.modules.scss"

export default function CardBody({ children, modifier } : { children: ReactNode, modifier: string | undefined }) {
    return <div className={`CardBody ${ modifier }`}>
        { children }
    </div>
}