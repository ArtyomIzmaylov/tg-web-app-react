import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./Components/Header/Header";
import Button from "./Components/Button/Button";
import {Route, Routes} from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import {FOCUSABLE_SELECTOR} from "@testing-library/user-event/dist/utils";
import Form from "./Components/Form/Form";



function App() {

    const {onToggleButton, tg} = useTelegram()
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route index element={<ProductList/>}></Route>
                <Route path={'form'} element={<Form/>}></Route>
            </Routes>
        </div>
    )
}

export default App;
