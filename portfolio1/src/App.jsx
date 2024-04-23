import './App.css';
import { NavBar } from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/banner.jsx';
import { Skills } from './components/skills.jsx';
import { Projects } from './components/projects.jsx';
import { Contact } from './components/contact.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
