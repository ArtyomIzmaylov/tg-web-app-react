import './App.css';
import {useEffect} from "react";


const tg = window.Telegram.WebApp
function App() {

    useEffect(() => {
        tg.ready();
    }, []);
    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
            <h1>Вас приветсвует ТЕЛЕГРАМ МЕГА ПАРСЕР БОТ ПРИЛОЖЕНИЕ</h1>
            <button onClick={onClose}>Нажать на кнопку</button>
        </div>
    )
}

export default App;
