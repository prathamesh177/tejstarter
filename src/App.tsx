import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Launchpad from './components/Launchpad';
import UniqueFeatures from './components/UniqueFeatures';
import Students from './components/Students';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Launchpad />
        <About />
        <UniqueFeatures />
        {/* <Students />
        <Testimonials /> */}
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;