import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './Views/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Libros } from './Views/Libros/Libros';
import { Teoria } from './Views/TeoriaMusical/Teoria';
import { Cancioneros } from './Views/Cancioneros/Cancioneros';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teoria" element={<Teoria/>} />
        <Route path="/Libros" element={<Libros />} />
        <Route path="/Cancioneros" element={<Cancioneros />} />
 
 
      </Routes>
    </Router>
  </React.StrictMode>
);


