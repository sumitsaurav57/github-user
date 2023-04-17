import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Section from './Section'
import LogIn from './LogIn';
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated?<Section/>:<LogIn/>}
    </div>
  )
}
export default App
