import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';
import Export from './pages/Export';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/editor/:projectId" element={<Editor />} />
      <Route path="/export/:projectId" element={<Export />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </>
  );
}

export default App;
