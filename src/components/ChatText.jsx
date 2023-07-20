import React, { useState } from 'react';
import axios from 'axios';
import ResponseText from './ResponseText';
import './chattext.css';

export default function ChatText({ onUserInput }) {
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = async () => {
        try {
            // Make the Axios POST request to the server
            const response = await axios.post('/generate', {
                userInput: userInput,
            });

            // Extract the generated response from the server response
            const { generatedResponse } = response.data;

            // Create a new chat message object for the server response
            const newServerMessage = { text: generatedResponse, sender: 'server' };

            // Update the chat messages with new user input and server response
            setChatMessages((prevMessages) => [
                ...prevMessages,
                { text: userInput, sender: 'user' },
                newServerMessage,
            ]);

            // Clear the user input after sending the message
            setUserInput('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow overflow-y-auto max-h-[calc(100vh - 80px)]">
                {chatMessages.map((message, index) => (
                    <ResponseText
                        key={index}
                        generatedResponse={message.sender === 'server' ? message.text : ''}
                        userInput={message.sender === 'user' ? message.text : ''}
                    />
                ))}
            </div>

            <footer className="sticky bottom-0 flex items-center justify-center p-4 bg-neutral text-neutral-content rounded-xl mt-2 mb-2 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-12 md:ml-12">
                <div className="flex-grow flex items-center">
                    <textarea
                        className="textarea textarea-info w-full h-full text-slate-700 mr-2"
                        placeholder="Talk to Chaitanya"
                        value={userInput}
                        onChange={handleInputChange}
                        onFocus={onUserInput} // Add the onFocus event here to hide the artboard
                        onKeyPress={handleKeyPress}
                    ></textarea>
                    <div>
                        <button className="btn btn-circle btn-outline hover:dark:bg-green-400 bg-white" onClick={handleSendMessage}>
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
