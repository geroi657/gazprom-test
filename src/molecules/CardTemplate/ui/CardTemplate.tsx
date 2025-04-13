import "./styles.module.scss"

import CardName from "../../../atoms/CardName/ui/CardName.tsx";
import CardBody from "../../../atoms/CardBody/ui/CardBody.tsx";

import { ReactNode } from "react";

export default function CardTemplate({ name, modifier, children } : {name: string; modifier: string | undefined , children : ReactNode }) {
    return <div className={`CardTemplate`}>
        <CardName name={ name } modifier={ modifier }></CardName>
        <CardBody modifier={ modifier }>
            { children }
        </CardBody>
    </div>
}