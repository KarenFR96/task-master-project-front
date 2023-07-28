"use client";
import React from "react";
import Login from "@/pages/login";
import Register from "@/pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecoverPasssword from "@/pages/recover";
import Home from "@/pages/home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recover' element={<RecoverPasssword />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
