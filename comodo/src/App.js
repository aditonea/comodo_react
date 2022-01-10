import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/loginPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}