import React from 'react'
import { Route, Routes } from "react-router-dom";
import ChatWindow from './components/ChatWindow';
import Login from './components/Login';

function App() {


  return (
    <>
      <Routes>

        <Route exact path="/" element={<Login />} />
        <Route exact path="/Chat" element={<ChatWindow />} />



      </Routes>
    </>
  )
}

export default App
