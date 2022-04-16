import React  from "react";
import './App.css';
import Input from "./components/input/Input";
import Chat from "./components/chat/Chat";

function App() {
    return (
        <div className="page">
            <h1> VOCO </h1>
            <div>
                <button className='buttonLog' type="submit"> Log in or create account </button>
            </div>
            <div className="chat-container">
                <Chat/>
                <br/>
                <input className="input" placeholder="Mutitädi | Elas metsas mutionu."/>
            </div>
            <br/>

            <div className="btn-container" >
                <button className='buttonSend' type="submit"> SEND </button>
            </div>

        </div>
    );
}

export default App;
