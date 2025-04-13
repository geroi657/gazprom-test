import "./styles.scss"
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import {useEffect, useState} from "react";

export default function Info() {

    const activeGroup = useSelector((state : RootState) => state.groupSelect.value);
    const activeNode = useSelector((state : RootState) => state.nodeSelect.value);
    const groups = useSelector((state: RootState) => state.data.value?.responseGroups);

    const [nodeName, setNodeName] = useState<string>("");
    const [groupName, setGroupName] = useState<string>("");

    useEffect(() => {
        if (groups !== undefined) {

            for (const group of groups) {
                if (group.NodeID === activeNode) {
                    setNodeName(group.NodeName);
                    break;
                }
            }

            for (const group of groups) {
                if (group.GroupID === activeGroup) {
                    setGroupName(group.GroupName);
                    break;
                }
            }
        }
    }, [activeNode, activeGroup, groups]);

    return <div className="InfoWrapper">
        <p className={"InfoHeading"}>Обзор:</p>
        <p className={"InfoParagraph"}>{`Выбранная группа - ${groupName}`}</p>
        <p className={"InfoParagraph"}>{`Выбранный узел - ${nodeName}`}</p>
    </div>
}