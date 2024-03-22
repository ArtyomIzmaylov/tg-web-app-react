import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./Components/Header/Header";


function App() {

    const {onToggleButton, tg} = useTelegram()
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header></Header>
            <button onClick={onToggleButton}>Нажать на кнопку</button>
        </div>
    )
}

export default App;
