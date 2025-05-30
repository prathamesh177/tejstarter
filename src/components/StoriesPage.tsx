import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// Assuming your main page Stories section is a component called 'Testimonials'
import Testimonials from './Testimonials';

const StoriesPage: React.FC = () => (
  <div className="font-sans text-slate-700 bg-slate-50 min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <section className="pt-4">
        <Testimonials />
      </section>
    </main>
    <Footer />
  </div>
);

export default StoriesPage;
