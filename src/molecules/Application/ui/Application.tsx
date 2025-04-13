import "./styles.scss"

import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { useEffect, useState } from "react";

export default function Application() {

    const activeNode = useSelector((state : RootState) => state.nodeSelect.value)
    const groups = useSelector((state : RootState) => state.data.value?.responseGroups)

    const [application, setApplication] = useState<string>("")

    useEffect(() => {

        if (groups !== undefined){
            for (const group of groups) {
                if (group.NodeID === activeNode){
                    setApplication(group.ApplicationName === null ? "Нет информации" : group.ApplicationName);
                    break;
                }
            }
        }
    }, [activeNode, groups]);

    return <div className={"Admin"}>
        <div className={"ApplicationName"}>{ application }</div>
    </div>;
}