import "./styles.scss";

import Header from "../../molecules/Header/ui/Header.tsx";
import CardTemplate from "../../molecules/CardTemplate/ui/CardTemplate.tsx";
import Status from "../../molecules/Status/ui/Status.tsx";
import Info from "../../molecules/Info/ui/Info.tsx";
import GroupSelector from "../../molecules/GroupSelector/ui/GroupSelector.tsx";
import NodeSelector from "../../organisms/NodeSelector/ui/NodeSelector.tsx";
import Metrics from "../../organisms/Metrics/ui/Metrics.tsx";
import Interface from "../../molecules/Interface/ui/Interface.tsx";
import Admin from "../../molecules/Admin/ui/Admin.tsx";
import Application from "../../molecules/Application/ui/Application.tsx";

export default function MainPage() {
    return (<>
            <Header></Header>
            <div className={"InterfaceWrapper"}>
                <div className={"InterfaceNarrow"}>
                    <CardTemplate modifier={""} name={"Статус"} children={<Status />}></CardTemplate>
                    <CardTemplate modifier={""} name={"Общая информация"} children={<Info />}></CardTemplate>
                    <CardTemplate modifier={""} name={"Группы"} children={<GroupSelector />}></CardTemplate>
                </div>
                <div className={"InterfaceNarrow"}>
                    <CardTemplate modifier={""} name={"Узлы"} children={<NodeSelector />}></CardTemplate>
                </div>
                <div className={"InterfaceWide"}>
                    <CardTemplate modifier={""} name={"Метрики"} children={<Metrics />}></CardTemplate>
                    <CardTemplate modifier={"Small"} name={"Интерфейс"} children={<Interface />}></CardTemplate>
                    <CardTemplate modifier={"Small"} name={"Администратор"} children={<Admin />}></CardTemplate>
                    <CardTemplate modifier={"Small"} name={"Приложение"} children={<Application />}></CardTemplate>
                </div>
            </div>
        </>
    );
}