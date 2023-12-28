import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

import Header from "./components/Header"

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <>
    <Router>
      <Header />
      <div className="min-h-full px-8 py-10 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App
