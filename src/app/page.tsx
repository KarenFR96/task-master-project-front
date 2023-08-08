"use client";
import React from "react";
import Login from "@/pages/login";
import Register from "@/pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecoverPasssword from "@/pages/recover";
import Home from "@/pages/home";
import CreateTask from "@/pages/task/create";
import EditTask from "@/pages/task/[id]";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recover' element={<RecoverPasssword />} />
        <Route path='/home' element={<Home />} />
        <Route path='/task/create' element={<CreateTask/>} />
        <Route path='/task/id' element={<EditTask/>} />
      </Routes>
    </BrowserRouter>
  );
}
