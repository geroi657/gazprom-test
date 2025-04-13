import "./styles.scss";

import StatusLight from "../../../atoms/StatusLight/ui/StatusLight.tsx";
import StatusText from "../../../atoms/StatusText/ui/StatusText.tsx";

import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { useEffect, useState } from "react";


export default function Status() {

    const groups = useSelector((state : RootState) => state.data.value?.responseGroups);
    const activeGroup = useSelector((state : RootState) => state.groupSelect.value);

    const [status, setStatus] = useState<string>("")
    const [color, setColor] = useState<string>("")

    useEffect(() => {
       if (groups !== undefined) {

           const activeNodes = [];

           for (const group of groups) {
               if (group.GroupID === activeGroup) {
                   activeNodes.push(group.NodeStatusText);
               }
           }

           if (activeNodes.includes("DOWN")){
               setStatus("Отключение при сбое");
               setColor("darkred");
           } else if (activeNodes.includes("CRITICAL")) {
               setStatus("Критический сбой")
               setColor("red");
           } else if (activeNodes.includes("WARNING")) {
               setStatus("Есть проблемы")
               setColor("yellow");
           } else {
               setStatus("Стабильно");
               setColor("lightgreen");
           }
       }
    }, [groups, activeGroup]);

    return <div className={"StatusWrapper"}>
        <div className={"Status"}>
            <StatusLight color={ color! }></StatusLight>
            <StatusText>{ status! }</StatusText>
        </div>
    </div>
}