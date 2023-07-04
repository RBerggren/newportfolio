import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
