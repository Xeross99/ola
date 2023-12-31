import './App.css';
import Navbar from './components/navbar/navbar.js';
import SectionOne from './components/section_one/section_one.js'
import SectionTwo from './components/section_two/section_two.js'
import SectionThree from './components/section_three/section_three.js'
import Footer from './components/footer/footer.js';

function App() {
  return (
  <div className="scroll-smooth">
    <Navbar/>

    <SectionOne />

    <SectionTwo />

    <SectionThree />

    <Footer />
  </div>
  );
}

export default App;
