import React from 'react';
import Typewriter from 'typewriter-effect';
import logo from '../assets/logo3.png';

export default function ResponseText({ generatedResponse, userInput }) {
    return (
        <>
            <div className="max-w-screen-lg mx-auto mb-5 px-4 sm:px-6 md:px-8">
                <div className="h-[calc(100vh - 80px)] overflow-y-auto">
                    {userInput && (
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src={logo} alt="Avatar" />
                                </div>
                            </div>
                            <div className="chat-bubble">{userInput}</div>
                            <div className="chat-footer">User</div>
                        </div>
                    )}
                    {generatedResponse && (
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src={logo} alt="Avatar" />
                                </div>
                            </div>
                            <div className="chat-bubble">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 15,
                                        speed: 500,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(generatedResponse)
                                            .pauseFor(1000)
                                            .start();
                                    }}
                                />
                            </div>
                            <div className="chat-footer">Chaitanya</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}