import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [googleClientId, setGoogleClientId] = useState(null);
    const navigation = useNavigate();

    useEffect(() => {
        axios
            .get('/api/google-client-id')
            .then(response => {
                setGoogleClientId(response.data.clientId);
            })
            .catch(error => {
                console.error('Error fetching Google OAuth Client ID:', error);
            });
    }, []);

    if (!googleClientId) {
        return <div>Loading...</div>;
    }

    const handleSuccess = credentialResponse => {
        const details = jwt_decode(credentialResponse.credential);
        // console.log(details);
        // console.log(credentialResponse);

        // Store user information in session storage
        sessionStorage.setItem('userDetails', JSON.stringify(details));
        sessionStorage.setItem('accessToken', credentialResponse.credential.accessToken);

        // Redirect to the '/chat' route after successful login
        navigation('/chat');
    };

    const handleFailure = () => {
        console.log('Login Failed');
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1 bg-gradient-to-br from-blue-600 to-teal-400">
                        <div className="main-container">
                            <GoogleOAuthProvider clientId={googleClientId}>
                                <GoogleLogin
                                    onSuccess={handleSuccess}
                                    theme="filled_black"
                                    shape="pill"
                                    onError={handleFailure}
                                />
                            </GoogleOAuthProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
