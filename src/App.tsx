import Hero from "./components/IntroOverview";
import Who from "./components/BoxOverview";
import ModelOverview from "./components/ModelOverview";
import Contact from "./components/ContactOverview";

import "./App.scss";
import React from "react";

function App() {
  return (
    <div className="app">
      <Hero />
      <Who />
      <ModelOverview />
      <Contact />
    </div>
  );
}

export default App;
