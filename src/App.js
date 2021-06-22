import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import USection from "./components/USection";
import Testimonials from './components/Testimonials';
import Images from "./components/Images"
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <USection />
      <Testimonials />
      <Images />
      <Footer />
    </div>
  );
}

export default App;
