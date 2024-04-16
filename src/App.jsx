import styles from "./App.module.css";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
// import { Bridge } from "./Bridge.jsx";
// import { Praxis1 } from "./Praxis1.jsx";
// import { Makeuoft } from "./Makeuoft.jsx";
// import { Praxis2 } from "./Praxis2.jsx";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
