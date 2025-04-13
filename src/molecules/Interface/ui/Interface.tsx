import "./styles.scss"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import StatusLight from "../../../atoms/StatusLight/ui/StatusLight.tsx";
import {InterfaceStatus} from "../types/types.ts";

export default function Interface() {

    const [nodeInterface, setNodeInterface] = useState<string>("")
    const [status, setStatus] = useState<InterfaceStatus>("Нет информации")
    const [color, setColor] = useState<string>("")

    const activeNode = useSelector((state: RootState) => state.nodeSelect.value);
    const groups = useSelector((state: RootState) => state.data.value?.responseGroups);

    const statusRU = {
        "UNREACHABLE": "Интерфейс недоступен",
        "SHUTDOWN": "Интерфейс выключен",
        "UP": "Интерфейс работает",
        "WARNING": "Обнаружены проблемы",
        "CRITICAL": "Критическое состояние",
        "DOWN": "Интерфейс отключён",
        "Нет информации": "Нет информации"
    }

    useEffect(() => {

        if (groups !== undefined){
            for (const group of groups!) {
                if (group.NodeID === activeNode) {
                    setNodeInterface(group.InterfaceName === null ? "Нет информации" : group.InterfaceName);
                    setStatus(group.InterfaceStatusText === null ? "Нет информации" : group.InterfaceStatusText as InterfaceStatus)
                    setColor(group.InterfaceColor === null ? "grey" : group.InterfaceColor)
                    break;
                }
            }
        }
    }, [activeNode, groups]);

    return <div className={"Interface"}>
        <div className={"InterfaceName"}>{ nodeInterface }</div>
        <div className={"InterfaceStatus"}>{ statusRU[status] }</div>
        <div className={"StatusLightContainer"}>
            <StatusLight color={ color }></StatusLight>
        </div>
    </div>;
}