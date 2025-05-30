import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Students from './Students';
import Collaboration from './Collaboration';
import CollaborationDetails from './CollaborationDetails';

const CollegeCollaborationPage: React.FC = () => (
  <div className="font-sans text-gray-900 overflow-x-hidden">
    <Navbar />
    <main>
      <Students />
      <Collaboration />
      <CollaborationDetails />
    </main>
    <Footer />
  </div>
);

export default CollegeCollaborationPage;
