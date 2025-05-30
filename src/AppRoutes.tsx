import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CollegeCollaborationPage from './components/CollegeCollaborationPage';
import StoriesPage from './components/StoriesPage';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/college-collaboration" element={<CollegeCollaborationPage />} />
      <Route path="/stories" element={<StoriesPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
