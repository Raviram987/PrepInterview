import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { CompanySelection } from './pages/CompanySelection';
import { JobPositions } from './pages/JobPositions';
import { PreparationResources } from './pages/PreparationResources';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/companies" element={<CompanySelection />} />
        <Route path="/jobs/:company" element={<JobPositions />} />
        <Route path="/resources/:company/:position" element={<PreparationResources />} />
      </Routes>
    </Router>
  );
}

export default App;