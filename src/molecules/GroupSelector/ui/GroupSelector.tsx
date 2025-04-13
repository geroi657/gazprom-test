import "./styles.scss"

import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { useEffect, useState } from "react";
import { entryType} from "../types/types.ts";

import GroupButton from "../../../atoms/GroupButton/ui/GroupButton.tsx";

export default function GroupSelector() {

    const data = useSelector((state: RootState) => state.data.value?.responseGroups)

    const [groups , setGroups] = useState<Map<number, string>>(new Map());

    useEffect(() => {

        if (data !== undefined) {

            const groupsMap = new Map<number, string>();

            data.forEach((entry : entryType) => {
                if (!groupsMap.has(entry.GroupID)) {
                    groupsMap.set(entry.GroupID, entry.GroupName);
                }
            });

            setGroups(groupsMap);
        }

    }, [data]);

    return <div className="GroupSelector">
        {groups.size > 0 ? Array.from(groups.entries()).map(([key, value]) => (
            <GroupButton key={ key } name={ value } id={ key }></GroupButton>
        )) : <p>Загрузка...</p>}
    </div>
}