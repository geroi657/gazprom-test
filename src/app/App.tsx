import './App.scss'

import MainPage from "../pages/MainPage/MainPage.tsx";
import { useDispatch } from "react-redux";

import { changeData } from "./dataSlice.ts";
import { getAPI } from "../api.ts";
import { useEffect } from "react";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAPI();
                dispatch(changeData(response));
            }
            catch (error) {
                console.error(error);
            }
        };

        void fetchData();

        const interval = setInterval(fetchData, 60000);

        return () => clearInterval(interval)
    }, [dispatch]);

    return (
        <MainPage></MainPage>
    )
}

export default App
