import "./styles.modules.scss"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { changeGroup } from "../reducer/groupSelectSlice.ts";

export default function GroupButton({ name, id } : { name: string, id: number }) {

    const currentGroup = useSelector((state : RootState) => state.groupSelect.value);
    const dispatch = useDispatch();

    function handleGroupChange() {
        dispatch(changeGroup(id));
    }

    return <button className={ "GroupButton" } onClick={ handleGroupChange } disabled={ id === currentGroup }>{ name }</button>
}