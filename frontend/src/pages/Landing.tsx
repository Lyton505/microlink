import '../styles/App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

function Landing() {
  return (
    <div>
      <div className="bg-slate-100 min-h-screen h-full w-full">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
