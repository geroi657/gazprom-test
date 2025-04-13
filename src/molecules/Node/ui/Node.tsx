import "./styles.scss"

import StatusLight from "../../../atoms/StatusLight/ui/StatusLight.tsx";

import { NodeStatus } from "../types/types.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { changeNode } from "../reducer/nodeSlice.ts";

export default function Node({ CPU, RAM, Memory, name, id, color, status} : {CPU: number, RAM: number, Memory: number, name: string, id: number, color: string, status: NodeStatus }) {

    const activeNode = useSelector(( state : RootState) => state.nodeSelect.value)
    const dispatch = useDispatch();

    function handleActiveNodeChange() {
        dispatch(changeNode(id));
    }

    const statusRU = {
        "UNREACHABLE": "Узел недоступен",
        "SHUTDOWN": "Узел выключен",
        "UP": "Узел работает нормально",
        "WARNING": "Обнаружены проблемы",
        "CRITICAL": "Критическое состояние",
        "DOWN": "Узел отключён",
        "NOINFO": "Информация отсутствует"
    }

    return <div className={"NodeWrapper"}>
        <button className={"NodeContainer"} onClick={ handleActiveNodeChange } disabled={ activeNode === id }>
            <div className="NodeStatus">
                <StatusLight color={ color }></StatusLight>
                <div className="NodeInfo">
                    <p className={"NodeName"}>{ name }</p>
                    <p className={"NodeCurrent"}>{ statusRU[status] }</p>
                </div>
            </div>
            <div className="NodeUtilization">
                <p className={"NodeUtilizationStatus"}>{`CPU: ${CPU}%`}</p>
                <p className={"NodeUtilizationStatus"}>{`MEM: ${Memory}%`}</p>
                <p className={"NodeUtilizationStatus"}>{`RAM: ${RAM}%`}</p>
            </div>
        </button>
    </div>
}