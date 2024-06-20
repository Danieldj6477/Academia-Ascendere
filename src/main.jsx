import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CursoPage from './pages/CursoPage';
import CursoPageActiveMethods from './pages/CursoPageActiveMethods';
import CursoPageCooperativeLearning from './pages/CursoPageCooperativeLearning';
import CursoPageAITools from './pages/CursoPageAITools';
import CursoPageSTEM from './pages/CursoPageSTEM';
import CursoPageLeadership from './pages/CursoPageLeadership';
import TestPage from './pages/TestPage';
import TestUnit1 from './components/TestUnit1';
import SatisfactionSurvey from './components/SatisfactionSurvey';

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
        <Route path="/curso/3" element={<CursoPageCooperativeLearning />} />
        <Route path="/curso/4" element={<CursoPageAITools />} />
        <Route path="/curso/5" element={<CursoPageSTEM />} />
        <Route path="/curso/6" element={<CursoPageLeadership />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test/unit1" element={<TestUnit1 numberOfQuestions={5} />} />
        <Route path="/satisfaccion" element={<SatisfactionSurvey />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
