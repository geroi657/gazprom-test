import "./styles.scss"

import Node from "../../../molecules/Node/ui/Node"

import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { useEffect, useState } from "react";
import { NodeStatus } from "../types/types.ts";

export default function NodeSelector() {

    const nodesData = useSelector((state : RootState) => state.data.value?.responseMetrics);
    const nodesStatus = useSelector((state : RootState) => state.data.value?.responseGroups);
    const currentGroup = useSelector((state : RootState) => state.groupSelect.value);

    const [nodes, setNodes] = useState(new Map<number, [string, number, number, number, number]>());

    // Механизм получения самых последних метрик для каждой ноды в списке может быть реализован
    // несколькими способами. Если мы не знаем структуру данных (а точнее порядок), получаемых с сервера,
    // то нам пришлось бы просматривать каждый элемент списка, сравнивать дату и время получения метрики
    // и только потом собрать массив для рендера списка. Но, т.к. мы знаем порядок, мы можем просто сделать
    // реверс массива, а затем взять первые инстанции нод, получив таким образом последнюю метрику

    function handleColor(id : number) {
        for (let node of nodesStatus!) {
            if (node.NodeID === id && node.NodeColor !== null) {
                return node.NodeColor;
            }
        }
        return "none";
    }

    function handleStatus(id : number) : NodeStatus {
        for (let node of nodesStatus!) {
            if (node.NodeID === id && node.NodeColor !== null) {
                return node.NodeStatusText as NodeStatus;
            }
        }
        return "NOINFO";
    }

    useEffect(() => {

        if (nodesData !== undefined && nodesStatus !== undefined) {

        const reversedNodes = nodesData.map((node) => ({...node})).reverse();
        const nodeMap = new Map<number, [string, number, number, number, number]>();

            reversedNodes.forEach((node) => {
                if ((!(nodeMap.has(node.NodeID))) && node.GroupID === currentGroup) {
                    nodeMap.set(node.NodeID, [node.NodeName, node.GroupID, node.CPU_Utilization, node.RAM_Utilization, node.Memory_Utilization]);
                }
            });

            setNodes(nodeMap)
        }

    }, [nodesData, currentGroup]);

    return <div className={"NodeSelector"}>
        {nodes.size > 0 ? Array.from(nodes.entries()).map(([NodeID, [NodeName, CPU_Utilization, RAM_Utilization, Memory_Utilization]]) => (
            <Node key={ NodeID } id={ NodeID } name={ NodeName } RAM={ RAM_Utilization } Memory={ Memory_Utilization } CPU={ CPU_Utilization } status={ handleStatus(NodeID) }  color={ handleColor(NodeID) }></Node>
        )) : (<p style={{color: "#00000050", display: "block", height: "100%", paddingTop: "50%", textAlign: "center"}}>Загрузка...</p>)}
        </div>
}