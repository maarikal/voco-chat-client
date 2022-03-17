import React from 'react';
import Chatcard from "../chatcard/Chatcard";
import data from '../../data.json';

function Chat() {
    return (
        <div className="container">
            {data.map((item) => {
                return(<Chatcard
                    message={item.message}
                    username={item.username}
                    date={item.date}
                    />)
            })}
        </div>
    );
}

export default Chat;