import React  from "react";
import './App.css';
import Input from "./components/input/Input";
import Chat from "./components/chat/Chat";

function App() {
    return (
        <div className="page">
            <p> VOCO </p>
            <div className="chat-container">
                <Chat/>
                <br/>
                <input className="input" placeholder="test3"/>
            </div>
        </div>
    );
}

export default App;
