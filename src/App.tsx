import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Launchpad from './components/Launchpad';
import UniqueFeatures from './components/UniqueFeatures';
import Students from './components/Students';
import Collaboration from './components/Collaboration';
import CollaborationDetails from './components/CollaborationDetails';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Launchpad />
        <UniqueFeatures />
        <Students />
        <Collaboration />
        <CollaborationDetails />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;