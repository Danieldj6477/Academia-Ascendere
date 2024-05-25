import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CursoPage from './pages/CursoPage';
import CursoPageActiveMethods from './pages/CursoPageActiveMethods';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/curso/1" element={<CursoPage />} />
        <Route path="/curso/2" element={<CursoPageActiveMethods />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
