import "./styles.scss"
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import {useEffect, useState} from "react";

export default function Admin() {

    const [admin, setAdmin] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const activeNode = useSelector((state: RootState) => state.nodeSelect.value);
    const groups = useSelector((state: RootState) => state.data.value?.responseGroups);

    useEffect(() => {

        if (groups !== undefined){
            for (const group of groups!) {
                if (group.NodeID === activeNode) {
                    setAdmin(`${group.LastName} ${group.FirstName}`);
                    setEmail(group.Email)
                    break;
                }
            }
        }
    }, [activeNode, groups]);

    return <div className="Admin">
        <div className={"AdminName"}>{ admin }</div>
        <a className={"AdminEmail"} href={ `mailto:${email}` }>{ email }</a>
    </div>
}