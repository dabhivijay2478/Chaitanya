import React, { useState } from 'react';
import ChatText from './ChatText';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
export default function ChatWindow() {
    const [showCard, setShowCard] = useState(true);
    const navigation = useNavigate();

    const handleUserInput = () => {
        setShowCard(false);
    };

    // Check if the user is authenticated by checking if user information exists in session storage
    const isUserAuthenticated = !!sessionStorage.getItem('userDetails');

    // If the user is not authenticated, show a login component or redirect to the login page
    if (!isUserAuthenticated) {
        // Replace this with your login component or a redirect to the login page
        return navigation('/');

    }

    return (
        <div className="flex flex-col h-screen">
            <Navbar />

            <div className="flex-grow flex flex-col overflow-y-auto">
                <div className="flex items-center justify-center p-4">
                    {showCard && (
                        <div className="card card-compact w-full md:w-96 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl rounded-lg">
                            <div className="card-body p-8">
                                <h1 className="text-4xl font-bold text-center text-white mb-6">Welcome to Chaitanya's Chatbot</h1>
                                <p className="text-lg text-center text-white">
                                    Chaitanya is a friendly chatbot that is here to assist you. Feel free to ask any questions, and Chaitanya will do its best to provide helpful responses.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <ChatText onUserInput={handleUserInput} />
            </div>
        </div>
    );
}
